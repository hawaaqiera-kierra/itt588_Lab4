/* ---------- Family data (built in, no separate file or server needed) ---------- */
const FAMILY_DATA = {
  "title": "Keluarga Hassan",
  "people": [
    {
      "id": "p1",
      "name": "Hassan bin Yusof",
      "gender": "male",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1928-04-12",
      "dateOfDeath": "2009-11-03",
      "profession": "Farmer",
      "bloodGroup": "O+",
      "fatherId": null,
      "motherId": null,
      "spouses": [
        {
          "id": "p2",
          "status": "married"
        }
      ],
      "isInLaw": false
    },
    {
      "id": "p2",
      "name": "Zainab binti Ismail",
      "gender": "female",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1932-07-21",
      "dateOfDeath": "2015-02-18",
      "profession": "Teacher",
      "bloodGroup": "A+",
      "fatherId": null,
      "motherId": null,
      "spouses": [
        {
          "id": "p1",
          "status": "married"
        }
      ],
      "isInLaw": true
    },
    {
      "id": "p3",
      "name": "Ahmad Kamal bin Hassan",
      "gender": "male",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1955-03-09",
      "dateOfDeath": "",
      "profession": "Civil Engineer",
      "bloodGroup": "O+",
      "fatherId": "p1",
      "motherId": "p2",
      "spouses": [
        {
          "id": "p4",
          "status": "married"
        }
      ],
      "isInLaw": false
    },
    {
      "id": "p4",
      "name": "Rohani binti Abdullah",
      "gender": "female",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1958-09-14",
      "dateOfDeath": "",
      "profession": "Nurse",
      "bloodGroup": "B+",
      "fatherId": null,
      "motherId": null,
      "spouses": [
        {
          "id": "p3",
          "status": "married"
        }
      ],
      "isInLaw": true
    },
    {
      "id": "p5",
      "name": "Norliza binti Hassan",
      "gender": "female",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1960-12-02",
      "dateOfDeath": "",
      "profession": "Physician",
      "bloodGroup": "A-",
      "fatherId": "p1",
      "motherId": "p2",
      "spouses": [
        {
          "id": "p6",
          "status": "married"
        }
      ],
      "isInLaw": false
    },
    {
      "id": "p6",
      "name": "Mohd Rashid bin Daud",
      "gender": "male",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1957-06-25",
      "dateOfDeath": "",
      "profession": "Accountant",
      "bloodGroup": "O-",
      "fatherId": null,
      "motherId": null,
      "spouses": [
        {
          "id": "p5",
          "status": "married"
        }
      ],
      "isInLaw": true
    },
    {
      "id": "p7",
      "name": "Muhammad Hafiz bin Ahmad Kamal",
      "gender": "male",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1982-01-30",
      "dateOfDeath": "",
      "profession": "Architect",
      "bloodGroup": "O+",
      "fatherId": "p3",
      "motherId": "p4",
      "spouses": [
        {
          "id": "p8",
          "status": "married"
        }
      ],
      "isInLaw": false
    },
    {
      "id": "p8",
      "name": "Nurul Aina binti Razak",
      "gender": "female",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1985-05-19",
      "dateOfDeath": "",
      "profession": "Graphic Designer",
      "bloodGroup": "AB+",
      "fatherId": null,
      "motherId": null,
      "spouses": [
        {
          "id": "p7",
          "status": "married"
        }
      ],
      "isInLaw": true
    },
    {
      "id": "p9",
      "name": "Siti Aishah binti Ahmad Kamal",
      "gender": "female",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1986-08-08",
      "dateOfDeath": "",
      "profession": "Journalist",
      "bloodGroup": "B+",
      "fatherId": "p3",
      "motherId": "p4",
      "spouses": [],
      "isInLaw": false
    },
    {
      "id": "p10",
      "name": "Muhammad Irfan bin Mohd Rashid",
      "gender": "male",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "1988-11-11",
      "dateOfDeath": "",
      "profession": "Software Developer",
      "bloodGroup": "A-",
      "fatherId": "p6",
      "motherId": "p5",
      "spouses": [],
      "isInLaw": false
    },
    {
      "id": "p11",
      "name": "Nur Sofea binti Muhammad Hafiz",
      "gender": "female",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "2012-04-03",
      "dateOfDeath": "",
      "profession": "Student",
      "bloodGroup": "O+",
      "fatherId": "p7",
      "motherId": "p8",
      "spouses": [],
      "isInLaw": false
    },
    {
      "id": "p12",
      "name": "Muhammad Aiman bin Muhammad Hafiz",
      "gender": "male",
      "photo": "",
      "phone": "",
      "address": "Kota Tinggi, Johor",
      "dob": "2015-10-27",
      "dateOfDeath": "",
      "profession": "Student",
      "bloodGroup": "AB+",
      "fatherId": "p7",
      "motherId": "p8",
      "spouses": [],
      "isInLaw": false
    }
  ]
};

