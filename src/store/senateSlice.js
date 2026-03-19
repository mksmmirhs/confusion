import { createSlice } from '@reduxjs/toolkit';

// Centralised Data for the 100-member Senate (119th Congress)
const nodes = [
  // Institutional Hubs
  { id: "BlackRock", type: "finance", group: "The Big Three", info: "World's largest asset manager. Top shareholder in nearly all major defense contractors and US banks." },
  { id: "Vanguard", type: "finance", group: "The Big Three", info: "Major shareholder in the US industrial base. Significant influence over corporate political spending." },
  { id: "State Street", type: "finance", group: "The Big Three", info: "Institutional giant with massive holdings in aerospace and Israeli sovereign debt." },
  
  // Domestic Lobby Power
  { id: "AIPAC", type: "lobby", group: "Israel Lobby", info: "The primary force for US-Israel military aid. Spends over $100M per cycle via PAC and bundled funds." },
  { id: "UDP", type: "lobby", group: "AIPAC Super PAC", info: "Directly funds campaigns to ensure a pro-Israel Senate majority." },
  { id: "JINSA", type: "lobby", group: "Defense/Security Nexus", info: "Integrates US defense policy with Israeli strategic interests." },

  // Defense Giants (Capitalized by Big Three)
  { id: "Lockheed Martin", type: "defense", group: "Contractors", info: "Primary F-35 maker. Recipient of billions in aid-funded contracts." },
  { id: "Boeing", type: "defense", group: "Contractors", info: "Deeply integrated in Tel Aviv. Supplies JDAM bombs and F-15s." },
  { id: "RTX (Raytheon)", type: "defense", group: "Contractors", info: "Manufacturer of Iron Dome interceptors. Massive lobbying presence in DC." },
  { id: "Northrop Grumman", type: "defense", group: "Contractors", info: "Global security provider with significant lobby spending." },

  // Policy Output
  { id: "US-Israel Aid Package", type: "policy", group: "Legislative Product", info: "$3.8B - $14B annually. The specific outcome of the lobby-contractor-senate nexus." },

  // 100 US Senators (Mapping 2025 Census)
  // DEMOCRATS
  { id: "Chuck Schumer", type: "democrat", state: "NY", identity: "Jewish", info: "Majority Leader. Central hub for financial and lobbyist coordination." },
  { id: "Dick Durbin", type: "democrat", state: "IL", identity: "Catholic", info: "Majority Whip. Significant influence on foreign aid appropriations." },
  { id: "Bernie Sanders", type: "democrat", state: "VT", identity: "Jewish", info: "Independent/Caucuses with D. Vocal critic of military-industrial spending." },
  { id: "Elizabeth Warren", type: "democrat", state: "MA", identity: "Methodist", info: "Defense Committee Member. Critic of financial 'Big Three' consolidation." },
  { id: "John Fetterman", type: "democrat", state: "PA", identity: "Jewish/Catholic Ties", info: "Top recipient of UDP/AIPAC funding in the 2024 cycle." },
  { id: "Mark Warner", type: "democrat", state: "VA", identity: "Presbyterian", info: "Venture capital background. Strong alignment with institutional financiers." },
  { id: "Jacky Rosen", type: "democrat", state: "NV", identity: "Jewish", info: "Leads cybersecurity and pro-Israel tech initiatives." },
  { id: "Cory Booker", type: "democrat", state: "NJ", identity: "Baptist", info: "Foreign Relations member with strong pro-Israel voting record." },
  { id: "Chris Coons", type: "democrat", state: "DE", identity: "Presbyterian", info: "Appropriations hub. Key advocate for international military aid." },
  { id: "Adam Schiff", type: "democrat", state: "CA", identity: "Jewish", info: "Heavy focus on intelligence and defense industry integration." },
  { id: "Amy Klobuchar", type: "democrat", state: "MN", identity: "Congregationalist", info: "Significant corporate and lobbyist alignment in key sectors." },
  { id: "Jon Ossoff", type: "democrat", state: "GA", identity: "Jewish", info: "Focus on human rights within the context of the nexus." },
  { id: "Raphael Warnock", type: "democrat", state: "GA", identity: "Baptist", info: "Strong base alignment with pro-aid demographics." },
  { id: "Tim Kaine", type: "democrat", state: "VA", identity: "Catholic", info: "Sits on Armed Services. Major defense hub in Virginia." },
  { id: "Mark Kelly", type: "democrat", state: "AZ", identity: "Catholic", info: "Former astronaut. Deep ties to aerospace and defense contractors." },
  { id: "Tammy Duckworth", type: "democrat", state: "IL", identity: "Buddhist/Christian", info: "Veteran. Influential voice on military equipment procurement." },
  { id: "Bob Casey", type: "democrat", state: "PA", identity: "Catholic", info: "Aligned with industrial defense manufacturing." },
  { id: "Sherrod Brown", type: "democrat", state: "OH", identity: "Lutheran", info: "Focuses on manufacturing aspects of the defense industry." },
  { id: "Ron Wyden", type: "democrat", state: "OR", identity: "Jewish", info: "Finance Committee Chair. Key role in taxing financial giants." },
  { id: "Maria Cantwell", type: "democrat", state: "WA", identity: "Catholic", info: "Commerce Chair. Heavy focus on Boeing (WA based) and aerospace." },
  { id: "Patty Murray", type: "democrat", state: "WA", identity: "Catholic", info: "Appropriations Chair. Controls the literal flow of aid money." },
  { id: "Chris Murphy", type: "democrat", state: "CT", identity: "Congregationalist", info: "Foreign Relations. Leading advocate for aid oversight." },
  { id: "Richard Blumenthal", type: "democrat", state: "CT", identity: "Jewish", info: "Armed Services. Strong advocate for defense-legal integration." },
  { id: "Kirsten Gillibrand", type: "democrat", state: "NY", identity: "Catholic", info: "Armed Services. Focus on military personnel and defense tech." },
  { id: "Ben Cardin", type: "democrat", state: "MD", identity: "Jewish", info: "Foreign Relations hub. Primary author of aid legislation." },
  { id: "Chris Van Hollen", type: "democrat", state: "MD", identity: "Episcopalian", info: "Foreign Relations. Active in aid and human rights oversight." },
  { id: "Jeff Merkley", type: "democrat", state: "OR", identity: "Lutheran", info: "Appropriations member focused on aid impacts." },
  { id: "Brian Schatz", type: "democrat", state: "HI", identity: "Jewish", info: "Appropriations member. Focuses on Pacific defense nexus." },
  { id: "Mazie Hirono", type: "democrat", state: "HI", identity: "Buddhist", info: "Armed Services member. Key for naval defense contracts." },
  { id: "Martin Heinrich", type: "democrat", state: "NM", identity: "Catholic", info: "Armed Services. NM is a hub for nuclear and lab defense." },
  { id: "Ben Ray Luján", type: "democrat", state: "NM", identity: "Catholic", info: "Focus on tech and communication defense infrastructure." },
  { id: "Catherine Cortez Masto", type: "democrat", state: "NV", identity: "Catholic", info: "Focus on mineral and energy defense resources." },
  { id: "Alex Padilla", type: "democrat", state: "CA", identity: "Catholic", info: "Represents CA's massive aerospace and tech defense base." },
  { id: "Tina Smith", type: "democrat", state: "MN", identity: "Episcopalian", info: "Focus on medical and tech defense applications." },
  { id: "Peter Welch", type: "democrat", state: "VT", identity: "Catholic", info: "Focus on small-state defense infrastructure." },
  { id: "John Hickenlooper", type: "democrat", state: "CO", identity: "Quaker", info: "Focus on aerospace and satellite defense initiatives." },
  { id: "Michael Bennet", type: "democrat", state: "CO", identity: "Jewish/Christian", info: "Intelligence member. Key for advanced tech surveillance mapping." },
  { id: "Jon Tester", type: "democrat", state: "MT", identity: "Christian", info: "Appropriations. Controls funding for rural defense infrastructure." },
  { id: "Kyrsten Sinema", type: "democrat", state: "AZ", identity: "None", info: "Independent caucusing with D. Critical for centrist nexus leverage." },
  { id: "Angus King", type: "democrat", state: "ME", identity: "Episcopalian", info: "Independent caucusing with D. Sits on Intelligence and Armed Services." },
  { id: "Maggie Hassan", type: "democrat", state: "NH", identity: "United Church", info: "Homeland Security focus with strong defense connections." },
  { id: "Jeanne Shaheen", type: "democrat", state: "NH", identity: "United Church", info: "Armed Services and Foreign Relations. Major hub for aid policy." },
  { id: "Sheldon Whitehouse", type: "democrat", state: "RI", identity: "Episcopalian", info: "Finance focus. Advocate for dark money disclosure in lobbying." },
  { id: "Jack Reed", type: "democrat", state: "RI", identity: "Catholic", info: "Armed Services Chairman. The single most powerful Senator on defense." },
  { id: "Gary Peters", type: "democrat", state: "MI", identity: "Episcopalian", info: "Armed Services. Key for vehicle and automated defense tech." },

  // REPUBLICANS
  { id: "Mitch McConnell", type: "republican", state: "KY", identity: "Baptist", info: "Minority Leader. Architect of the industrial defense establishment." },
  { id: "John Thune", type: "republican", state: "SD", identity: "Protestant", info: "Minority Whip. Key coordinator for corporate-legislative nexus." },
  { id: "Lindsey Graham", type: "republican", state: "SC", identity: "Baptist", info: "Appropriations. Foremost advocate for uncapped military aid." },
  { id: "Tom Cotton", type: "republican", state: "AR", identity: "Methodist", info: "Defense hawk with the closest ties to the defense-lobby nexus." },
  { id: "Marco Rubio", type: "republican", state: "FL", identity: "Catholic", info: "Intelligence Vice Chair. Key for strategic aid and surveillance policy." },
  { id: "Ted Cruz", type: "republican", state: "TX", identity: "Baptist", info: "Strong donor alignment with the Israel lobby and oil-defense nexus." },
  { id: "Josh Hawley", type: "republican", state: "MO", identity: "Presbyterian", info: "Focuses on tech-defense and populist oversight." },
  { id: "Rick Scott", type: "republican", state: "FL", identity: "Christian", info: "Wealthiest Republican; massive personal and donor nexus." },
  { id: "Tim Scott", type: "republican", state: "SC", identity: "Evangelical", info: "Recipient of massive institutional and pro-aid evangelical support." },
  { id: "J.D. Vance", type: "republican", state: "OH", identity: "Catholic", info: "Representing the newer populist-tech-defense alignment." },
  { id: "John Barrasso", type: "republican", state: "WY", identity: "Presbyterian", info: "Energy-Defense nexus leader. Key for resource policy." },
  { id: "Marsha Blackburn", type: "republican", state: "TN", identity: "Church of Christ", info: "Armed Services member. Focus on tech and surveillance." },
  { id: "Bill Cassidy", type: "republican", state: "LA", identity: "Catholic", info: "Finance focus with strong connections to health-defense tech." },
  { id: "Susan Collins", type: "republican", state: "ME", identity: "Catholic", info: "Appropriations powerhouse. Key for shipbuilding contracts." },
  { id: "John Cornyn", type: "republican", state: "TX", identity: "Church of Christ", info: "Finance and Judiciary. Key for lobby-legal frameworks." },
  { id: "Kevin Cramer", type: "republican", state: "ND", identity: "Protestant", info: "Armed Services and Banking. Integrated in multiple nexus layers." },
  { id: "Mike Crapo", type: "republican", state: "ID", identity: "LDS", info: "Finance hub. Key for capital market defense integration." },
  { id: "Steve Daines", type: "republican", state: "MT", identity: "Presbyterian", info: "Finance and Banking focus. Key for lobby funding flows." },
  { id: "Joni Ernst", type: "republican", state: "IA", identity: "Lutheran", info: "Armed Services. Leading voice for munitions and aid logistics." },
  { id: "Deb Fischer", type: "republican", state: "NE", identity: "Presbyterian", info: "Armed Services member. Key for strategic nuclear defense." },
  { id: "Chuck Grassley", type: "republican", state: "IA", identity: "Baptist", info: "Nexus oversight leader. Longest serving GOP senator." },
  { id: "Bill Hagerty", type: "republican", state: "TN", identity: "Presbyterian", info: "Foreign Relations and Appropriations. Key for aid and finance." },
  { id: "John Hoeven", type: "republican", state: "ND", identity: "Lutheran", info: "Appropriations veteran. Key for tech and logistics funding." },
  { id: "Cindy Hyde-Smith", type: "republican", state: "MS", identity: "Baptist", info: "Appropriations member. Focus on defense manufacturing." },
  { id: "Ron Johnson", type: "republican", state: "WI", identity: "Lutheran", info: "Top recipient of pro-Israel bundled contributions." },
  { id: "John Kennedy", type: "republican", state: "LA", identity: "Methodist", info: "Appropriations powerhouse. Heavy focus on state defense nexus." },
  { id: "James Lankford", type: "republican", state: "OK", identity: "Baptist", info: "Appropriations and Finance. Key for religious/lobby alignment." },
  { id: "Mike Lee", type: "republican", state: "UT", identity: "LDS", info: "Judiciary focus. Critic of certain executive aid reaches." },
  { id: "Cynthia Lummis", type: "republican", state: "WY", identity: "Lutheran", info: "Banking focus. Digital asset defense nexus leader." },
  { id: "Roger Marshall", type: "republican", state: "KS", identity: "Methodist", info: "Agriculture-Defense nexus. Focuses on tech applications." },
  { id: "Jerry Moran", type: "republican", state: "KS", identity: "Methodist", info: "Appropriations and Commerce. Defense aerospace hub." },
  { id: "Markwayne Mullin", type: "republican", state: "OK", identity: "Christian", info: "Armed Services. Rapidly becoming a top recipient of pro-Israel aid." },
  { id: "Lisa Murkowski", type: "republican", state: "AK", identity: "Catholic", info: "Appropriations. Controls the massive Alaska defense budget." },
  { id: "Rand Paul", type: "republican", state: "KY", identity: "Presbyterian", info: "Foreign Relations critic. Vocal opponent of the aid-nexus." },
  { id: "Pete Ricketts", type: "republican", state: "NE", identity: "Catholic", info: "Foreign Relations. Aligned with traditional GOP aid policy." },
  { id: "Jim Risch", type: "republican", state: "ID", identity: "Catholic", info: "Foreign Relations Ranking Member. Authorizes all aid packages." },
  { id: "Mitt Romney", type: "republican", state: "UT", identity: "LDS", info: "Foreign Relations. Strong proponent of institutional defense aid." },
  { id: "Mike Rounds", type: "republican", state: "SD", identity: "Catholic", info: "Armed Services and Banking. Key for financial defense nexus." },
  { id: "Eric Schmitt", type: "republican", state: "MO", identity: "Catholic", info: "Armed Services. Focus on advanced tech and cyber defense." },
  { id: "Dan Sullivan", type: "republican", state: "AK", identity: "Catholic", info: "Armed Services and Foreign Relations. Key for Arctic and aid nexus." },
  { id: "Thom Tillis", type: "republican", state: "NC", identity: "Catholic", info: "Armed Services and Banking. Key NC defense industrial hub." },
  { id: "Tommy Tuberville", type: "republican", state: "AL", identity: "None", info: "Armed Services. Focus on military policy and aid logistics." },
  { id: "Roger Wicker", type: "republican", state: "MS", identity: "Presbyterian", info: "Armed Services Ranking Member. Controls the defense agenda." },
  { id: "Todd Young", type: "republican", state: "IN", identity: "Presbyterian", info: "Foreign Relations. Author of major tech-defense bills." },
  { id: "Katie Britt", type: "republican", state: "AL", identity: "Baptist", info: "Appropriations rising star. Strong alignment with defense corps." },
  { id: "Dave McCormick", type: "republican", state: "PA", identity: "Catholic", info: "Former Bridgewater CEO. The direct personification of the Finance-Senate nexus." },
  { id: "Bernie Moreno", type: "republican", state: "OH", identity: "Catholic", info: "Tech-focused GOP addition to the Senate-Power nexus." },
  { id: "Jim Banks", type: "republican", state: "IN", identity: "Christian", info: "Armed Services hawk with deep contractor and lobby ties." },
  { id: "Tim Sheehy", type: "republican", state: "MT", identity: "Catholic", info: "Defense contractor founder. The ultimate direct nexus node." },
  { id: "Sam Brown", type: "republican", state: "NV", identity: "Christian", info: "Veteran advocacy nexus hub." },
  { id: "Kari Lake", type: "republican", state: "AZ", identity: "Christian", info: "Populist-Media-Defense nexus node." },
  { id: "Joe Manchin", type: "democrat", state: "WV", identity: "Catholic", info: "Independent caucusing with D. The energy-defense nexus king." },
  { id: "Jim Justice", type: "republican", state: "WV", identity: "Christian", info: "Resource-Power nexus hub." },
  { id: "Angela Alsobrooks", type: "democrat", state: "MD", identity: "Baptist", info: "First Black female senator. Strong pro-aid alignment." },
  { id: "Lisa Blunt Rochester", type: "democrat", state: "DE", identity: "Episcopalian", info: "First Black female senator. Key for industrial Delaware nexus." },
  { id: "John Husted", type: "republican", state: "OH", identity: "Catholic", info: "Appointed to replace Vance. Conservative nexus node." },
  { id: "Ashley Moody", type: "republican", state: "FL", identity: "Catholic", info: "Appointed to replace Rubio. Strong law-enforcement and aid alignment." },
  { id: "Laphonza Butler", type: "democrat", state: "CA", identity: "Christian", info: "Representing Labor-Defense nexus in CA." },
  { id: "George Helmy", type: "democrat", state: "NJ", identity: "Coptic Christian", info: "Foreign Relations focus." },
  { id: "Tammy Baldwin", type: "democrat", state: "WI", identity: "None", info: "Focus on Wisconsin defense manufacturing nexus." },
  { id: "Alex P. Green", type: "democrat", state: "TX", identity: "Christian", info: "Emerging node in the Texas urban defense nexus." },
  { id: "Sarah Elfreth", type: "democrat", state: "MD", identity: "Protestant", info: "Focus on Chesapeake defense and maritime nexus." },
  { id: "Ruben Gallego", type: "democrat", state: "AZ", identity: "Catholic", info: "Marine veteran. Strong ties to the aerospace-defense lobby." },
  { id: "Andy Kim", type: "democrat", state: "NJ", identity: "Presbyterian", info: "Foreign Affairs expert. Key for international aid strategy." },

  { id: "Oil Giants", type: "oil", group: "Energy Titans", info: "The collective influence of the fossil fuel industry, driving Middle East security policy." },
  { id: "ExxonMobil", type: "oil", group: "Energy Titans", info: "Major funder of GOP senate campaigns. Integrated into the global US security umbrella." },
  { id: "Chevron", type: "oil", group: "Energy Titans", info: "Global oil giant with deep strategic interest in the Middle East and US military protection." },
  { id: "ConocoPhillips", type: "oil", group: "Energy Titans", info: "Significant energy lobby player focused on resource security and extraction." },

  // SYSTEMIC NODES (The War Mechanics)
  { id: "Petrodollar System", type: "system", group: "Monetary Nexus", info: "The 1974 agreement: US protects Saudi oil in exchange for USD pricing, creating permanent military demand." },
  { id: "Saudi Security Agreement", type: "system", group: "Military Nexus", info: "The 'Guns for Oil' foundation of US Middle East policy." },
  { id: "Appropriations Committee", type: "hub", group: "Senate Power Hub", info: "The 'Power of the Purse'. Controls the flow of defense, aid, and oil-security spending." },
  { id: "Foreign Relations", type: "hub", group: "Senate Power Hub", info: "Sets the strategic agenda for war and international alignment." },

  // HISTORICAL WAR LEGACY (2001-2026)
  { id: "Iraq AUMF (2002)", type: "legacy", group: "War Authorization", info: "The 2002 vote that launched the Iraq War. Passed 77-23. The foundational 'Hawk' metric." },
  { id: "Afghanistan AUMF (2001)", type: "legacy", group: "War Authorization", info: "The 2001 vote in response to 9/11. Passed 98-0. Launched the 20-year Global War on Terror." },
  { id: "PNAC Blueprint", type: "legacy", group: "Think Tank", info: "Project for the New American Century. Advocated for Iraq regime change years before 9/11." }
];

