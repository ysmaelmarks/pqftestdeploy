// app/Construcao/UnderConstruction.tsx
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function UnderConstruction() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <ConstructionIcon sx={{ color: 'white', width: '50px', height:'50px' }}></ConstructionIcon>
            <Typography sx={{ color: 'white' }} variant="h4">Página em construção</Typography>
            <Typography sx={{ color: 'white' }} variant="body1">Você será redirecionado para a homepage em 5 segundos.</Typography>
        </Box>
    );
}
