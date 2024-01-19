import Header from '../../components/Shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Projects = () => {
  useScrollLock();

  return (
    <div className={styles.container}>
      <Header title='Projects' gradient />
    </div>
  );
};

export default Projects;
