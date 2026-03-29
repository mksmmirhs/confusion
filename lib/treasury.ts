export async function getCurrentDebt() {
  const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&limit=1';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error('Error fetching current debt:', error);
    return null;
  }
}

export async function getDebtHistory() {
  const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_outstanding?sort=-record_date&limit=20';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching debt history:', error);
    return [];
  }
}
