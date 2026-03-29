export interface LegislatorVote {
  bill: string;
  senate_yea: number;
  senate_nay: number;
  house_yea: number;
  house_nay: number;
  year: number;
  description: string;
  total_funding?: string;
  senate_party: string;
  house_party: string;
}

export const LEGISLATIVE_RECORDS: LegislatorVote[] = [
  {
    bill: 'National Security Supplemental (H.R. 815)',
    year: 2024,
    senate_yea: 79,
    senate_nay: 18,
    house_yea: 311,
    house_nay: 112,
    description: 'Foreign aid for Ukraine, Israel, and Taiwan.',
    total_funding: '$95 Billion',
    senate_party: 'D-Led',
    house_party: 'R-Led',
  },
  {
    bill: 'FY2024 NDAA (H.R. 2670)',
    year: 2023,
    senate_yea: 87,
    senate_nay: 13,
    house_yea: 310,
    house_nay: 118,
    description: 'Annual defense authorization act.',
    total_funding: '$886 Billion',
    senate_party: 'D-Led',
    house_party: 'R-Led',
  },
  {
    bill: 'AUMF Iraq (H.J.Res. 114)',
    year: 2002,
    senate_yea: 77,
    senate_nay: 23,
    house_yea: 296,
    house_nay: 133,
    description: 'Authorization for Use of Military Force Against Iraq.',
    senate_party: 'D-Led',
    house_party: 'R-Led',
  },
  {
    bill: 'AUMF Afghanistan (S.J.Res. 23)',
    year: 2001,
    senate_yea: 98,
    senate_nay: 0,
    house_yea: 420,
    house_nay: 1,
    description: 'Authorization for Use of Military Force (9/11 response).',
    senate_party: 'D-Led',
    house_party: 'R-Led',
  },
];