const state = { data: null, view: 'tree', generation: 'all', query: '', zoom: 1, selected: null };
const $ = id => document.getElementById(id);
const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };

/* ---------- Helpers ---------- */
const initials = name => name.split(' ').filter(Boolean).slice(0, 2).map(x => x[0]).join('').toUpperCase();
const person = id => state.data.people.find(p => p.id === id);
const parents = p => [p.fatherId, p.motherId].map(person).filter(Boolean);
const children = p => state.data.people.filter(x => x.fatherId === p.id || x.motherId === p.id);
const spouse = p => (p.spouses || []).map(s => person(s.id)).filter(Boolean);
const byDob = (a, b) => (a.dob || '').localeCompare(b.dob || '');
const fmtDate = d => d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Not added';
const age = p => {
  const end = p.dateOfDeath ? new Date(p.dateOfDeath + 'T00:00:00') : new Date();
  const born = new Date(p.dob + 'T00:00:00');
  let n = end.getFullYear() - born.getFullYear();
  if (end.getMonth() < born.getMonth() || (end.getMonth() === born.getMonth() && end.getDate() < born.getDate())) n--;
  return n;
};

/* ---------- Family name: the whole family carries the founder's name (Hassan) ---------- */
function familyName() {
  const founder = state.data.people.find(p => !p.fatherId && !p.motherId && !p.isInLaw);
  const m = founder.name.match(/^(.+?)\s+bin(?:ti)?\s+(.+)$/i);
  return m ? m[1] : founder.name.split(' ').pop();
}
const givenName = p => p.name.split(/\s+bin(?:ti)?\s+/i)[0];
const familyLine = p => p.isInLaw ? 'Family by marriage' : `${familyName(p)} family`;

/* ---------- Generation (in-laws take their spouse's generation) ---------- */
function generation(p) {
  if (!p.fatherId && !p.motherId) {
    const s = spouse(p).find(x => x.fatherId || x.motherId);
    return s ? generation(s) : 1;
  }
  return 1 + Math.max(0, ...parents(p).map(generation));
}

/* ---------- Cards ---------- */
function card(p, extra = '') {
  return `<button class="person-card ${p.isInLaw ? 'inlaw' : ''} ${extra}" data-person="${p.id}">
    <div class="person-avatar">${initials(p.name)}<span class="gender-mark">${p.gender === 'female' ? '♀' : '♂'}</span></div>
    <strong>${p.name}</strong>
    <span class="role">${p.profession || 'Profession not added'}</span>
    <span class="alive-tag ${p.dateOfDeath ? 'deceased-tag' : ''}">${p.dateOfDeath ? 'In loving memory' : 'Family member'}</span>
  </button>`;
}

function isVisible(p) {
  const q = state.query.trim().toLowerCase();
  const matchQuery = !q || [p.name, p.profession, p.address, p.bloodGroup].join(' ').toLowerCase().includes(q);
  const matchGen = state.generation === 'all' || String(generation(p)) === state.generation;
  return matchQuery && matchGen;
}

/* ---------- Tree: every child sits directly under their own parents ---------- */
function kidsOf(unit) {
  const ids = unit.map(x => x.id);
  return state.data.people.filter(x => ids.includes(x.fatherId) || ids.includes(x.motherId)).sort(byDob);
}

