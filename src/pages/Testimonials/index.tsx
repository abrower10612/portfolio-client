import Header from '../../components/shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Testimonials = () => {
  useScrollLock();

  return (
    <div className={styles.container}>
      <Header title='Testimonials' gradient />
    </div>
  );
};

export default Testimonials;
