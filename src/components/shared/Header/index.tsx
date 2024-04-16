import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ProjectFilter } from '../../../types/projects';
import styles from './styles.module.scss';

type Props = {
  title: string;
  gradient?: boolean;
  underlined?: boolean;
  filter?: ProjectFilter;
};

const Header = (props: Props) => {
  return (
    <div
      className={`${styles.container} ${props.underlined && styles.underlined}`}
    >
      <div className={`${props.gradient && styles.cloudyText}`}>
        {props.title}
      </div>

      {/* FILTER */}
      {props.filter && (
        <FormControl className={styles.filterSelect}>
          <InputLabel>{props.filter.label}</InputLabel>
          <Select
            onChange={(e) => {
              props.filter?.onFilter(e.target.value);
            }}
            value={props.filter?.value}
            label={props.filter?.label}
            className={styles.filterSelect}
          >
            {props.filter.options.map((option, index) => {
              return (
                <MenuItem value={option.value} key={index}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default Header;
