import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Collapse } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Testimonial } from '../../../types/testimonials';
import styles from './styles.module.scss';

type Props = {
  testimonial: Testimonial;
};

const TestimonialEntry = (props: Props) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);
  const fullTextRef = useRef(null);
  const maxCharacterCount = 300;
  const expandedHeight = 100;

  useEffect(() => {
    setIsTruncated(props.testimonial.body.length > maxCharacterCount);
  }, []);

  const toggleIsTruncated = () => {
    if (fullTextRef.current) {
      setIsTruncated(!isTruncated);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>{props.testimonial.name}</div>
      <div className={styles.title}>{props.testimonial.title}</div>

      <Collapse
        in={!isTruncated}
        collapsedSize={isTruncated ? `${expandedHeight}px` : 'none'}
        sx={{ padding: '0 0 20px 0' }}
      >
        <div className={styles.body} ref={fullTextRef}>
          {props.testimonial.body}
        </div>
      </Collapse>

      <div className={styles.expandButton}>
        {props.testimonial.body.length > maxCharacterCount && (
          <Button
            onClick={toggleIsTruncated}
            color='success'
            endIcon={
              isTruncated ? (
                <ExpandMoreIcon color='success' />
              ) : (
                <ExpandLessIcon color='success' />
              )
            }
          >{`Show ${isTruncated ? 'More' : 'Less'}`}</Button>
        )}
      </div>
    </div>
  );
};

export default TestimonialEntry;
