import { Route, Routes } from 'react-router-dom';
import { RouteData } from './types';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import PageNotFound from '../pages/PageNotFound';
import Experience from '../pages/Experience';
import ContactMe from '../pages/ContactMe';

export const routeData: RouteData[] = [
  {
    path: '/projects',
    children: [
      {
        path: '/*',
        element: <Projects />,
      },
    ],
  },
  {
    path: '/experience',
    children: [
      {
        path: '/*',
        element: <Experience />,
      },
    ],
  },
  {
    path: '/contact-me',
    children: [
      {
        path: '/*',
        element: <ContactMe />,
      },
    ],
  },
  {
    path: '/*',
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/*',
        element: <PageNotFound />,
      },
    ],
  },
];

export const router = (
  <Routes>
    {routeData.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Routes>
              {route.children.map((child, index) => {
                return (
                  <Route
                    key={index}
                    path={child.path}
                    element={child.element}
                  />
                );
              })}
            </Routes>
          }
        ></Route>
      );
    })}
  </Routes>
);
