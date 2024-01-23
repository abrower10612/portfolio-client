import { useEffect } from 'react';
import Header from '../../components/shared/Header';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './styles.module.scss';
import projects from '../../data/projects';
import ProjectEntry from '../../components/projects/ProjectEntry';

const Projects = () => {
  const scroll = useScrollLock();

  useEffect(() => {
    scroll.unlock();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='Projects' gradient underlined />

        {projects.map((project, index) => {
          return <ProjectEntry project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
