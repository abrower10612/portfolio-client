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
      color: '#57cc99',
      hover: {
        background:
          'linear-gradient(270deg, #79addc, #ffc09f, #ffee93, #fcf5c7, #adf7b6, #79addc, #ffc09f)',
        backgroundSize: '300% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        boxShadow: 'none',
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
              <Button
                sx={{
                  color: sx.button.color,
                  ':hover': sx.button.hover,
                }}
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
