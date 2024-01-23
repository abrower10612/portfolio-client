import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconTiles from '../../components/home/IconTiles';
import Socials from '../../components/shared/Socials';
import styles from './styles.module.scss';

const Home = () => {
  const navigate = useNavigate();

  const stepForward = () => {
    navigate('/projects');
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Hello, my name is</div>
      <div className={styles.cloudyText}>ANDREW BROWER</div>
      <div className={styles.title}>Full Stack Software Engineer</div>

      <div className={styles.icons}>
        <IconTiles />
      </div>

      <div className={styles.cta}>
        <Button
          variant='contained'
          color='success'
          onClick={stepForward}
          sx={{ width: '200px' }}
        >
          Explore Now
        </Button>
      </div>
      <Socials />
    </div>
  );
};

export default Home;
