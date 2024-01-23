import { useEffect } from 'react';
import Header from '../../components/shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Projects = () => {
  const scroll = useScrollLock();

  useEffect(() => {
    scroll.lock();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Projects' gradient underlined />
      </div>
    </div>
  );
};

export default Projects;
