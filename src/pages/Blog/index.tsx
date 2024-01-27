import Header from '../../components/shared/Header';
import styles from './styles.module.scss';

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Blog' gradient underlined />
      </div>
    </div>
  );
};

export default Blog;
