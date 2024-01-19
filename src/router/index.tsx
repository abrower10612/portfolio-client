import { Route, Routes } from 'react-router-dom';
import { RouteData } from './types';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import PageNotFound from '../pages/PageNotFound';
import Experience from '../pages/Experience';
import ContactMe from '../pages/Contact';
import Testimonials from '../pages/Testimonials';

export const routeData: RouteData[] = [
  {
    path: '/projects/*',
    name: 'Projects',
    display: true,
    children: [
      {
        path: '/*',
        element: <Projects />,
      },
    ],
  },
  {
    path: '/experience/*',
    name: 'Experience',
    display: true,
    children: [
      {
        path: '/*',
        element: <Experience />,
      },
    ],
  },
  {
    path: '/testimonials/*',
    name: 'Testimonials',
    display: true,
    children: [
      {
        path: '/*',
        element: <Testimonials />,
      },
    ],
  },
  {
    path: '/contact/*',
    name: 'Contact',
    display: true,
    children: [
      {
        path: '/*',
        element: <ContactMe />,
      },
    ],
  },
  {
    path: '/*',
    display: false,
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
