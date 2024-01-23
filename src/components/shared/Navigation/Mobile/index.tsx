import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteData } from '../../../../router/types';
import Header from '../../Header';
import styles from './styles.module.scss';

type Props = {
  showHome?: boolean;
  routes: RouteData[];
};

const MobileNavigation = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const drawerVariant = 'temporary';
  const menuIconSx = { color: '#ffffff' };
  const activeLink = `${styles.link} ${styles.active}`;
  const inactiveLink = styles.link;

  const handleDrawerToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.menuIconContainer}>
        <IconButton onClick={handleDrawerToggle} className={styles.menuIcon}>
          <MenuIcon sx={menuIconSx} fontSize='large' />
        </IconButton>
      </div>

      <Drawer
        variant={drawerVariant}
        className={styles.drawer}
        open={show}
        onClose={handleDrawerToggle}
      >
        <div className={styles.drawerContainer}>
          <div className={styles.header}>
            <Header title='Andrew Brower' gradient />

            <IconButton onClick={handleDrawerToggle} sx={menuIconSx}>
              <CloseIcon fontSize='large' className={styles.closeIcon} />
            </IconButton>
          </div>

          <div className={styles.links}>
            {props.routes.map((route, index) => {
              return (
                <NavLink
                  key={index}
                  to={route.path.replace('/*', '')}
                  onClick={handleDrawerToggle}
                  className={(route) => {
                    return route.isActive ? activeLink : inactiveLink;
                  }}
                >
                  <span>{route.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