const links = [
  // THE WAR LEGACY PATHWAY (Holdover Hawks)
  { source: "Iraq AUMF (2002)", target: "Chuck Schumer", value: 10, label: "Voted YEA" },
  { source: "Iraq AUMF (2002)", target: "Mitch McConnell", value: 10, label: "Voted YEA" },
  { source: "Iraq AUMF (2002)", target: "Susan Collins", value: 10, label: "Voted YEA" },
  { source: "Iraq AUMF (2002)", target: "Chuck Grassley", value: 10, label: "Voted YEA" },
  { source: "Iraq AUMF (2002)", target: "Maria Cantwell", value: 10, label: "Voted YEA" },
  
  { source: "Afghanistan AUMF (2001)", target: "Dick Durbin", value: 10, label: "Voted YEA" },
  { source: "Afghanistan AUMF (2001)", target: "Patty Murray", value: 10, label: "Voted YEA" },
  { source: "Afghanistan AUMF (2001)", target: "Jack Reed", value: 10, label: "Voted YEA" },
  { source: "Afghanistan AUMF (2001)", target: "Ron Wyden", value: 10, label: "Voted YEA" },

  { source: "PNAC Blueprint", target: "Iraq AUMF (2002)", value: 9, label: "Ideological Blueprint" },
  { source: "Iraq AUMF (2002)", target: "Lockheed Martin", value: 8, label: "Legacy Profit Pathway" },
  { source: "Afghanistan AUMF (2001)", target: "Boeing", value: 8, label: "Legacy Profit Pathway" },

  // THE CAPITAL PATHWAY (Big Three Ownership)
  { source: "BlackRock", target: "Lockheed Martin", value: 10, label: "Major Shareholder (10%+)" },
  { source: "Vanguard", target: "Lockheed Martin", value: 10, label: "Top Institutional Shareholder" },
  { source: "State Street", target: "Lockheed Martin", value: 8, label: "Top 3 Shareholder" },
  { source: "BlackRock", target: "Boeing", value: 10, label: "Top Shareholder" },
  { source: "Vanguard", target: "Boeing", value: 10, label: "Top Shareholder" },
  { source: "BlackRock", target: "RTX (Raytheon)", value: 10, label: "Top Shareholder" },
  { source: "Vanguard", target: "ExxonMobil", value: 10, label: "Top Institutional Owner" },
  { source: "BlackRock", target: "Chevron", value: 10, label: "Major Shareholder" },

  // THE WAR & OIL PATHWAY (Petrodollar Mechanics)
  { source: "Petrodollar System", target: "Saudi Security Agreement", value: 10, label: "Foundational Exchange" },
  { source: "Saudi Security Agreement", target: "US-Israel Aid Package", value: 7, label: "Strategic Regional Alignment" },
  { source: "ExxonMobil", target: "Ted Cruz", value: 8, label: "Top Oil Recipient ($445k+)" },
  { source: "Chevron", target: "John Cornyn", value: 7, label: "Strategic Energy Hub" },
  { source: "Oil Giants", target: "Lindsey Graham", value: 6, label: "Hawkish Energy Advocacy" },
  { source: "Petrodollar System", target: "Lockheed Martin", value: 9, label: "Guns for Oil Loop" },
  
  // THE LOBBY PATHWAY (Influence Flow)
  { source: "AIPAC", target: "UDP", value: 10, label: "Funding Conduit" },
  { source: "AIPAC", target: "US-Israel Aid Package", value: 10, label: "Primary Policy Driver" },
  { source: "JINSA", target: "US-Israel Aid Package", value: 8, label: "Strategic Justification" },
  
  // THE CONTRACT PATHWAY (Procurement Flow)
  { source: "US-Israel Aid Package", target: "Lockheed Martin", value: 9, label: "F-35 Procurement Flow" },
  { source: "US-Israel Aid Package", target: "Boeing", value: 9, label: "JDAM/F-15 Procurement Flow" },
  { source: "US-Israel Aid Package", target: "RTX (Raytheon)", value: 9, label: "Iron Dome Procurement Flow" },

  // THE POLITICAL & HUB NEXUS (Senator Funding & Internal Hubs)
  { source: "AIPAC", target: "Chuck Schumer", value: 8, label: "Campaign Support ($Millions)" },
  { source: "Appropriations Committee", target: "Chuck Schumer", value: 9, label: "Leader Control" },
  { source: "AIPAC", target: "Mitch McConnell", value: 8, label: "Campaign Support ($Millions)" },
  { source: "Appropriations Committee", target: "Mitch McConnell", value: 9, label: "Leader Control" },
  { source: "Foreign Relations", target: "Jim Risch", value: 9, label: "Ranking Member Poder" },
  { source: "Foreign Relations", target: "Ben Cardin", value: 9, label: "Chairman Influence" },
  { source: "UDP", target: "John Fetterman", value: 9, label: "Critical Primary Funding" },
  { source: "Lockheed Martin", target: "Lindsey Graham", value: 7, label: "Appropriations Support" },
  { source: "Boeing", target: "Maria Cantwell", value: 9, label: "State Industrial Nexus" },
  { source: "BlackRock", target: "Mark Warner", value: 6, label: "Financial Institutional Alignment" },
  { source: "AIPAC", target: "Jacky Rosen", value: 7, label: "Pro-Aid Advocate" },
  { source: "AIPAC", target: "Ron Johnson", value: 8, label: "Top Pro-Israel Recipient" },
  { source: "RTX (Raytheon)", target: "Jack Reed", value: 8, label: "Defense Oversight Hub" },
  { source: "Appropriations Committee", target: "Patty Murray", value: 10, label: "Chair of the Purse" },
  { source: "ExxonMobil", target: "John Barrasso", value: 8, label: "Energy Hub Leader" }
];

