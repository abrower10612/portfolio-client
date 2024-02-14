export type Project = {
  name: string;
  type: 'Professional' | 'Personal';
  codeURL?: string;
  demoURL?: string;
  webURL?: string;
  description: string;
  technologies: Technology[];
};

export type Technology = {
  name: string;
  icon: string;
  url: string;
};
