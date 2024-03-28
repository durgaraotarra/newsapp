import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="grey.900" py={2}>
        <Typography variant='body1' color="white" align='center'>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
      </Box>
    </footer>
  );
}

export default Footer;
