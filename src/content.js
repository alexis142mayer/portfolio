// Portfolio copy in English and French, kept short on purpose: one idea per block.

export const LANGS = ['en', 'fr'];

export const profile = {
  name: 'Alexis G. Mayer',
  email: 'alexis.g.mayer@gmail.com',
  resume: '/ResumeAlexisMayer.pdf',
  // Public profiles (LinkedIn, GitHub): shown beside the contact details and added to the JSON-LD.
  sameAs: ['https://www.linkedin.com/in/alexis-mayer-342842437'],
  // Last real content change; also the JSON-LD dateModified.
  updated: '2026-11-08',
};

// Language-independent parts of each project; the text lives in each language below.
const projectMedia = [
  { image: 'project-a', width: 1200, height: 1798, technologies: ['React', 'SQL', 'AWS Workspace', 'JFrog'] },
  { image: 'project-b', width: 1200, height: 800, technologies: ['Power Apps', 'Dataverse', 'Power Automate', 'Power BI'] },
  { image: 'project-c', width: 1200, height: 800, technologies: ['Power Apps', 'Dataverse', 'GC Notify', 'Power BI'] },
  { image: 'project-d', width: 1200, height: 1798, technologies: ['Power Apps', 'Dataverse', 'GC Notify', 'Power BI'] },
];

const withMedia = (projects) => projects.map((p, i) => ({ ...projectMedia[i], ...p }));

const en = {
  // Label separator: French puts a narrow no-break space before the colon.
  colon: ': ',
  meta: {
    title: 'Alexis G. Mayer | IT Team Lead & Developer, Ottawa',
    description:
      'Alexis G. Mayer is an IT team lead (IT-03) at the Canada Border Services Agency in Ottawa, building Power Platform and web applications. Bilingual EN/FR.',
  },
  switchTo: 'Voir en français',
  nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact', label: 'Sections' },
  backToTop: 'back to top',
  hero: {
    title: 'Developer and team lead.',
    // A list renders with round dots between the items.
    sub: ['Websites', 'Mobile apps', 'Reporting dashboards', 'Power Platform'],
    cta: 'See the work',
    resume: 'Resume',
    video: 'Clouds drifting seen from above',
    pause: 'Pause the clouds video',
    play: 'Play the clouds video',
  },
  work: {
    title: 'Selected projects.',
    note: 'Shown anonymously for security. Photos are illustrative.',
  },
  projects: withMedia([
    {
      title: 'Project A',
      kind: 'Facial recognition',
      role: 'Developer',
      alt: 'A long aisle between black supercomputer cabinets in a data centre',
      summary: 'A web platform that compares facial recognition models in trials and reports the results to decision-makers.',
    },
    {
      title: 'Project B',
      kind: 'Field data collection',
      role: 'Developer, team of seven',
      alt: 'Hands entering field data on a phone, above a paper data sheet on a clipboard',
      summary: 'Case data entry from a computer or phone, moved off a legacy system, with a reporting dashboard.',
    },
    {
      title: 'Project C',
      kind: 'Case management',
      role: 'Team lead',
      alt: 'Hands taking notes in a notebook beside an open laptop',
      summary: 'Online forms where technical and non-technical users create requests and work on them together.',
    },
    {
      title: 'Project D',
      kind: 'Internal efficiency',
      role: 'Team lead',
      alt: 'A woman working late at a laptop in a dark room',
      summary: 'Overtime requests that managers submit for their staff and route for approval.',
    },
  ]),
  about: {
    title: 'Secure apps, explained in French and English.',
    body: 'Team lead at the Canada Border Services Agency in Ottawa since 2024. I gather requirements, work with clients, train users and design secure solutions, in the cloud and on premises. I explain projects to technical and non-technical audiences, pick up new tools quickly and keep several projects moving at once.',
    facts: [
      { name: 'Power Platform', value: 'Apps, Automate, BI, Dataverse' },
      { name: 'Web and data', value: 'React and SQL' },
      { name: 'Clearance', value: 'Valid federal security clearance' },
    ],
  },
  experience: { title: 'Experience.', roles: 'Roles', education: 'Education' },
  roles: [
    { name: 'Team Lead (IT-03)', org: 'Canada Border Services Agency', value: 'Nov 2024 – now' },
    { name: 'Programmer Analyst (IT-02)', org: 'Canada Border Services Agency', value: 'Jan 2022 – Nov 2024' },
    { name: 'Junior Application Developer (IT-01)', org: 'Canada Border Services Agency', value: 'Apr – Dec 2021' },
    { name: 'Support ATE intern', org: 'Hawkesbury General Hospital', value: 'May – Aug 2019' },
  ],
  education: [
    { name: 'Software Development diploma', org: 'La Cité collégiale', value: 'Jan 2020 – Apr 2022' },
    { name: 'Computer Engineering', org: 'La Cité collégiale', value: 'Sept 2018 – Dec 2019' },
  ],
  contact: {
    title: 'Let’s talk.',
    lead: 'Hiring, or have a project in mind?',
    copy: 'Copy address',
    copied: 'Copied',
    copiedAnnounce: 'Email copied to clipboard',
    resume: 'Resume (PDF)',
  },
  footer: {
    credits: 'Credits',
    pictures: 'Pictures and footage:',
    publicDomain: 'public domain',
    by: 'by',
    updated: 'Updated November 2026',
  },
};

