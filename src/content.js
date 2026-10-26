// Portfolio copy, taken from alexisgmayer.dev in English and French.
// French project, overview and contact texts are the site's own translations.

export const LANGS = ['en', 'fr'];

export const profile = {
  name: 'Alexis G. Mayer',
  email: 'alexis.g.mayer@gmail.com',
  phone: '613-306-2871',
  resume: 'https://alexisgmayer.dev/ResumeAlexisMayer.pdf',
};

const heroPhotoSrc = ['/assets/hero-842.jpg', '/assets/hero-93.jpg', '/assets/hero-994.jpg'];

const unsplash = (path) => `https://${path}?auto=format&fit=crop&q=80&w=1600`;

// Language-independent parts of each project; the text lives in each language below.
const projectMedia = [
  {
    letter: 'A',
    image: '/assets/project-a-quantum.jpg',
    technologies: ['AWS Workspace', 'JFrog', 'React', 'Bootstrap', 'SQL'],
  },
  {
    letter: 'B',
    image: unsplash('images.unsplash.com/photo-1602081957921-9137a5d6eaee'),
    technologies: ['PowerApps', 'Dataverse', 'Power Platform', 'Power Automate', 'Power BI'],
  },
  {
    letter: 'C',
    image: unsplash('images.unsplash.com/photo-1599202860130-f600f4948364'),
    technologies: ['PowerApps', 'Dataverse', 'Power Platform', 'Power Automate', 'GC Notify', 'Power BI'],
  },
  {
    letter: 'D',
    image: unsplash('images.unsplash.com/photo-1511984804822-e16ba72f5848'),
    technologies: ['PowerApps', 'Dataverse', 'Power Platform', 'Power Automate', 'GC Notify', 'Power BI'],
  },
];

const withMedia = (projects) => projects.map((p, i) => ({ ...projectMedia[i], ...p }));
const withSrc = (alts) => alts.map((alt, i) => ({ src: heroPhotoSrc[i], alt }));

