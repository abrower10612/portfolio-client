import Header from '../../components/Shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Experience = () => {
  useScrollLock();

  return (
    <div className={styles.container}>
      <Header title='Experience' gradient />
    </div>
  );
};

export default Experience;
