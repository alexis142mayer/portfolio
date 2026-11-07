// Portfolio copy, taken from alexisgmayer.dev in English and French.
// French project, overview and contact texts are the site's own translations.

export const LANGS = ['en', 'fr'];

export const profile = {
  name: 'Alexis G. Mayer',
  email: 'alexis.g.mayer@gmail.com',
  phone: '613-306-2871',
  resume: '/ResumeAlexisMayer.pdf',
  // Public profiles (LinkedIn, GitHub): shown beside the contact details and added to the JSON-LD.
  sameAs: [],
  // Last real content change; also the JSON-LD dateModified.
  updated: '2026-11-01',
};

// Language-independent parts of each project; the text lives in each language below.
const projectMedia = [
  {
    letter: 'A',
    image: 'project-a',
    width: 1200,
    height: 1600,
    technologies: ['AWS Workspace', 'JFrog', 'React', 'Bootstrap', 'SQL'],
  },
  {
    letter: 'B',
    image: 'project-b',
    width: 1200,
    height: 1796,
    technologies: ['Power Apps', 'Dataverse', 'Power Platform', 'Power Automate', 'Power BI'],
  },
  {
    letter: 'C',
    image: 'project-c',
    width: 1200,
    height: 1796,
    technologies: ['Power Apps', 'Dataverse', 'Power Platform', 'Power Automate', 'GC Notify', 'Power BI'],
  },
  {
    letter: 'D',
    image: 'project-d',
    width: 1200,
    height: 1200,
    technologies: ['Power Apps', 'Dataverse', 'Power Platform', 'Power Automate', 'GC Notify', 'Power BI'],
  },
];

const withMedia = (projects) => projects.map((p, i) => ({ ...projectMedia[i], ...p }));

