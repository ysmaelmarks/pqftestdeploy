import React from 'react';
import { Typography, Link } from '@mui/material';

const Copyright: React.FC = (props: any) => (
  <Typography sx={{ color: 'white', marginTop:3 }} variant="body2" align="center" {...props}>
    {'Pra Quem Faz © '}
    <Link color="inherit" href="#">
      Termos de serviço
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
