import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { routeData } from '../../../router';
import Header from '../Header';
import Navigation from '../Navigation';
import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const displayPivot = 600;
  const drawerVariant = 'temporary';
  const menuIconSx = { color: '#ffffff' };

  const handleDrawerToggle = () => {
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      {width > displayPivot ? <Navigation /> : undefined}

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
            {routeData.map((route, index) => {
              return (
                <NavLink
                  key={index}
                  to={route.path.replace('/*', '')}
                  onClick={handleDrawerToggle}
                  className={(route) => {
                    return route.isActive
                      ? `${styles.link} ${styles.active}`
                      : `${styles.link}`;
                  }}
                >
                  <span>{route.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </Drawer>

      <div className={styles.children}>{props.children}</div>
    </div>
  );
};

export default Layout;