function nodeHtml(p, depth) {
  const unit = [p, ...spouse(p)];
  const kids = kidsOf(unit);
  const head = unit.find(x => x.gender === 'male') || p;
  let chip = '';
  if (depth === 0) chip = `<div class="branch-chip founder">The ${familyName(head)} family · Founders</div>`;
  if (depth === 1) chip = `<div class="branch-chip">Branch of ${givenName(unit.find(x => !x.isInLaw) || p)}</div>`;
  const cards = unit.map(u => card(u, isVisible(u) ? '' : 'dimmed')).join('<span class="spouse-link">♡</span>');
  return `<div class="tree-node">
    ${chip}
    <div class="family-unit">${cards}</div>
    ${kids.length ? `<div class="tree-children">${kids.map(k => nodeHtml(k, depth + 1)).join('')}</div>` : ''}
  </div>`;
}

function renderTree() {
  const people = state.data.people;
  const any = people.some(isVisible);
  $('emptyState').classList.toggle('hidden', any);
  const content = $('treeContent');
  if (!any) { content.innerHTML = ''; return; }
  const roots = people.filter(p => !p.fatherId && !p.motherId && !p.isInLaw).sort(byDob);
  content.innerHTML = `<div class="tree-root">${roots.map(r => nodeHtml(r, 0)).join('')}</div>`;
  $('treeCanvas').style.transformOrigin = 'top center';
  $('treeCanvas').style.transform = `scale(${state.zoom})`;
}

/* ---------- Members grid ---------- */
function renderMembers() {
  const q = $('memberSearch').value.trim().toLowerCase();
  const arr = state.data.people.filter(p => [p.name, p.profession, p.address, p.bloodGroup].join(' ').toLowerCase().includes(q));
  $('memberGrid').innerHTML = arr.map(p => `<button class="member-tile" data-person="${p.id}">
    <div class="person-avatar ${p.isInLaw ? 'inlaw' : ''}">${initials(p.name)}</div>
    <div><strong>${p.name}</strong><small>${p.profession} · ${p.address}</small></div>
    <span class="tile-arrow">↗</span></button>`).join('') || '<p class="empty-state">No family members found.</p>';
}

/* ---------- Profile drawer ---------- */
function showProfile(id) {
  const p = person(id); if (!p) return;
  state.selected = id;
  const rels = [...parents(p).map(x => [x, 'Parent']), ...spouse(p).map(x => [x, 'Spouse']), ...children(p).map(x => [x, 'Child'])];
  $('profileContent').innerHTML = `
    <div class="profile-head">
      <div class="profile-avatar">${initials(p.name)}</div>
      <h2>${p.name}</h2><p>${p.profession || 'Profession not added'}</p>
      <span class="profile-badge">${familyLine(p)}</span>
      ${p.dateOfDeath ? '<span class="profile-badge">In loving memory</span>' : ''}
    </div>
    <div class="profile-section"><h3>Personal details</h3>
      <div class="detail-row"><span>Date of birth</span><strong>${fmtDate(p.dob)}</strong></div>
      <div class="detail-row"><span>${p.dateOfDeath ? 'Date of passing' : 'Age'}</span><strong>${p.dateOfDeath ? fmtDate(p.dateOfDeath) : age(p) + ' years old'}</strong></div>
      <div class="detail-row"><span>Blood group</span><strong>${p.bloodGroup || 'Not added'}</strong></div>
      <div class="detail-row"><span>Location</span><strong>${p.address || 'Not added'}</strong></div>
      <div class="detail-row"><span>Phone</span><strong>${p.phone || 'Not added'}</strong></div>
    </div>
    <div class="profile-section"><h3>Family connections</h3>
      ${rels.length ? rels.map(([r, label]) => `<div class="related-person" data-person="${r.id}">
        <div class="person-avatar ${r.isInLaw ? 'inlaw' : ''}">${initials(r.name)}</div>
        <div><strong>${r.name}</strong><small>${label} · ${r.profession}</small></div><span class="rel-arrow">↗</span></div>`).join('')
        : '<p style="font-size:11px;color:#a09bad">No connections recorded yet.</p>'}
    </div>`;
  $('backdrop').classList.remove('hidden');
  requestAnimationFrame(() => $('profileDrawer').classList.add('open'));
}
function closeProfile() { $('profileDrawer').classList.remove('open'); setTimeout(() => $('backdrop').classList.add('hidden'), 250); }

