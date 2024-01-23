import { ReactNode } from 'react';
import Navigation from '../Navigation';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.children}>{props.children}</div>
    </div>
  );
};

export default Layout;
