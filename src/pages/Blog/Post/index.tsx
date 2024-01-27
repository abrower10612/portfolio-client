import Header from '../../../components/shared/Header';
import styles from './styles.module.scss';

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Blog Post' gradient underlined />
      </div>
    </div>
  );
};

export default Post;
