import { ExperienceEntryType } from '../../../types/experience';
import styles from './styles.module.scss';

type Props = {
  entry: ExperienceEntryType;
  key: number;
};

const ExperienceEntry = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.company}>{props.entry.company}</div>

      <div className={styles.roles}>
        {props.entry.roles.map((role, index) => {
          return (
            <div key={index} className={styles.role}>
              <div className={styles.title}>{role.title}</div>
              <div className={styles.dates}>{role.dates}</div>
              {index !== props.entry.roles.length - 1 && (
                <div className={styles.line} />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.actions}>
        {props.entry.actions.map((action, index) => {
          return (
            <ul key={index}>
              <li>{action}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceEntry;
