import { Route, Routes } from 'react-router-dom';
import { RouteData } from './types';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import PageNotFound from '../pages/PageNotFound';
import Experience from '../pages/Experience';
import ContactMe from '../pages/Contact';
import Testimonials from '../pages/Testimonials';
import Layout from '../components/shared/Layout';
import Blog from '../pages/Blog';
import Post from '../pages/Blog/Post';

export const routeData: RouteData[] = [
  {
    path: '/projects/*',
    name: 'Projects',
    display: true,
    showLayout: true,
    order: 2,
    children: [
      {
        path: '/*',
        element: (
          <Layout>
            <Projects />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/experience/*',
    name: 'Experience',
    display: true,
    showLayout: true,
    order: 3,
    children: [
      {
        path: '/*',
        element: (
          <Layout>
            <Experience />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/testimonials/*',
    name: 'Testimonials',
    display: true,
    showLayout: true,
    order: 4,
    children: [
      {
        path: '/*',
        element: (
          <Layout>
            <Testimonials />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/blog/*',
    name: 'Blog',
    display: true,
    showLayout: true,
    order: 5,
    children: [
      {
        path: '/*',
        element: (
          <Layout>
            <Blog />
          </Layout>
        ),
      },
      {
        path: '/:id',
        element: (
          <Layout>
            <Post />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/contact/*',
    name: 'Contact',
    display: true,
    showLayout: true,
    order: 6,
    children: [
      {
        path: '/*',
        element: (
          <Layout>
            <ContactMe />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/*',
    display: false,
    showLayout: true,
    name: 'Home',
    order: 1,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/*',
        element: (
          <Layout>
            <PageNotFound />
          </Layout>
        ),
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
