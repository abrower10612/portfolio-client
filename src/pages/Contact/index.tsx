import ContactForm from '../../components/contact/ContactForm';
import Header from '../../components/shared/Header';
import styles from './styles.module.scss';

const Contact = () => {
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
