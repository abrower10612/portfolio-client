import dayjs from 'dayjs';
import BlogPost from '../../components/blog/BlogPost';
import Header from '../../components/shared/Header';
import posts from '../../data/blog';
import styles from './styles.module.scss';

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Blog' gradient underlined />
      </div>

      {!posts.length && (
        <div className={styles.noPosts}>
          No posts yet
          <div className={styles.checkBack}>Check back later ✌️</div>
        </div>
      )}

      <div className={styles.posts}>
        {posts
          .sort((a, b) => b.date - a.date)
          .map((post, index) => {
            return <BlogPost key={index} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Blog;
