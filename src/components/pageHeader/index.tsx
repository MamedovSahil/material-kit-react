import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
}

const PageHeader: FC<Props> = ({ title, children }) => {
  return (
    <Box display="flex" alignItems="center" mb={5}>
      <Typography variant="h4" flexGrow={1}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default PageHeader;
