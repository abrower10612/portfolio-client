import { Slide, SlideProps, Snackbar } from '@mui/material';
import styles from './styles.module.scss';
import { Snack } from '../../../types/contact';

type Props = {
  message: string;
  open: boolean;
  close: Function;
};

const SnackbarWrapper = (props: Props) => {
  const snack: Snack = {
    open: props.open,
    transition: SlideTransition,
  };

  function SlideTransition(props: SlideProps) {
    return (
      <Slide
        {...props}
        direction='left'
        className={styles.slide}
        style={{ backgroundColor: '#457B3B' }}
      />
    );
  }

  return (
    <Snackbar
      open={props.open}
      onClose={() => props.close()}
      TransitionComponent={snack.transition}
      message={props.message}
      key={snack.transition.name}
      autoHideDuration={3000}
      color='success'
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    />
  );
};

export default SnackbarWrapper;
