import { useEffect } from 'react';
import ExperienceEntry from '../../components/experience/ExperienceEntry';
import Header from '../../components/shared/Header';
import experienceEntries from '../../data/experience';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';

const Experience = () => {
  const { unlockScroll } = useScrollLock();

  useEffect(() => {
    unlockScroll();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Experience' gradient underlined />
      </div>

      {experienceEntries.map((entry, index) => {
        return <ExperienceEntry key={index} entry={entry} />;
      })}
    </div>
  );
};

export default Experience;
