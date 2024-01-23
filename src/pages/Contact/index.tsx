import { useEffect } from 'react';
import ContactForm from '../../components/contact/ContactForm';
import Header from '../../components/shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Contact = () => {
  const { lockScroll } = useScrollLock();

  useEffect(() => {
    lockScroll();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Contact' gradient underlined />
      </div>

      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
