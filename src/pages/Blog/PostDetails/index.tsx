import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../../components/shared/BackButton';
import Header from '../../../components/shared/Header';
import posts from '../../../data/blog';
import { Post } from '../../../types/blog';
import formatDateString from '../../../utils/dates';
import styles from './styles.module.scss';

const PostDetails = () => {
  const { date } = useParams();
  const [post, setPost] = useState<Post>();
  const navigate = useNavigate();
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      const post = posts.find((post) => post.date === parseInt(date || ''));

      if (!post) {
        navigate('/blog');
      }

      setPost(post);
    }
  }, []);

  const navigateBack = () => {
    navigate('/blog');
  };

  const TextWithImage = () => {
    if (!post) return;

    const pattern = /(\*\*\*(.*?)\*\*\*)/g;

    const replacedText = post?.body.replace(pattern, (match, p1, p2) => {
      return `<img src="${p2}" alt="Dynamic Image" className={${styles.coverImage}}/> `;
    });

    return <div dangerouslySetInnerHTML={{ __html: replacedText }} />;
  };

  const renderContent = () => {
    const split = post?.body.split(/(IMG\d+)/);

    return split?.map((text, index) => {
      const isImage = text.startsWith('IMG');
      const match = text.match(/\d+/);

      if (!isImage) {
        return <div key={index}>{text}</div>;
      } else if (!match) {
        return null;
      }

      const imgNum = parseInt(match[0], 10) - 1;
      const image = post?.images[imgNum];
      return <img key={index} src={image} className={styles.image}></img>;
    });
  };

  return (
    <div className={styles.container}>
      <BackButton label='All Posts' onClick={navigateBack} />

      <Header title='Blog' gradient underlined />

      <h1>{post?.title}</h1>
      <h3>{formatDateString(`${post?.date}`)}</h3>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default PostDetails;
