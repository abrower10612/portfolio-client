import styles from './styles.module.scss';

type Props = {
  title: string;
  gradient?: boolean;
  underlined?: boolean;
};

const Header = (props: Props) => {
  return (
    <div
      className={`${styles.container} ${
        props.underlined && styles.underlined
      } ${props.gradient && styles.cloudyText}`}
    >
      {props.title}
    </div>
  );
};

export default Header;
