import Header from '../../components/Shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Contact = () => {
  useScrollLock();

  return (
    <div className={styles.container}>
      <Header title='Contact' gradient />
    </div>
  );
};

export default Contact;
