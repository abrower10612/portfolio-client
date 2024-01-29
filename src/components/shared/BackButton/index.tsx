import { Button } from '@mui/material';
import styles from './styles.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {
  onClick: Function;
  label: string;
};

const NavigateBack = (props: Props) => {
  return (
    <Button
      onClick={() => props.onClick()}
      className={styles.container}
      startIcon={<ArrowBackIcon />}
      sx={{ color: '#ffffff' }}
    >
      {props.label}
    </Button>
  );
};

export default NavigateBack;
