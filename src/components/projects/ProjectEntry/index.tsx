import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Chip, IconButton, Tooltip } from '@mui/material';
import { Project } from '../../../types/projects';
import styles from './styles.module.scss';

type Props = {
  project: Project;
};

const ProjectEntry = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{props.project.name}</div>

        {/* WEBSITE */}
        {props.project.webURL && (
          <Tooltip title='Website'>
            <IconButton
              target='_blank'
              href={props.project.webURL}
              size='small'
            >
              <div className={styles.icon}>
                <LaunchIcon />
              </div>
            </IconButton>
          </Tooltip>
        )}

        {/* CODE */}
        {props.project.codeURL && (
          <Tooltip title='Code'>
            <IconButton
              target='_blank'
              href={props.project.codeURL}
              size='small'
            >
              <div className={styles.icon}>
                <CodeIcon />
              </div>
            </IconButton>
          </Tooltip>
        )}

        {/* DEMO */}
        {props.project.demoURL && (
          <Tooltip title='Demo'>
            <IconButton
              target='_blank'
              href={props.project.demoURL}
              size='small'
            >
              <div className={styles.icon}>
                <SportsEsportsIcon />
              </div>
            </IconButton>
          </Tooltip>
        )}
      </div>

      <div className={styles.chip}>
        <Chip
          variant='filled'
          color={props.project.type === 'Professional' ? 'success' : 'info'}
          label={props.project.type}
          sx={{ color: 'white', width: '100px' }}
        />
      </div>

      <div className={styles.desc}>{props.project.description}</div>
    </div>
  );
};

export default ProjectEntry;
