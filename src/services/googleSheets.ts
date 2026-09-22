import { CHAPTERS, ROUTE_STOPS, CHARACTERS, BOOK_ACTIVITIES_SOLUTIONS } from '../data/storyData';
import { COMPLETE_NOVEL_STORY } from '../data/fullStoryData';
import { MECHANICAL_APPARATUSES } from '../data/mechanicalData';

export interface ExportResult {
  spreadsheetId: string;
  spreadsheetUrl: string;
}

export async function createStorySpreadsheet(accessToken: string): Promise<ExportResult> {
  // 1. Create Spreadsheet with styled sheets
  const createResponse = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title: 'Around the World in Eighty Days - Study Guide, Full Story & Mechanical Features (Jules Verne)',
      },
      sheets: [
        {
          properties: {
            title: 'Chapters Overview (English)',
            gridProperties: { frozenRowCount: 1 },
          },
        },
        {
          properties: {
            title: 'Complete Novel Story (القصة كاملة)',
            gridProperties: { frozenRowCount: 1 },
          },
        },
        {
          properties: {
            title: 'Mechanical Inventions (الابتكارات الهندسية)',
            gridProperties: { frozenRowCount: 1 },
          },
        },
        {
          properties: {
            title: 'Journey Itinerary',
            gridProperties: { frozenRowCount: 1 },
          },
        },
        {
          properties: {
            title: 'Characters Profile',
            gridProperties: { frozenRowCount: 1 },
          },
        },
        {
          properties: {
            title: 'Workbook Solutions',
            gridProperties: { frozenRowCount: 1 },
          },
        },
        {
          properties: {
            title: 'الفصول الستة (عربي)',
            gridProperties: { frozenRowCount: 1 },
          },
        },
      ],
    }),
  });

  if (!createResponse.ok) {
    const errorData = await createResponse.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Failed to create Google Spreadsheet');
  }

  const spreadsheet = await createResponse.json();
  const spreadsheetId = spreadsheet.spreadsheetId;

  // 2. Format data sets
  const chaptersEnData = [
    ['Chapter #', 'English Title', 'Arabic Title', 'Page Range', 'Key Events', 'Full Summary'],
    ...CHAPTERS.map((c) => [
      c.id,
      c.titleEn,
      c.titleAr,
      c.pages,
      c.keyEventsEn.join(' | '),
      c.summaryEn,
    ]),
  ];

  const fullStoryData = [
    ['Chapter #', 'English Title', 'Arabic Title', 'Setting', 'Dates', 'Novel Narrative (Full Text)', 'Pivotal Moments', 'Famous Highlight Quote'],
    ...COMPLETE_NOVEL_STORY.map((c) => [
      c.chapterNumber,
      c.titleEn,
      c.titleAr,
      c.settingEn,
      c.datesEn,
      c.fullStoryParagraphsEn.join('\n\n'),
      c.dramaticMomentsEn.join(' | '),
      `"${c.highlightQuoteEn.quote}" — ${c.highlightQuoteEn.speaker}`,
    ]),
  ];

  const mechanicalData = [
    [
      'Apparatus / Machine Name',
      'الاسم بالعربية',
      'Category',
      'Chapter Featured',
      'Speed / Velocity',
      'Propulsion Engine',
      'Fuel / Thermal Energy',
      'Horsepower / Power Output',
      'Engineering Role in Novel',
      'Scientific & Physics Principle',
      'Jules Verne Novel Excerpt',
    ],
    ...MECHANICAL_APPARATUSES.map((m) => [
      m.nameEn,
      m.nameAr,
      m.categoryEn,
      `Chapter ${m.featuredInChapter}`,
      m.specs.speedEn,
      m.specs.propulsionEn,
      m.specs.fuelEn,
      m.specs.powerEn,
      m.engineeringSummaryEn,
      m.scientificPrincipleEn,
      `"${m.novelQuoteEn}"`,
    ]),
  ];

  const routeData = [
    ['Stop #', 'Location (English)', 'Country', 'Arrival Date', 'Transport Mode', 'Historical Notes & Challenges'],
    ...ROUTE_STOPS.map((r) => [
      r.id,
      r.locationEn,
      r.countryEn,
      r.arrivalDateEn,
      r.transportModeEn,
      r.descriptionEn,
    ]),
  ];

  const charactersData = [
    ['Character Name', 'Role in Story', 'Key Traits', 'Significance in Novel', 'الاسم بالعربية', 'الدور'],
    ...CHARACTERS.map((char) => [
      char.nameEn,
      char.roleEn,
      char.traitsEn.join(', '),
      char.descriptionEn,
      char.nameAr,
      char.roleAr,
    ]),
  ];

  const activitiesData = [
    ['Chapter', 'Exercise Title', 'Question or Statement', 'Complete Model Answer'],
    ...BOOK_ACTIVITIES_SOLUTIONS.flatMap((act) =>
      act.questions.map((q) => [
        `Chapter ${act.chapterId}`,
        act.exerciseTitleEn,
        q.qEn,
        q.answerEn,
      ])
    ),
  ];

  const chaptersArData = [
    ['رقم الفصل', 'العنوان بالعربية', 'العنوان بالإنجليزية', 'الصفحات', 'أبرز الأحداث', 'ملخص الفصل الكامل'],
    ...CHAPTERS.map((c) => [
      c.id,
      c.titleAr,
      c.titleEn,
      c.pages,
      c.keyEvents.join(' | '),
      c.summaryAr,
    ]),
  ];

  // 3. Batch write all sheets
  const updateResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchUpdate`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valueInputOption: 'USER_ENTERED',
        data: [
          {
            range: "'Chapters Overview (English)'!A1",
            values: chaptersEnData,
          },
          {
            range: "'Complete Novel Story (القصة كاملة)'!A1",
            values: fullStoryData,
          },
          {
            range: "'Mechanical Inventions (الابتكارات الهندسية)'!A1",
            values: mechanicalData,
          },
          {
            range: "'Journey Itinerary'!A1",
            values: routeData,
          },
          {
            range: "'Characters Profile'!A1",
            values: charactersData,
          },
          {
            range: "'Workbook Solutions'!A1",
            values: activitiesData,
          },
          {
            range: "'الفصول الستة (عربي)'!A1",
            values: chaptersArData,
          },
        ],
      }),
    }
  );

  if (!updateResponse.ok) {
    const errorData = await updateResponse.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Failed to save summary contents into Google Sheets');
  }

  return {
    spreadsheetId,
    spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
  };
}
