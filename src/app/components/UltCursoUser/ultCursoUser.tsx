"use client"

import { Typography, Card, CardMedia, CardContent, IconButton, Box, LinearProgress, CardActionArea, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';

interface CursoDestaqueHomeUserProps {
  id: string;
  image: string;
  curso: string;
  progresso: number;
}

const UltCursoUser: React.FC<CursoDestaqueHomeUserProps> = ({ id, image, curso, progresso }) => {

  const router = useRouter();
  const [iconColor, setIconColor] = useState('secondary.contrastText');

  const handleClick = () => {
    setIconColor(prevColor => prevColor === 'secondary.contrastText' ? 'error.main' : 'secondary.contrastText');
  };

  return (
    <Card sx={{ display: 'flex', position: 'relative', backgroundColor: 'secondary.main', color: 'secondary.contrastText' }}>
      <CardActionArea onClick={() => { router.push('/player'); }} sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <CardMedia
          component="img"
          sx={{ 
            width: 172, 
            aspectRatio: '1 / 1',
            objectFit: 'cover',
          }}
          image={image}
          alt={curso}
        />
        
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2 }}>
          <IconButton 
            sx={{
              position: 'absolute', 
              top: 8, 
              right: 10, 
              borderRadius: 5, 
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: 'black'
              }
            }}
            onClick={(e) => { 
              e.stopPropagation(); 
              handleClick();
            }}
          >
            <BookmarkIcon sx={{ color: iconColor, fontSize: 32 }}/>
          </IconButton>

          <CardContent sx={{ padding: 0, marginTop: 'auto', paddingTop: '48px' }}>
            <Box sx={{ marginTop: 'auto' }}>
              <Typography variant="h5" component="div" gutterBottom>
                {curso}
              </Typography>

              <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ marginRight: 1 }}>
                    Progresso: {progresso}%
                  </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <LinearProgress 
                    variant="determinate" 
                    value={progresso} 
                    sx={{ 
                      flexGrow: 1, 
                      height: 10, 
                      borderRadius: 5,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'tertiary.main',
                      }
                    }} 
                  />
                </Grid>

              </Grid>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default UltCursoUser;