const en = {
  meta: {
    title: 'Alexis G. Mayer',
    description:
      'Alexis G. Mayer, developer and team lead focused on accelerated, emerging, innovative technology.',
  },
  langName: 'English',
  switchTo: 'Voir en français',
  nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact', label: 'Sections' },
  backToTop: 'back to top',
  emailMe: 'Email me',
  hero: {
    title: ['Alexis G. Mayer,', 'developer & team lead'],
    tagline: 'You invest in my world’s potential.',
    intro:
      'I focus on accelerated, emerging, innovative technology that can unlock long-term value and growth.',
    cta: 'See the work',
    video: 'Clouds drifting seen from above',
  },
  heroPhotos: withSrc([
    'Wooden steps descending into pale pink fog',
    'Marshland with scattered pines under a soft pastel sky',
    'Long-exposure sea under a blue and peach evening sky',
  ]),
  work: {
    title: 'Selected work',
    note: 'For security reasons, I only refer to these projects anonymously and by their technical requirements.',
    objective: 'Objective',
    role: 'Role',
    technologies: 'Technologies',
    more: 'Objective and role',
  },
  projects: withMedia([
    {
      title: 'Project A',
      kind: 'Artificial intelligence',
      alt: 'The gold and copper stages of a dilution refrigerator, the cooling core of a quantum computer, in a lab',
      objective:
        'Create a web-based solution to evaluate the effectiveness of many artificial intelligence facial recognition algorithms. Run the scenario between different physical stations with live participants. After capturing the data, build reports and statistics for upper management to make a decision and move to the next phase of the project (out of 5).',
      role: 'I was the developer and consulted with senior colleagues. I was moved off the project before the web platform was finished, mostly because of funding and resource issues.',
    },
    {
      title: 'Project B',
      kind: 'Mobile approach first',
      alt: 'A misty coastline with sea stacks and a forested headland, seen across dune grass',
      objective:
        'Conceive a rapid solution enabling field users to effectively enter data about cases from their computers or mobile devices. Migrate data from the legacy system and configure a reporting dashboard based on the new data source.',
      role: 'I was a developer and worked with 6 team members.',
    },
    {
      title: 'Project C',
      kind: 'Case management',
      alt: 'A hand holding a phone that shows a map app with location pins',
      objective:
        'Create a fast-paced solution for technical and non-technical users to create requests and collaborate on the online forms. Migrate data from the legacy system and configure a reporting dashboard based on the new data source.',
      role: 'I was the team lead, managing my resources and the client’s expectations.',
    },
    {
      title: 'Project D',
      kind: 'Internal efficiency',
      alt: 'A stone doorway with “Employees” carved above a black door',
      objective:
        'Develop a fast-paced solution for upper management to submit overtime requests for subordinates and escalate them for approval. Migrate data from the previous solution and configure a reporting dashboard based on the new data source.',
      role: 'I was the team lead, managing my resources and the client’s expectations.',
    },
  ]),
  about: {
    title: 'About Alexis Mayer',
    newsTitle: 'Team Lead (IT-03) since November 2024',
    newsDesc: 'At the Canada Border Services Agency, where I started as a junior developer in 2021.',
    newsLink: 'See the timeline',
  },
  // One phrase of the letter gets the marker sweep.
  letterMark: 'cloud and on-premises technologies',
  letter: [
    'I am an experienced developer focused on leading and programming efficient processes: gathering requirements, working with clients, training people and designing secure solutions.',
    'I learn and apply new software quickly, and I have extensive knowledge of cloud and on-premises technologies.',
    'I communicate projects at technical and non-technical levels, and I am fully bilingual in spoken and written French and English.',
    'I hold a valid federal security clearance, and I stay focused and goal-oriented while juggling several projects at once.',
  ],
  experience: { title: 'Experience and education', roles: 'Roles', education: 'Education', strengths: 'Strengths' },
  // `short` replaces `name` on phones.
  roles: [
    { name: 'Team Lead (IT-03), Canada Border Services Agency', short: 'Team Lead (IT-03), CBSA', value: 'Nov 2024 – now' },
    { name: 'Programmer Analyst (IT-02), Canada Border Services Agency', short: 'Programmer Analyst (IT-02), CBSA', value: 'Jan 2022 – 2024' },
    {
      name: 'Junior Application Developer (IT-01), Accelerated Innovative Emerging Technologies, Canada Border Services Agency',
      short: 'Junior Developer (IT-01), CBSA',
      value: 'Jan 2021 – 2022',
    },
    { name: 'Support ATE intern, Hawkesbury General Hospital', short: 'Support ATE intern', value: 'May – Aug 2019' },
  ],
  education: [
    { name: 'Software Development diploma, La Cité collégiale', value: '2020 – Apr 2022' },
    { name: 'Computer Engineering, La Cité collégiale', value: '2018 – 2020' },
  ],
  strengths: [
    { name: 'Cloud and on-premises technologies', value: 'Extensive' },
    { name: 'Languages', value: 'French and English' },
    { name: 'Security clearance', value: 'Federal, valid' },
    { name: 'Learning new software', value: 'Quick' },
    { name: 'Communicating projects', value: 'Technical and not' },
  ],
  contact: {
    title: 'Let’s talk',
    lead: 'I’m hoping this piqued your interest enough to contact me for more details.',
    copy: 'Copy',
    copied: 'Copied',
    copiedAnnounce: 'Email copied to clipboard',
    legend: 'What is it about?',
    phone: 'Phone',
    languages: 'Languages',
    languagesValue: 'French and English',
    resume: 'Résumé',
    download: 'Download PDF',
  },
  // The live thing: what the visitor is reaching out about fills the email for them.
  needs: [
    { id: 'role', label: 'A role', cta: 'Email about a role', subject: 'A role', body: 'I would like to talk to you about a role.' },
    { id: 'project', label: 'A project', cta: 'Email about a project', subject: 'A project', body: 'I have a project I would like your help with.' },
    { id: 'details', label: 'Project details', cta: 'Ask for project details', subject: 'Your projects', body: 'I would like more details about your work.' },
    { id: 'other', label: 'Something else', cta: 'Email about something else', subject: 'Hello', body: '' },
  ],
  footer: {
    credits: 'Credits',
    pictures: 'Pictures and footage:',
    projectPhotos: 'project photographs via',
    by: 'by',
  },
};

