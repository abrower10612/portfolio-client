import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

type IconSize = 'small' | 'large' | 'inherit' | 'medium' | '';

const Socials = () => {
  const { width } = useWindowDimensions();
  const iconSize: IconSize = width > 500 ? 'large' : 'medium';

  return (
    <div className={styles.container}>
      <IconButton
        target='_blank'
        href='https://www.linkedin.com/in/andrewbrower91/'
      >
        <LinkedInIcon className={styles.icon} fontSize={iconSize} />
      </IconButton>

      <IconButton target='_blank' href='https://github.com/abrower10612'>
        <GitHubIcon className={styles.icon} fontSize={iconSize} />
      </IconButton>
    </div>
  );
};

export default Socials;