const en = {
  meta: {
    title: 'Alexis G. Mayer | IT Team Lead & Developer, Ottawa',
    description:
      'Alexis G. Mayer is an IT team lead (IT-03) at the Canada Border Services Agency in Ottawa, building Power Platform and web applications. Bilingual EN/FR.',
  },
  langName: 'English',
  switchTo: 'Voir en français',
  nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact', label: 'Sections', menu: 'Menu', close: 'Close' },
  backToTop: 'back to top',
  emailMe: 'Email me',
  hero: {
    title: ['Alexis G. Mayer,', 'developer & team lead'],
    tagline: 'Team lead at the Canada Border Services Agency.',
    intro:
      'I build secure Power Platform and web applications, and explain them to technical and non-technical people, in French and English.',
    glance: 'Power Platform and web · bilingual · valid federal clearance',
    cta: 'See the work',
    resume: 'Résumé (PDF)',
    video: 'Clouds drifting seen from above',
    pause: 'Pause the clouds video',
    play: 'Play the clouds video',
  },
  work: {
    title: ['Selected projects', ': AI, case management and internal tools'],
    note: 'For security reasons, I only refer to these projects anonymously and by their technical requirements. Images are illustrative and don’t show the projects.',
    objective: 'Objective',
    role: 'Role',
    technologies: 'Technologies',
    more: 'Objective and role',
  },
  projects: withMedia([
    {
      title: 'Project A',
      kind: 'Artificial intelligence',
      alt: 'Gold and copper stages of a dilution refrigerator in a lab',
      objective:
        'Build a web platform to compare the performance of AI models in trials and report results to decision-makers.',
      role: 'I was the developer and consulted with senior colleagues. I was reassigned before the platform was completed.',
    },
    {
      title: 'Project B',
      kind: 'Field data collection',
      alt: 'A misty coastline with sea stacks and a forested headland, seen across dune grass',
      objective:
        'Let field users enter case data from a computer or a mobile device. The work included moving data off a legacy system and building a reporting dashboard.',
      role: 'I was a developer, working with 6 team members.',
    },
    {
      title: 'Project C',
      kind: 'Case management',
      alt: 'A hand holding a phone that shows a map app with location pins',
      objective:
        'Let technical and non-technical users create requests and collaborate on online forms. The work included migrating data from a legacy system and configuring a reporting dashboard.',
      role: 'I was the team lead, managing the team’s resources and the client’s expectations.',
    },
    {
      title: 'Project D',
      kind: 'Internal efficiency',
      alt: 'A stone doorway with “Employees” carved above a black door',
      objective:
        'Let upper management submit overtime requests for their staff and escalate them for approval. The work included migrating data from the previous solution and configuring a reporting dashboard.',
      role: 'I led the team, managing its resources and the client’s expectations.',
    },
  ]),
  about: {
    title: 'About Alexis G. Mayer',
    newsTitle: 'Team Lead (IT-03) since November 2024',
    newsDesc: 'At the Canada Border Services Agency, where I started as a junior developer in 2021.',
    newsLink: 'See the timeline',
  },
  // One phrase of the letter gets the marker sweep.
  letterMark: 'Power Platform',
  letter: [
    'Alexis G. Mayer is a developer and team lead who works in Ottawa at the Canada Border Services Agency, building secure Power Platform and web applications. My work covers gathering requirements, working with clients, training people and designing secure solutions.',
    'I learn and apply new software quickly, and I have extensive knowledge of cloud and on-premises technologies.',
    'I communicate projects at technical and non-technical levels, and I am fully bilingual in spoken and written French and English.',
    'I hold a valid federal security clearance, and I stay focused and goal-oriented while juggling several projects at once.',
  ],
  experience: { title: 'Experience and education', roles: 'Roles', education: 'Education', strengths: 'Strengths' },
  // `short` replaces `name` on phones.
  roles: [
    { name: 'Team Lead (IT-03), Canada Border Services Agency', short: 'Team Lead (IT-03), CBSA', value: 'Nov 2024 – now' },
    { name: 'Programmer Analyst (IT-02), Canada Border Services Agency', short: 'Programmer Analyst (IT-02), CBSA', value: 'Jan 2022 – Nov 2024' },
    {
      name: 'Junior Application Developer (IT-01, internship and casual), Accelerated Innovative Emerging Technologies, Canada Border Services Agency',
      short: 'Junior Developer (IT-01), CBSA',
      value: 'Apr – Dec 2021',
    },
    { name: 'Support ATE (Application Technical Expert) intern, Epic rollout, Hawkesbury General Hospital', short: 'Support ATE intern', value: 'May – Aug 2019' },
  ],
  education: [
    { name: 'Software Development diploma, La Cité collégiale', value: 'Jan 2020 – Apr 2022' },
    { name: 'Computer Engineering, La Cité collégiale', value: 'Sept 2018 – Dec 2019' },
  ],
  strengths: [
    { name: 'Power Platform', value: 'Apps, Automate, BI' },
    { name: 'Web and data', value: 'React, SQL' },
    { name: 'Technologies', value: 'Cloud and on-premises' },
    { name: 'Languages', value: 'French and English' },
    { name: 'Security clearance', value: 'Federal, valid' },
  ],
  contact: {
    title: 'Let’s talk',
    lead: 'Hiring, or want to talk about Power Platform in government? Email me or download my résumé.',
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
    { id: 'details', label: 'My experience', cta: 'Ask about my experience', subject: 'Your experience', body: 'I would like to know more about your experience.' },
    { id: 'other', label: 'Something else', cta: 'Email about something else', subject: 'Hello', body: '' },
  ],
  footer: {
    credits: 'Credits',
    pictures: 'Pictures and footage:',
    projectPhotos: 'illustrative photographs via',
    by: 'by',
    updated: 'Last updated November 2026',
  },
};