const initialState = {
  nodes,
  links,
  filteredNodes: nodes,
  filteredLinks: links,
  filter: 'all', // 'all', 'big-three', 'israel-lobby', 'defense'
  selectedNode: null,
};

const senateSlice = createSlice({
  name: 'senate',
  initialState,
  reducers: {
    setSelectedNode: (state, action) => {
      state.selectedNode = action.payload;
    },
    setFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
      
      if (filter === 'all') {
        state.filteredNodes = state.nodes;
        state.filteredLinks = state.links;
      } else {
        let targetIds = [];
        if (filter === 'big-three') {
          targetIds = [
            'BlackRock', 'Vanguard', 'State Street', 
            'Lockheed Martin', 'Boeing', 'RTX (Raytheon)', 'Northrop Grumman',
            'Mark Warner', 'Dave McCormick', 'Maria Cantwell', 'Lindsey Graham', 'Roger Wicker', 'Jack Reed'
          ];
        } else if (filter === 'israel-lobby') {
          targetIds = [
            'AIPAC', 'UDP', 'JINSA', 'CUFI', 'US-Israel Aid Package', 
            'Chuck Schumer', 'John Fetterman', 'Lindsey Graham', 'Markwayne Mullin', 'Ron Johnson', 
            'Jacky Rosen', 'Ben Cardin', 'Chris Coons', 'Mitch McConnell', 'John Kennedy',
            'Lockheed Martin', 'Boeing', 'RTX (Raytheon)'
          ];
        } else if (filter === 'war-oil') {
          targetIds = [
            'Oil Giants', 'ExxonMobil', 'Chevron', 'ConocoPhillips', 'Petrodollar System', 'Saudi Security Agreement',
            'Lockheed Martin', 'Boeing', 'RTX (Raytheon)',
            'Ted Cruz', 'John Cornyn', 'Lindsey Graham', 'John Barrasso', 'Dan Sullivan', 'Mitch McConnell'
          ];
        } else if (filter === 'senate-hubs') {
          targetIds = [
            'Appropriations Committee', 'Foreign Relations',
            'Chuck Schumer', 'Mitch McConnell', 'Patty Murray', 'Jim Risch', 'Ben Cardin', 'Jack Reed', 'John Thune', 'Dick Durbin'
          ];
        } else if (filter === 'war-legacy') {
          targetIds = [
            'Iraq AUMF (2002)', 'Afghanistan AUMF (2001)', 'PNAC Blueprint',
            'Chuck Schumer', 'Mitch McConnell', 'Susan Collins', 'Chuck Grassley', 'Maria Cantwell',
            'Dick Durbin', 'Patty Murray', 'Jack Reed', 'Ron Wyden',
            'Lockheed Martin', 'Boeing'
          ];
        }

        // 1. Filter nodes based on targetIds or type
        const filteredNodes = state.nodes.filter(n => 
          targetIds.includes(n.id) || 
          (filter === 'big-three' && n.type === 'finance') ||
          (filter === 'israel-lobby' && (n.type === 'lobby' || n.type === 'policy')) ||
          (filter === 'war-oil' && (n.type === 'oil' || n.type === 'system')) ||
          (filter === 'senate-hubs' && n.type === 'hub') ||
          (filter === 'war-legacy' && n.type === 'legacy')
        );

        // 2. Create a set of available node IDs for fast lookup
        const nodeIds = new Set(filteredNodes.map(n => n.id));

        // 3. Filter links: ONLY include links where BOTH endpoints exist in filteredNodes
        const filteredLinks = state.links.filter(l => {
          const sourceId = typeof l.source === 'string' ? l.source : l.source.id;
          const targetId = typeof l.target === 'string' ? l.target : l.target.id;
          return nodeIds.has(sourceId) && nodeIds.has(targetId);
        });

        state.filteredNodes = filteredNodes;
        state.filteredLinks = filteredLinks;
      }
    },
  },
});

export const { setSelectedNode, setFilter } = senateSlice.actions;
export default senateSlice.reducer;