const fr = {
  colon: ' : ',
  meta: {
    title: 'Alexis G. Mayer | Chef d’équipe TI et développeur, Ottawa',
    description:
      'Alexis G. Mayer, chef d’équipe TI (TI-03) à l’Agence des services frontaliers du Canada à Ottawa : applications Power Platform et web. Bilingue.',
  },
  switchTo: 'View in English',
  nav: { work: 'Projets', about: 'À propos', experience: 'Expérience', contact: 'Contact', label: 'Sections' },
  backToTop: 'retour en haut',
  hero: {
    title: 'Développeur et chef d’équipe.',
    sub: ['Sites web', 'Applications mobiles', 'Tableaux de bord', 'Power Platform'],
    cta: 'Voir les projets',
    resume: 'CV (en anglais)',
    video: 'Nuages qui défilent, vus d’en haut',
    pause: 'Mettre en pause la vidéo des nuages',
    play: 'Lire la vidéo des nuages',
  },
  work: {
    title: 'Projets sélectionnés.',
    note: 'Présentés de façon anonyme pour des raisons de sécurité. Photos illustratives.',
  },
  projects: withMedia([
    {
      title: 'Projet A',
      kind: 'Reconnaissance faciale',
      role: 'Développeur',
      alt: 'Une longue allée entre des armoires noires de superordinateur, dans un centre de données',
      summary: 'Une plateforme web qui compare des modèles de reconnaissance faciale lors d’essais et présente les résultats aux décideurs.',
    },
    {
      title: 'Projet B',
      kind: 'Collecte de données sur le terrain',
      role: 'Développeur, équipe de sept',
      alt: 'Des mains qui saisissent des données de terrain sur un téléphone, au-dessus d’une fiche papier sur une planchette',
      summary: 'Saisie de données sur les cas depuis un ordinateur ou un téléphone, migrée d’un ancien système, avec un tableau de bord.',
    },
    {
      title: 'Projet C',
      kind: 'Gestion de cas',
      role: 'Chef d’équipe',
      alt: 'Des mains qui prennent des notes dans un carnet, à côté d’un ordinateur portable ouvert',
      summary: 'Des formulaires en ligne où des utilisateurs, spécialistes ou non, créent des demandes et y collaborent.',
    },
    {
      title: 'Projet D',
      kind: 'Efficacité interne',
      role: 'Chef d’équipe',
      alt: 'Une femme qui travaille tard sur un ordinateur portable, dans une pièce sombre',
      summary: 'Des demandes d’heures supplémentaires que la direction soumet pour son personnel et achemine pour approbation.',
    },
  ]),
  about: {
    title: 'Des applications sécurisées, expliquées en français et en anglais.',
    body: 'Chef d’équipe à l’Agence des services frontaliers du Canada, à Ottawa, depuis 2024. J’analyse les exigences, je travaille avec les clients, je forme les utilisateurs et je conçois des solutions sécurisées, infonuagiques et sur site. J’explique les projets à des publics techniques et non techniques, j’apprends vite de nouveaux outils et je mène plusieurs projets de front.',
    facts: [
      { name: 'Power Platform', value: 'Apps, Automate, BI, Dataverse' },
      { name: 'Web et données', value: 'React et SQL' },
      { name: 'Autorisation', value: 'Autorisation de sécurité fédérale valide' },
    ],
  },
  experience: { title: 'Expérience.', roles: 'Postes', education: 'Formation' },
  roles: [
    { name: 'Chef d’équipe (TI-03)', org: 'Agence des services frontaliers du Canada', value: 'depuis nov. 2024' },
    { name: 'Programmeur-analyste (TI-02)', org: 'Agence des services frontaliers du Canada', value: 'janv. 2022 – nov. 2024' },
    { name: 'Développeur d’applications junior (TI-01)', org: 'Agence des services frontaliers du Canada', value: 'avr. – déc. 2021' },
    { name: 'Stagiaire Support ATE', org: 'Hôpital général de Hawkesbury', value: 'mai – août 2019' },
  ],
  education: [
    { name: 'Diplôme en programmation informatique', org: 'La Cité collégiale', value: 'janv. 2020 – avr. 2022' },
    { name: 'Génie informatique', org: 'La Cité collégiale', value: 'sept. 2018 – déc. 2019' },
  ],
  contact: {
    title: 'Discutons.',
    lead: 'Vous recrutez ou avez un projet en tête?',
    copy: 'Copier l’adresse',
    copied: 'Copié',
    copiedAnnounce: 'Courriel copié dans le presse-papiers',
    resume: 'CV (PDF, en anglais)',
  },
  footer: {
    credits: 'Crédits',
    pictures: 'Images et vidéo :',
    publicDomain: 'domaine public',
    by: 'par',
    updated: 'Mis à jour en novembre 2026',
  },
};

export const content = { en, fr };
