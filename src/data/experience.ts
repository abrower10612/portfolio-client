import { ExperienceEntryType } from '../types/experience';

const experienceEntries: ExperienceEntryType[] = [
  {
    company: 'TaxCredible',
    roles: [
      {
        title: 'Senior Full Stack Software Engineer',
        dates: 'Oct 2023 - Jan 2024',
      },
      {
        title: 'Full Stack Software Engineer',
        dates: 'Mar 2022 - Oct 2023',
      },
    ],
    actions: [
      'Eliminated type errors by incorporating TypeScript into the application server.',
      'Implemented MikroORM to optimize efficiency and accuracy in database queries.',
      'Increased system security by including JSON Web Tokens in the application API. Further reduced data breaches through a comprehensive role-based access system.',
      'Created user role-based front-end interfaces and logic to improve user experience.',
    ],
  },
  {
    company: 'Cocoa Accounting',
    roles: [
      {
        title: 'Full Stack Software Engineer',
        dates: 'Jul 2021 - Mar 2022',
      },
      {
        title: 'Software Engineer Intern',
        dates: 'Apr 2021 - Jul 2021',
      },
    ],
    actions: [
      'Designed efficient and high-performance database schemas.',
      'Led a team of five engineers in the creation of a Gift Card Processing and Management Platform including its corresponding mobile application, using TypeScript, React, Next, Node, Express, Java, and Firebase.',
      'Orchestrated the ground-up creation of a comprehensive event management system utilizing Node, Express, Vue.js, and TypeScript.',
      'Spearheaded the integration of DevOps practices to enhance the deployment workflow, improve scalability, and ensure continuous high availability.',
    ],
  },
  {
    company: 'BambooHR',
    roles: [
      {
        title: 'Account Executive II',
        dates: 'May 2020 - Dec 2020',
      },
      {
        title: 'Account Executive I',
        dates: 'Dec 2019 - May 2020',
      },
    ],
    actions: [
      'Implemented BambooHR solutions to address HR challenges in over 100 global companies, resulting in successful outcomes in hiring and performance management.',
      'Consistently achieved beyond performance quotas, reaching an impressive 205% and gaining recognition as a top performer.',
    ],
  },
  {
    company: 'ADP',
    roles: [
      {
        title: 'Senior Account Executive',
        dates: 'Jul 2018 - Dec 2019',
      },
      {
        title: 'Licensed Health & Benefits Agent',
        dates: 'Aug 2017 - Dec 2019',
      },
      {
        title: 'Account Executive II',
        dates: 'Jan 2017 - Jul 2018',
      },
      {
        title: 'Account Executive I',
        dates: 'Mar 2016 - Jan 2017',
      },
    ],
    actions: [
      'Achieved $691k in ARR and acquired 189 new clients, surpassing a $588k ARR quota.',
      "Held a senior position in ADP's top producing region, fulfilling a key role in the company's success.",
      "Qualified for ADP President's Club in recognition of outstanding sales performance",
    ],
  },
];

export default experienceEntries;
