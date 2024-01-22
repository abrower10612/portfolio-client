import Header from '../../components/shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Testimonials = () => {
  useScrollLock();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Testimonials' gradient />
      </div>
    </div>
  );
};

export default Testimonials;
