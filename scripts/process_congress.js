const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('data/congress_raw.json', 'utf8'));
const processed = rawData.map(m => {
  const currentTerm = m.terms[m.terms.length - 1];
  return {
    id: m.id.bioguide,
    opensecrets: m.id.opensecrets,
    name: m.name.official_full || `${m.name.first} ${m.name.last}`,
    first: m.name.first,
    last: m.name.last,
    party: currentTerm.party,
    state: currentTerm.state,
    type: currentTerm.type, // 'sen' or 'rep'
    gender: m.bio.gender,
    birthday: m.bio.birthday,
    term_start: currentTerm.start,
    term_end: currentTerm.end,
    phone: currentTerm.phone,
    url: currentTerm.url,
    office: currentTerm.office
  };
});

fs.writeFileSync('data/congress.json', JSON.stringify(processed, null, 2));
console.log(`Processed ${processed.length} members.`);
