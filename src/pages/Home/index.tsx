import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>hello, my name is </div>
      <div className={styles.cloudyText}>ANDREW BROWER</div>
      <div className={styles.text}>welcome to my portfolio</div>
    </div>
  );
};

export default Home;
