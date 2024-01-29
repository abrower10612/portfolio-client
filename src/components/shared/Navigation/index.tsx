import { useLocation } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { routeData } from '../../../router';
import DesktopNavigation from './Desktop';
import MobileNavigation from './Mobile';

const Navigation = () => {
  const { width } = useWindowDimensions();
  const displayPivot = 850;
  const location = useLocation();
  const showHome = location.pathname !== '/';

  const routes = routeData
    .filter((route) => (showHome ? route : route.name !== 'Home'))
    .sort((a, b) => a.order - b.order)
    .map((link) => {
      const isHome = link.path === '/*';
      const path = link.path.replace(`${isHome ? '*' : '/*'}`, '');

      return { ...link, path };
    });

  return width > displayPivot ? (
    <DesktopNavigation showHome={showHome} routes={routes} />
  ) : (
    <MobileNavigation showHome={showHome} routes={routes} />
  );
};

export default Navigation;