const fr = {
  meta: {
    title: 'Alexis G. Mayer',
    description:
      'Alexis G. Mayer, développeur et chef d’équipe axé sur les technologies accélérées, émergentes et innovantes.',
  },
  langName: 'Français',
  switchTo: 'View in English',
  nav: { work: 'Projets', about: 'À propos', experience: 'Expérience', contact: 'Contact', label: 'Sections' },
  backToTop: 'retour en haut',
  emailMe: 'M’écrire',
  hero: {
    title: ['Alexis G. Mayer,', 'développeur et chef d’équipe'],
    tagline: 'Vous investissez dans le potentiel de mon monde.',
    intro:
      'Je me concentre sur les technologies accélérées, émergentes et innovantes qui peuvent générer de la valeur et de la croissance à long terme.',
    cta: 'Voir les projets',
    video: 'Nuages qui défilent, vus d’en haut',
  },
  heroPhotos: withSrc([
    'Marches en bois qui descendent dans un brouillard rose pâle',
    'Marais parsemé de pins sous un ciel pastel',
    'Mer en pose longue sous un ciel bleu et pêche au crépuscule',
  ]),
  work: {
    title: 'Projets choisis',
    note: 'Pour des raisons de sécurité, je ne fais référence à ces projets que de manière anonyme et par leurs aspects techniques.',
    objective: 'Objectif',
    role: 'Rôle',
    technologies: 'Technologies',
    more: 'Objectif et rôle',
  },
  projects: withMedia([
    {
      title: 'Projet A',
      kind: 'Intelligence artificielle',
      alt: 'Les étages dorés et cuivrés d’un réfrigérateur à dilution, le cœur de refroidissement d’un ordinateur quantique, dans un laboratoire',
      objective:
        'Concevoir une solution web pour évaluer l’efficacité de plusieurs algorithmes de reconnaissance faciale basés sur l’intelligence artificielle. Mettre en œuvre ce scénario entre différents postes de travail avec des participants. Après la collecte des données, générer des rapports et statistiques pour les gestionnaires afin de faciliter la prise de décision et le passage à la phase suivante du projet (sur 5).',
      role: 'J’étais le développeur et je consultais des collègues plus expérimentés. J’ai quitté le projet avant la fin de la plateforme web, surtout pour des raisons de financement et de ressources.',
    },
    {
      title: 'Projet B',
      kind: 'Approche mobile premier',
      alt: 'Une côte brumeuse avec des rochers et un cap boisé, vue à travers les herbes des dunes',
      objective:
        'Concevoir une solution rapide permettant aux utilisateurs sur le terrain de saisir efficacement des données sur les cas depuis leurs ordinateurs ou appareils mobiles. Migrer les données du système existant et configurer un tableau de reportage basé sur la nouvelle source de données.',
      role: 'J’étais développeur et je travaillais avec 6 membres de l’équipe.',
    },
    {
      title: 'Projet C',
      kind: 'Gestion de cas',
      alt: 'Une main tenant un téléphone qui affiche une carte avec des repères',
      objective:
        'Concevoir une solution rapide permettant aux utilisateurs, qu’ils soient experts techniques ou non, de créer des demandes et de collaborer sur des formulaires en ligne. Migrer les données du système existant et configurer un tableau de reportage basé sur la nouvelle source de données.',
      role: 'J’étais chef d’équipe : je gérais mes ressources ainsi que les attentes des clients.',
    },
    {
      title: 'Projet D',
      kind: 'Efficacité interne',
      alt: 'Une entrée en pierre surmontée du mot « Employees » gravé, au-dessus d’une porte noire',
      objective:
        'Concevoir une solution rapide permettant à la direction de soumettre des demandes d’heures supplémentaires pour leurs subordonnés et de les faire remonter pour approbation. Migrer les données de la solution précédente et configurer un tableau de reportage basé sur la nouvelle source de données.',
      role: 'J’étais chef d’équipe : je gérais mes ressources ainsi que les attentes des clients.',
    },
  ]),
  about: {
    title: 'À propos d’Alexis Mayer',
    newsTitle: 'Chef d’équipe (IT-03) depuis novembre 2024',
    newsDesc: 'À l’Agence des services frontaliers du Canada, où j’ai commencé comme développeur junior en 2021.',
    newsLink: 'Voir le parcours',
  },
  letterMark: 'technologies infonuagiques et sur site',
  letter: [
    'Je suis un développeur expérimenté axé sur la direction et la programmation de processus efficaces : analyse des exigences, relations clients, formation et conceptions sécurisées.',
    'J’apprends et j’applique rapidement de nouveaux logiciels, et j’ai des connaissances approfondies des technologies infonuagiques et sur site.',
    'Je communique les projets en termes techniques et non techniques, et je suis parfaitement bilingue, à l’oral comme à l’écrit, en français et en anglais.',
    'Je détiens une autorisation de sécurité fédérale valide, et je reste concentré et orienté vers les objectifs en menant plusieurs projets de front.',
  ],
  experience: { title: 'Expérience et formation', roles: 'Postes', education: 'Formation', strengths: 'Forces' },
  roles: [
    { name: 'Chef d’équipe (IT-03), Agence des services frontaliers du Canada', short: 'Chef d’équipe (IT-03), ASFC', value: 'nov. 2024 – auj.' },
    { name: 'Programmeur analyste (IT-02), Agence des services frontaliers du Canada', short: 'Programmeur analyste (IT-02), ASFC', value: 'janv. 2022 – 2024' },
    {
      name: 'Développeur d’applications junior (IT-01), Accelerated Innovative Emerging Technologies, Agence des services frontaliers du Canada',
      short: 'Développeur junior (IT-01), ASFC',
      value: 'janv. 2021 – 2022',
    },
    { name: 'Stagiaire Support ATE, Hôpital général de Hawkesbury', short: 'Stagiaire Support ATE', value: 'mai – août 2019' },
  ],
  education: [
    { name: 'Diplôme en programmation informatique, La Cité collégiale', value: '2020 – avr. 2022' },
    { name: 'Génie informatique, La Cité collégiale', value: '2018 – 2020' },
  ],
  strengths: [
    { name: 'Technologies infonuagiques et sur site', value: 'Approfondies' },
    { name: 'Langues', value: 'Français et anglais' },
    { name: 'Autorisation de sécurité', value: 'Fédérale, valide' },
    { name: 'Apprentissage de logiciels', value: 'Rapide' },
    { name: 'Communication de projets', value: 'Technique ou non' },
  ],
  contact: {
    title: 'Discutons',
    lead: 'J’espère que ceci a piqué votre intérêt et que vous me contacterez pour obtenir plus de détails.',
    copy: 'Copier',
    copied: 'Copié',
    copiedAnnounce: 'Courriel copié dans le presse-papiers',
    legend: 'À quel sujet ?',
    phone: 'Téléphone',
    languages: 'Langues',
    languagesValue: 'Français et anglais',
    resume: 'CV',
    download: 'Télécharger le PDF',
  },
  needs: [
    { id: 'role', label: 'Un poste', cta: 'Écrire au sujet d’un poste', subject: 'Un poste', body: 'J’aimerais vous parler d’un poste.' },
    { id: 'project', label: 'Un projet', cta: 'Écrire au sujet d’un projet', subject: 'Un projet', body: 'J’ai un projet pour lequel j’aimerais votre aide.' },
    { id: 'details', label: 'Détails des projets', cta: 'Demander des détails', subject: 'Vos projets', body: 'J’aimerais plus de détails sur votre travail.' },
    { id: 'other', label: 'Autre chose', cta: 'Écrire pour autre chose', subject: 'Bonjour', body: '' },
  ],
  footer: {
    credits: 'Crédits',
    pictures: 'Images et vidéo :',
    projectPhotos: 'photos des projets via',
    by: 'par',
  },
};

export const content = { en, fr };
