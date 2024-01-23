export type RouteData = {
  path: string;
  name?: string;
  id?: string;
  display: boolean;
  showLayout: boolean;
  order: number;
  children: {
    path: string;
    element: JSX.Element;
  }[];
};
