import { NavLink } from 'react-router-dom';
import { routeData } from '../../../../router';
import styles from './styles.module.scss';
import { RouteData } from '../../../../router/types';

type Props = {
  showHome?: boolean;
  routes: RouteData[];
};

const DesktopNavigation = (props: Props) => {
  const activeLink = `${styles.link} ${styles.active}`;
  const inactiveLink = styles.link;

  return (
    <div className={styles.container}>
      {props.routes.map((link, index) => {
        const isHome = link.path === '/*';
        const path = link.path.replace(`${isHome ? '*' : '/*'}`, '');

        return (
          <div className={styles.navItem} key={index}>
            <NavLink
              key={index}
              to={path}
              className={(route) => {
                return route.isActive && link.name !== 'Home'
                  ? activeLink
                  : inactiveLink;
              }}
            >
              <span>{link.name}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
