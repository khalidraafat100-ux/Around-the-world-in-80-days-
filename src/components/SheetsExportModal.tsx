import { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Loader2,
  LogOut,
  AlertCircle,
} from 'lucide-react';
import { User } from 'firebase/auth';
import { CHAPTERS, ROUTE_STOPS } from '../data/storyData';
import { initAuth, googleSignIn, getAccessToken, logout } from '../services/auth';
import { createStorySpreadsheet, ExportResult } from '../services/googleSheets';

interface SheetsExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SheetsExportModal({ isOpen, onClose }: SheetsExportModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'sheets_sync' | 'preview_chapters' | 'preview_route'>('sheets_sync');
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportResult, setExportResult] = useState<ExportResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  if (!isOpen) return null;

  const handleSignIn = async () => {
    setIsLoadingAuth(true);
    setErrorMessage(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
      }
    } catch (err: any) {
      console.error('Sign-in error:', err);
      setErrorMessage(err.message || 'Unable to sign in with your Google account.');
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setExportResult(null);
  };

  const handleExportToGoogleSheets = async () => {
    setErrorMessage(null);
    const activeAccessToken = token || (await getAccessToken());
    if (!activeAccessToken) {
      setErrorMessage('Please sign in with your Google account first to continue.');
      return;
    }

    const confirmed = window.confirm(
      'Do you want to create a new Google Sheets workbook in your Google Drive with five detailed sheets covering all chapters, characters, itinerary stops, and workbook answers in full English?'
    );
    if (!confirmed) return;

    setIsExporting(true);
    try {
      const result = await createStorySpreadsheet(activeAccessToken);
      setExportResult(result);
    } catch (err: any) {
      console.error('Export error:', err);
      setErrorMessage(err.message || 'An error occurred while exporting data to Google Sheets.');
    } finally {
      setIsExporting(false);
    }
  };

  const getCsvData = () => {
    if (activeTab === 'preview_chapters') {
      const headers = ['Chapter', 'Title', 'Pages', 'Key Plot Milestones', 'Complete Summary'];
      const rows = CHAPTERS.map((c) => [
        c.id,
        `"${c.titleEn.replace(/"/g, '""')}"`,
        `"${c.pagesEn.replace(/"/g, '""')}"`,
        `"${c.keyEventsEn.join('; ').replace(/"/g, '""')}"`,
        `"${c.summaryEn.replace(/\n/g, ' ').replace(/"/g, '""')}"`,
      ]);
      return [headers.join('\t'), ...rows.map((r) => r.join('\t'))].join('\n');
    } else {
      const headers = ['Stop Number', 'Location Name', 'Country', 'Arrival Date', 'Mode of Transport', 'Description'];
      const rows = ROUTE_STOPS.map((s) => [
        s.id,
        `"${s.locationEn.replace(/"/g, '""')}"`,
        `"${s.countryEn.replace(/"/g, '""')}"`,
        `"${s.arrivalDateEn.replace(/"/g, '""')}"`,
        `"${s.transportModeEn.replace(/"/g, '""')}"`,
        `"${s.descriptionEn.replace(/\n/g, ' ').replace(/"/g, '""')}"`,
      ]);
      return [headers.join('\t'), ...rows.map((r) => r.join('\t'))].join('\n');
    }
  };

  const handleCopyClipboard = () => {
    const text = getCsvData();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden text-left">
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-emerald-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-300/40 flex items-center justify-center text-emerald-700 shadow-inner">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                Export to Google Sheets
              </h3>
              <p className="text-xs text-stone-500">
                Create and save a structured study workbook for Around the World in Eighty Days
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-stone-100 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('sheets_sync')}
            className={`px-3.5 py-2 border-b-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'sheets_sync'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Google Sheets Sync</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('preview_chapters')}
            className={`px-3.5 py-2 border-b-2 text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'preview_chapters'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Preview Chapters Table
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('preview_route')}
            className={`px-3.5 py-2 border-b-2 text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'preview_route'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Preview Itinerary Table
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {activeTab === 'sheets_sync' ? (
            <div className="space-y-5">
              {/* Feature highlight */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct Export to Your Google Account</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The application will create a complete Google Spreadsheet with five comprehensive tabs:
                  (1) Chapters Overview in English, (2) Route Itinerary with Dates, (3) Characters Profile,
                  (4) Workbook Solutions with Detailed Answers, and (5) Arabic Chapter Reference.
                </p>
              </div>

              {/* Authentication Box */}
              {!user ? (
                <div className="p-5 rounded-2xl border border-stone-200 bg-white shadow-xs text-center space-y-3">
                  <p className="text-xs sm:text-sm text-stone-600 font-medium">
                    To export the summary to your Google Sheets, please sign in with Google:
                  </p>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleSignIn}
                      disabled={isLoadingAuth}
                      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-semibold shadow-xs transition-all disabled:opacity-50"
                    >
                      {isLoadingAuth ? (
                        <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                      ) : (
                        <svg className="w-4 h-4" viewBox="0 0 48 48">
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          />
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          />
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          />
                        </svg>
                      )}
                      <span>Sign in with Google</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">
                        {user.displayName?.charAt(0) || 'G'}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-stone-900">
                          {user.displayName || 'Google User'}
                        </div>
                        <div className="text-2xs text-stone-500">{user.email}</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-rose-600 transition-colors"
                      title="Sign out"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign out</span>
                    </button>
                  </div>

                  {exportResult ? (
                    <div className="p-4 rounded-xl bg-white border border-emerald-300 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Spreadsheet Successfully Created!</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Five complete sheets have been exported to your personal Google Drive account.
                      </p>
                      <a
                        href={exportResult.spreadsheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-all shadow-xs"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Workbook in Google Sheets</span>
                      </a>
                    </div>
                  ) : (
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={handleExportToGoogleSheets}
                        disabled={isExporting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-all shadow-xs disabled:opacity-50"
                      >
                        {isExporting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Creating Google Spreadsheet...</span>
                          </>
                        ) : (
                          <>
                            <FileSpreadsheet className="w-4 h-4" />
                            <span>Export Summary to Google Sheets Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  {activeTab === 'preview_chapters' ? 'Chapters Summary Table' : 'Journey Itinerary Table'}
                </span>
                <button
                  type="button"
                  onClick={handleCopyClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Table to Clipboard'}</span>
                </button>
              </div>

              <div className="border border-stone-200 rounded-xl overflow-x-auto max-h-64 scrollbar-thin">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold sticky top-0">
                    {activeTab === 'preview_chapters' ? (
                      <tr>
                        <th className="p-2.5">Chapter</th>
                        <th className="p-2.5">Title</th>
                        <th className="p-2.5">Pages</th>
                        <th className="p-2.5">Summary</th>
                      </tr>
                    ) : (
                      <tr>
                        <th className="p-2.5">Stop</th>
                        <th className="p-2.5">Location</th>
                        <th className="p-2.5">Arrival Date</th>
                        <th className="p-2.5">Transport Mode</th>
                        <th className="p-2.5">Description</th>
                      </tr>
                    )}
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {activeTab === 'preview_chapters'
                      ? CHAPTERS.map((c) => (
                          <tr key={c.id} className="hover:bg-stone-50/50">
                            <td className="p-2.5 font-bold">{c.id}</td>
                            <td className="p-2.5 font-medium">{c.titleEn}</td>
                            <td className="p-2.5 text-stone-500">{c.pagesEn}</td>
                            <td className="p-2.5 text-stone-600 max-w-xs truncate">{c.summaryEn}</td>
                          </tr>
                        ))
                      : ROUTE_STOPS.map((s) => (
                          <tr key={s.id} className="hover:bg-stone-50/50">
                            <td className="p-2.5 font-bold">{s.id}</td>
                            <td className="p-2.5 font-medium">{s.locationEn}</td>
                            <td className="p-2.5 text-amber-700">{s.arrivalDateEn}</td>
                            <td className="p-2.5 text-stone-500">{s.transportModeEn}</td>
                            <td className="p-2.5 text-stone-600 max-w-xs truncate">{s.descriptionEn}</td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-100 bg-stone-50/70 flex items-center justify-between">
          <div className="text-2xs text-stone-400">
            Powered by Google Sheets API
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
