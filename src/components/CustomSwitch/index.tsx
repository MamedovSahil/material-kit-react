import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

export const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 49,
  height: 22,
  padding: 0,
  margin: '0 8px',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(27px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#409EFF',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 18,
    height: 18,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
  },
}));
