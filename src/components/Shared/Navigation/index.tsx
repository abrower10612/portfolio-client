import styles from './styles.module.scss';
import { routeData } from '../../../router/index';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Navigation = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const sx = {
    button: {
      size: width > 500 ? 'large' : 'small',
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
              <Button
                sx={{ color: '#57cc99' }}
                size={sx.button.size as any}
                onClick={() => handleNavigate(link.path)}
              >
                {link.name}
              </Button>
            </div>
          );
        })}
    </div>
  );
};

export default Navigation;
