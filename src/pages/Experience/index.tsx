import { useEffect } from 'react';
import ExperienceEntry from '../../components/experience/ExperienceEntry';
import Header from '../../components/shared/Header';
import experienceEntries from '../../data/experience';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Experience = () => {
  const scroll = useScrollLock();

  useEffect(() => {
    scroll.unlock();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Experience' gradient underlined />
      </div>

      <div className={styles.entries}>
        {experienceEntries.map((entry, index) => {
          return <ExperienceEntry key={index} entry={entry} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
