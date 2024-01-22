export type RouteData = {
  path: string;
  name?: string;
  id?: string;
  display: boolean;
  showLayout: boolean;
  children: {
    path: string;
    element: JSX.Element;
  }[];
};
