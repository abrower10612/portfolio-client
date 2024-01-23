import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import Header from '../../components/shared/Header';
import Testimonial from '../../components/testimonials/TestimonialEntry';
import testimonials from '../../data/testimonials';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Testimonials = () => {
  const scroll = useScrollLock();

  useEffect(() => {
    scroll.unlock();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Testimonials' gradient underlined />
      </div>

      <Button
        endIcon={<LinkedInIcon />}
        href='https://www.linkedin.com/in/andrewbrower91/details/recommendations'
        target='_blank'
        variant='outlined'
        color='success'
      >
        View on LinkedIn
      </Button>

      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => {
          return <Testimonial testimonial={testimonial} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
