import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../../types/blog';
import styles from './styles.module.scss';

type Props = {
  post: Post;
};

const BlogPost = (props: Props) => {
  const navigate = useNavigate();

  const selectPost = () => {
    navigate(`/blog/${props.post.date}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={selectPost}>
        <h3>{dayjs(`${props.post.date}`).format('dddd, MMMM DD, YYYY')}</h3>
        <h1 className={styles.title}>{props.post.title}</h1>
        <img src={props.post.images[0]} alt='' className={styles.coverImage} />
      </div>
    </div>
  );
};

export default BlogPost;
