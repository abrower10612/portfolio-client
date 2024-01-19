export type RouteData = {
  path: string;
  name?: string;
  id?: string;
  children: {
    path: string;
    element: JSX.Element;
  }[];
};
