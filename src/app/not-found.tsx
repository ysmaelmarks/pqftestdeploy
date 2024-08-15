'use client'
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
 
export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [router]);
  
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography sx={{ color: 'white' }} variant="h4">404 - Essa página não existe</Typography>
        <Typography sx={{ color: 'white' }} variant="body1">Você será redirecionado para a Home em 5 segundos...</Typography>
      </Box>
    );
}