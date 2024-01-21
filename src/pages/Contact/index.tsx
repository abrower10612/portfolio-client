import ContactForm from '../../components/contact/ContactForm';
import Header from '../../components/shared/Header';
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
