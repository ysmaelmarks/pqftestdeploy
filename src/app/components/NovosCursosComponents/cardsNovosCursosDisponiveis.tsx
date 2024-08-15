// cardNovoCurso.tsx
'use client'
import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Course } from '@/app/types/types';
import { useRouter } from 'next/navigation';

const CardNovoCurso: React.FC<Course> = ({ title, subtitle, image }) => {
    const router = useRouter();
    return (
        <Box display="grid" justifyContent="center" alignItems="center">
            <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', height: '130px', width: '330px', backgroundColor: '#161616' }}>
                <CardActionArea onClick={() => { router.push('/player'); }}>
                <CardMedia
                    sx={{ height: '90px', width: '90px', marginTop: '25px', marginRight: '20px' }}
                    component="img"
                    image={image}
                    title={title}
                />
                </CardActionArea>
                <Box display="grid" gridTemplateRows="1fr auto" alignItems="center">
                    <CardContent>
                        <Typography sx={{ color: 'white', marginTop: '30px' }} variant='h6'>{title}</Typography>
                        <Typography sx={{ color: 'white' }} variant='subtitle2'>{subtitle}</Typography>
                    </CardContent>
                </Box>
            </Card>
            <Box sx={{ height: '1px', width: '100%', backgroundColor: '#2B2B2B' }} />
        </Box>
    );
}

export default CardNovoCurso;