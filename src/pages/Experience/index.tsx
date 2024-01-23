import ExperienceEntry from '../../components/experience/ExperienceEntry';
import Header from '../../components/shared/Header';
import experienceEntries from '../../data/experience';
import styles from './styles.module.scss';

const Experience = () => {
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
