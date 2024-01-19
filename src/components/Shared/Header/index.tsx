import styles from './styles.module.scss';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return <div className={styles.container}>{props.title}</div>;
};

export default Header;
