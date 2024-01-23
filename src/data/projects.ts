import { Project } from '../types/projects';

const projects: Project[] = [
  {
    name: 'TaxCredible',
    type: 'Professional',
    webURL: 'https://www.taxcredible.com/',
    description:
      "Since 2002, TaxCredible has been the preferred tax credit partner for hundreds of CPA firms. By leveraging their expertise and years of experience in the tax incentive industry, TaxCredible helps reinforce a CPA Firm's reputation as a forward-thinking expert, fully committed to their clients' best interests.",
  },
  {
    name: 'Cocoa Gift Cards',
    type: 'Professional',
    webURL: 'https://www.cocoagiftcards.com/',
    description:
      'Cocoa Gift Cards enables businesses to set up gift cards in their own unique way, free from card processing fees or minimums. This innovative platform not only helps businesses grow and generate revenue but also enhances the joy of giving, offering a delightful experience through personalized gift cards.',
  },
  {
    name: 'Cocoa Tickets',
    type: 'Professional',
    webURL: 'https://www.cocoatickets.com/',
    description:
      'Cocoa Tickets offers a variety of tools and features designed to help create memorable and engaging events, leaving a lasting impression on attendees. With options for customizable event setup and diverse ticket types, coupled with onsite redemption and attendance tracking, Cocoa Tickets simplifies the management of all event aspects, ensuring a seamless experience for both organizers and attendees.',
  },
  {
    name: 'Portfolio',
    type: 'Personal',
    codeURL: 'https://github.com/abrower10612/portfolio-client',
    description:
      'This portfolio showcases a comprehensive range of skills in both frontend and backend development, illustrating my ability to design, build, and maintain complex web applications. It serves as a testament to my technical proficiency, problem-solving capabilities, and commitment to delivering high-quality software solutions, highlighting projects that demonstrate innovative solutions and effective collaboration',
  },
  {
    name: 'Drawing Queens',
    type: 'Personal',
    codeURL: 'https://github.com/abrower10612/drawing-queens-react',
    demoURL: 'https://drawing-queens-react.onrender.com',
    description:
      'Drawing Queens is a for-fun project that utilizes the Deck of Cards API to repeatedly draw two cards from a standard 52-card deck. This action continues until the Queen card of each suit is successfully drawn.',
  },
];

export default projects;