function switchView(view) {
  state.view = view;
  const tree = view === 'tree';
  $('treeView').classList.toggle('hidden', !tree);
  $('membersView').classList.toggle('hidden', tree);
  const lead = state.data ? familyName(state.data.people.find(p => !p.fatherId && !p.motherId && !p.isInLaw)) : '';
  setText('crumb', tree ? 'Family tree' : 'All members');
  setText('pageTitle', tree ? `The ${lead} family tree` : `Everyone in the ${lead} family`);
  setText('pageSubtitle', tree ? 'A little history, a lot of heart. Explore the people who make your family.' : 'Every name has a story. Browse the details that keep your family connected.');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  if (!tree) renderMembers();
}

function toast(msg) { $('toast').textContent = msg; $('toast').classList.add('show'); setTimeout(() => $('toast').classList.remove('show'), 2200); }

/* ---------- Fill in names/stats from the data (no more hardcoded family name) ---------- */
function applyFamilyText() {
  const people = state.data.people;
  const founder = people.find(p => !p.fatherId && !p.motherId && !p.isInLaw);
  const lead = familyName(founder);
  const branches = kidsOf([founder, ...spouse(founder)]).map(givenName);
  const year = Math.min(...people.map(p => +p.dob.slice(0, 4)));
  document.title = `${lead} Family | Salasilah`;
  setText('pageTitle', `The ${lead} family tree`);
  setText('legendMain', lead);
  setText('branchCount', branches.length);
  setText('branchNames', branches.join(' & '));
  setText('footBrand', `${lead.toUpperCase()} FAMILY ARCHIVE · EST. ${year}`);
  setText('brandMark', lead[0]);
  setText('avatarBtn', initials('K ' + lead));
}

async function init() {
  try {
    state.data = FAMILY_DATA;
    setText('totalStat', state.data.people.length);
    setText('navCount', state.data.people.length);
    setText('placeStat', new Set(state.data.people.map(p => p.address).filter(Boolean)).size);
    applyFamilyText();
    renderTree();
    renderMembers();
  } catch (e) {
    $('treeContent').innerHTML = '<p class="empty-state">Could not load the family data.</p>';
    console.error(e);
  }
}

/* ---------- Events ---------- */
document.addEventListener('click', e => {
  const p = e.target.closest('[data-person]'); if (p) { showProfile(p.dataset.person); return; }
  const nav = e.target.closest('[data-view]'); if (nav) { switchView(nav.dataset.view); return; }
  const gen = e.target.closest('[data-gen]');
  if (gen) {
    state.generation = gen.dataset.gen;
    document.querySelectorAll('[data-gen]').forEach(b => b.classList.toggle('selected', b === gen));
    renderTree();
  }
});
$('searchInput').addEventListener('input', e => { state.query = e.target.value; renderTree(); });
$('memberSearch').addEventListener('input', renderMembers);
$('zoomIn').addEventListener('click', () => { state.zoom = Math.min(1.35, state.zoom + .1); renderTree(); });
$('zoomOut').addEventListener('click', () => { state.zoom = Math.max(.65, state.zoom - .1); renderTree(); });
$('resetView').addEventListener('click', () => {
  state.zoom = 1; state.query = ''; $('searchInput').value = ''; state.generation = 'all';
  document.querySelectorAll('[data-gen]').forEach(b => b.classList.toggle('selected', b.dataset.gen === 'all'));
  renderTree(); toast('Family tree view reset');
});
$('exploreBtn').addEventListener('click', () => {
  switchView('tree');
  $('treeView').scrollIntoView({ behavior: 'smooth', block: 'start' });
  toast('Choose any family member to explore their story');
});
$('closeDrawer').addEventListener('click', closeProfile);
$('backdrop').addEventListener('click', closeProfile);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProfile();
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('searchInput').focus(); switchView('tree'); }
});
init();