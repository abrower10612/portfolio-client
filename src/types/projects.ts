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

export type FilterSelected = {
  label: string;
  value: string;
};

export type ProjectFilter = {
  label: string;
  onFilter: Function;
  value: string;
  options: FilterSelected[];
};
