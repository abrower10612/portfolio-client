import { useEffect } from 'react';
import Navigation from '../../components/shared/Navigation';
import styles from './styles.module.scss';
import Socials from '../../components/shared/Socials';

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>Hello, my name is</div>
      <div className={styles.cloudyText}>ANDREW BROWER</div>
      <div className={styles.title}>Full Stack Software Engineer</div>
      <Navigation />
      <Socials />
    </div>
  );
};

export default Home;