const fr = {
  meta: {
    title: 'Alexis G. Mayer | Chef d’équipe TI et développeur, Ottawa',
    description:
      'Alexis G. Mayer, chef d’équipe TI (TI-03) à l’Agence des services frontaliers du Canada à Ottawa : applications Power Platform et web. Bilingue.',
  },
  langName: 'Français',
  switchTo: 'View in English',
  nav: { work: 'Projets', about: 'À propos', experience: 'Expérience', contact: 'Contact', label: 'Sections', menu: 'Menu', close: 'Fermer' },
  backToTop: 'retour en haut',
  emailMe: 'M’écrire',
  hero: {
    title: ['Alexis G. Mayer,', 'développeur et chef d’équipe'],
    tagline: 'Chef d’équipe à l’Agence des services frontaliers du Canada.',
    intro:
      'Je conçois des applications Power Platform et web sécurisées, et je les explique à des publics techniques et non techniques, en français et en anglais.',
    glance: 'Power Platform et web · bilingue · autorisation fédérale valide',
    cta: 'Voir les projets',
    resume: 'CV (PDF, en anglais)',
    video: 'Nuages qui défilent, vus d’en haut',
    pause: 'Mettre en pause la vidéo des nuages',
    play: 'Lire la vidéo des nuages',
  },
  work: {
    title: ['Projets sélectionnés', ' : IA, gestion de cas et outils internes'],
    note: 'Pour des raisons de sécurité, je ne fais référence à ces projets que de manière anonyme et par leurs aspects techniques. Les images sont illustratives et ne montrent pas les projets.',
    objective: 'Objectif',
    role: 'Rôle',
    technologies: 'Technologies',
    more: 'Objectif et rôle',
  },
  projects: withMedia([
    {
      title: 'Projet A',
      kind: 'Intelligence artificielle',
      alt: 'Étages dorés et cuivrés d’un réfrigérateur à dilution, dans un laboratoire',
      objective:
        'Créer une plateforme web pour comparer le rendement de modèles d’IA lors d’essais et présenter les résultats aux décideurs.',
      role: 'J’étais le développeur et je consultais des collègues plus expérimentés. J’ai été réaffecté avant la fin de la plateforme.',
    },
    {
      title: 'Projet B',
      kind: 'Collecte de données sur le terrain',
      alt: 'Une côte brumeuse avec des rochers et un cap boisé, vue à travers les herbes des dunes',
      objective:
        'Permettre aux utilisateurs sur le terrain de saisir des données sur les cas depuis un ordinateur ou un appareil mobile. Le travail comprenait la migration des données d’un ancien système et la création d’un tableau de bord de suivi.',
      role: 'J’étais développeur, aux côtés de 6 membres de l’équipe.',
    },
    {
      title: 'Projet C',
      kind: 'Gestion de cas',
      alt: 'Une main tenant un téléphone qui affiche une carte avec des repères',
      objective:
        'Permettre aux utilisateurs, spécialistes ou non, de créer des demandes et de collaborer sur des formulaires en ligne. Le travail comprenait la migration des données d’un ancien système et la création d’un tableau de bord de suivi.',
      role: 'J’étais chef d’équipe : je gérais les ressources de l’équipe ainsi que les attentes du client.',
    },
    {
      title: 'Projet D',
      kind: 'Efficacité interne',
      alt: 'Une entrée en pierre surmontée du mot « Employees » gravé, au-dessus d’une porte noire',
      objective:
        'Permettre à la haute direction de soumettre des demandes d’heures supplémentaires pour son personnel et de les acheminer pour approbation. Le travail comprenait la migration des données de la solution précédente et la création d’un tableau de bord de suivi.',
      role: 'Je dirigeais l’équipe, en gérant ses ressources et les attentes du client.',
    },
  ]),
  about: {
    title: 'À propos d’Alexis G. Mayer',
    newsTitle: 'Chef d’équipe (TI-03) depuis novembre 2024',
    newsDesc: 'À l’Agence des services frontaliers du Canada, où j’ai commencé comme développeur junior en 2021.',
    newsLink: 'Voir le parcours',
  },
  letterMark: 'Power Platform',
  letter: [
    'Alexis G. Mayer est développeur et chef d’équipe à Ottawa, à l’Agence des services frontaliers du Canada, et conçoit des applications Power Platform et web sécurisées. Mon travail couvre l’analyse des exigences, les relations avec les clients, la formation et la conception de solutions sécurisées.',
    'J’apprends et j’applique rapidement de nouveaux logiciels, et j’ai des connaissances approfondies des technologies infonuagiques et sur site.',
    'Je présente les projets en termes techniques et non techniques, et je suis parfaitement bilingue, à l’oral comme à l’écrit, en français et en anglais.',
    'Je détiens une autorisation de sécurité fédérale valide, et je reste concentré et axé sur les résultats en menant plusieurs projets de front.',
  ],
  experience: { title: 'Expérience et formation', roles: 'Postes', education: 'Formation', strengths: 'Points forts' },
  roles: [
    { name: 'Chef d’équipe (TI-03), Agence des services frontaliers du Canada', short: 'Chef d’équipe (TI-03), ASFC', value: 'depuis nov. 2024' },
    { name: 'Programmeur-analyste (TI-02), Agence des services frontaliers du Canada', short: 'Programmeur-analyste (TI-02), ASFC', value: 'janv. 2022 – nov. 2024' },
    {
      name: 'Développeur d’applications junior (TI-01, stage et occasionnel), Accelerated Innovative Emerging Technologies, Agence des services frontaliers du Canada',
      short: 'Développeur junior (TI-01), ASFC',
      value: 'avr. – déc. 2021',
    },
    { name: 'Stagiaire Support ATE (expert technique en applications), déploiement d’Epic, Hôpital général de Hawkesbury', short: 'Stagiaire Support ATE', value: 'mai – août 2019' },
  ],
  education: [
    { name: 'Diplôme en programmation informatique, La Cité collégiale', value: 'janv. 2020 – avr. 2022' },
    { name: 'Génie informatique, La Cité collégiale', value: 'sept. 2018 – déc. 2019' },
  ],
  strengths: [
    { name: 'Power Platform', value: 'Apps, Automate, BI' },
    { name: 'Web et données', value: 'React, SQL' },
    { name: 'Technologies', value: 'Infonuagiques et sur site' },
    { name: 'Langues', value: 'Français et anglais' },
    { name: 'Autorisation de sécurité', value: 'Fédérale, valide' },
  ],
  contact: {
    title: 'Discutons',
    lead: 'Vous recrutez ou souhaitez échanger sur Power Platform au gouvernement? Écrivez-moi ou téléchargez mon CV.',
    copy: 'Copier',
    copied: 'Copié',
    copiedAnnounce: 'Courriel copié dans le presse-papiers',
    legend: 'À quel sujet?',
    phone: 'Téléphone',
    languages: 'Langues',
    languagesValue: 'Français et anglais',
    resume: 'CV',
    download: 'Télécharger le PDF (en anglais)',
  },
  needs: [
    { id: 'role', label: 'Un poste', cta: 'Écrire au sujet d’un poste', subject: 'Un poste', body: 'J’aimerais vous parler d’un poste.' },
    { id: 'project', label: 'Un projet', cta: 'Écrire au sujet d’un projet', subject: 'Un projet', body: 'J’ai un projet pour lequel j’aimerais votre aide.' },
    { id: 'details', label: 'Mon expérience', cta: 'Poser une question sur mon expérience', subject: 'Votre expérience', body: 'J’aimerais en savoir plus sur votre expérience.' },
    { id: 'other', label: 'Autre chose', cta: 'Écrire au sujet d’autre chose', subject: 'Bonjour', body: '' },
  ],
  footer: {
    credits: 'Crédits',
    pictures: 'Images et vidéo :',
    projectPhotos: 'photos illustratives via',
    by: 'par',
    updated: 'Dernière mise à jour : novembre 2026',
  },
};

export const content = { en, fr };
