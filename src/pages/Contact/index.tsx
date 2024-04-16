import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/shared/Header';
import Socials from '../../components/shared/Socials';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Contact = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const scroll = useScrollLock();

  useEffect(() => {
    scroll.unlock();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('abrower10612@gmail.com');
      setCopied(true);
    } catch (error: any) {
      console.log(`🚨🚨🚨🚨🚨🚨 Error: ${error.message}`);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Contact' gradient underlined />
      </div>

      <div className={styles.text}>
        <h1>Want to get in touch?</h1>
        <span className={styles.email}>
          <span className={styles.wording}>Email me at</span>
          <Button
            className={styles.emailAddress}
            onClick={handleCopyEmail}
            endIcon={copied ? <LibraryAddCheckIcon /> : <ContentCopyIcon />}
            sx={{ color: '#57cc99' }}
          >
            abrower10612@gmail.com
          </Button>
          <span
            className={`${styles.copied} ${copied ? styles.show : styles.hide}`}
          >
            copied
          </span>
        </span>
        <div>
          <span className={styles.wording}>Message me on</span>
          <Button
            className={styles.linkedin}
            target='_blank'
            href='https://www.linkedin.com/in/andrewbrower91/'
            endIcon={<OpenInNewIcon />}
            sx={{ color: '#57cc99' }}
          >
            LinkedIn
          </Button>
        </div>
      </div>

      <div className={styles.socialsContainer}>
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
