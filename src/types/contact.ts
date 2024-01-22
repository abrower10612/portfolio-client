import { TransitionProps } from '@mui/material/transitions';

export type Snack = {
  open: boolean;
  transition: React.ComponentType<
    TransitionProps & { children: React.ReactElement<any, any> }
  >;
};
