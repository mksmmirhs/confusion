export async function getDODSpending(fiscalYear: number) {
  const url = 'https://api.usaspending.gov/api/v2/search/spending_by_category/awarding_agency/';
  const body = {
    filters: {
      time_period: [
        {
          start_date: `${fiscalYear - 1}-10-01`,
          end_date: `${fiscalYear}-09-30`,
        },
      ],
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    // DOD agency ID 126 or code 097
    const dod = data.results.find((a: any) => a.name === 'Department of Defense');
    return dod ? dod.amount : null;
  } catch (error) {
    console.error('Error fetching DOD spending:', error);
    return null;
  }
}

export const WAR_SUPPLEMENTALS = [
  { conflict: 'Ukraine', amount: 113000000000, period: '2022-2024' },
  { conflict: 'Israel', amount: 26300000000, period: '2024' },
  { conflict: 'Afghanistan/Iraq', amount: 8000000000000, period: '2001-2021', note: 'Cumulative total' },
];
