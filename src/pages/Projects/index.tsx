import { useEffect, useState } from 'react';
import ProjectEntry from '../../components/projects/ProjectEntry';
import Header from '../../components/shared/Header';
import projects from '../../data/projects';
import useScrollLock from '../../hooks/useScrollLock';
import { ProjectFilter } from '../../types/projects';
import styles from './styles.module.scss';

const Projects = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const scroll = useScrollLock();

  useEffect(() => {
    scroll.unlock();
  }, []);

  const handleFilter = (value: string) => {
    setFilterValue(value);
  };

  const projectFilter: ProjectFilter = {
    label: 'Filter by Technology',
    value: filterValue,
    onFilter: handleFilter,
    options: [
      {
        label: 'React',
        value: 'react',
      },
      {
        label: 'Flutter',
        value: 'flutter',
      },
    ],
  };

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
