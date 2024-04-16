import { Project } from '../types/projects';
import technologies from './technologies';

const projects: Project[] = [
  {
    name: 'TaxCredible',
    type: 'Professional',
    webURL: 'https://www.taxcredible.com/',
    description:
      "Since 2002, TaxCredible has been the preferred tax credit partner for hundreds of CPA firms. By leveraging their expertise and years of experience in the tax incentive industry, TaxCredible helps reinforce a CPA Firm's reputation as a forward-thinking expert, fully committed to their clients' best interests.",
    technologies: [
      technologies.typescript,
      technologies.vue,
      technologies.express,
      technologies.node,
      technologies.aws,
      technologies.mysql,
      technologies.docker,
      technologies.gitlab,
    ],
  },
  {
    name: 'Cocoa Gift Cards',
    type: 'Professional',
    webURL: 'https://www.cocoagiftcards.com/',
    description:
      'Cocoa Gift Cards enables businesses to set up gift cards in their own unique way, free from card processing fees or minimums. This innovative platform not only helps businesses grow and generate revenue but also enhances the joy of giving, offering a delightful experience through personalized gift cards.',
    technologies: [
      technologies.typescript,
      technologies.react,
      technologies.recoil,
      technologies.node,
      technologies.express,
      technologies.java,
      technologies.android,
      technologies.firebase,
    ],
  },
  {
    name: 'Cocoa Tickets',
    type: 'Professional',
    webURL: 'https://www.cocoatickets.com/',
    description:
      'Cocoa Tickets offers a variety of tools and features designed to help create memorable and engaging events, leaving a lasting impression on attendees. With options for customizable event setup and diverse ticket types, coupled with onsite redemption and attendance tracking, Cocoa Tickets simplifies the management of all event aspects, ensuring a seamless experience for both organizers and attendees.',
    technologies: [
      technologies.typescript,
      technologies.react,
      technologies.recoil,
      technologies.node,
      technologies.express,
      technologies.java,
      technologies.android,
      technologies.firebase,
    ],
  },
  {
    name: 'Portfolio',
    type: 'Personal',
    codeURL: 'https://github.com/abrower10612/portfolio-client',
    description:
      'This portfolio showcases a comprehensive range of skills in both frontend and backend development, illustrating my ability to design, build, and maintain complex web applications. It serves as a testament to my technical proficiency, problem-solving capabilities, and commitment to delivering high-quality software solutions, highlighting projects that demonstrate innovative solutions and effective collaboration',
    technologies: [
      technologies.typescript,
      technologies.react,
      technologies.recoil,
      technologies.node,
      technologies.express,
      technologies.mongodb,
    ],
  },
  {
    name: 'Dice Roller',
    type: 'Personal',
    codeURL: 'https://github.com/abrower10612/flutter-dice-roller',
    demoURL: 'https://dice-roller-bvd3.onrender.com',
    description:
      'A simple dice rolling app in which a user selects a number of dice ranging from 1 to 6. After that, you ask? They roll away to their hearts desire.',
    technologies: [technologies.dart, technologies.flutter],
  },
  {
    name: 'Task Tracker',
    type: 'Personal',
    codeURL: 'https://github.com/abrower10612/flutter-task-tracker',
    demoURL: 'https://flutter-task-tracker.onrender.com/',
    description:
      'This simple task tracker app showcases some of my early exploration of Dart with Flutter on the frontend and Python with Django on the backend.',
    technologies: [
      technologies.dart,
      technologies.flutter,
      technologies.python,
      technologies.django,
    ],
  },
  {
    name: 'Drawing Queens',
    type: 'Personal',
    codeURL: 'https://github.com/abrower10612/drawing-queens-react',
    demoURL: 'https://drawing-queens-react.onrender.com',
    description:
      'Drawing Queens is a for-fun project that utilizes the Deck of Cards API to repeatedly draw two cards from a standard 52-card deck. This action continues until the Queen card of each suit is successfully drawn.',
    technologies: [technologies.react],
  },
];

export default projects;
