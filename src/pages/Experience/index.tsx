import ExperienceEntry from '../../components/experience/ExperienceEntry';
import Header from '../../components/shared/Header';
import experienceEntries from '../../data/experience';
import styles from './styles.module.scss';

const Experience = () => {
  return (
    <div className={styles.container}>
      <Header title='Experience' gradient />

      {experienceEntries.map((entry, index) => {
        return <ExperienceEntry key={index} entry={entry} />;
      })}
    </div>
  );
};

export default Experience;
