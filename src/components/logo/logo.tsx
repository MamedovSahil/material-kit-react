import Box from '@mui/material/Box';
import { FC } from 'react';
import { RouterLink } from 'src/routes/components';

export type LogoProps = {
  href?: string;
  className?: string;
};

export const Logo: FC<LogoProps> = ({ href = '/', className }) => {
  return (
    <Box component={RouterLink} href={href} className={className} aria-label="Logo">
      <img src="https://cdn.matrixcrm.ru/front/svg/logo.svg" alt="Matrix CRM" />
    </Box>
  );
};
