import styles from './styles.module.scss';
import { routeData } from '../../../router/index';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Navigation = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const sx = {
    button: {
      size: width > 500 ? 'large' : 'small',
      color: '#ffffff',
      hover: {
        color: '#57cc99',
      },
    },
  };

  const handleNavigate = (path: string) => {
    navigate(path.replace('/*', ''));
  };

  return (
    <div className={styles.container}>
      {routeData
        .filter((route) => route.display)
        .map((link, index) => {
          return (
            <div className={styles.navItem} key={index}>
              <NavLink
                key={index}
                to={link.path.replace('/*', '')}
                className={(route) => {
                  return route.isActive
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`;
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

export default Navigation;
