import Header from '../../components/Shared/Header';
import styles from './styles.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <Header title='Page Not Found' />
    </div>
  );
};

export default PageNotFound;
