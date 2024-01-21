import ContactForm from '../../components/Contact/ContactForm';
import Header from '../../components/Shared/Header';
import styles from './styles.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header title='Contact' gradient />
      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
