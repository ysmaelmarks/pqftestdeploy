"use client"

import { Button, Typography, Card, CardMedia, CardContent, IconButton, Box, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

interface CursoDestaqueHomeUserProps {
  id: string;
  image: string;
  professor: string;
  professorImage: string;
  curso: string;
  duracao: string;
  avaliacao: number;
}

const CursoDestaqueHomeUser: React.FC<CursoDestaqueHomeUserProps> = ({ id, image, professor, professorImage, curso, duracao, avaliacao }) => {

  const router = useRouter();
  const [iconColor, setIconColor] = useState('secondary.contrastText');

  const handleClick = () => {
    setIconColor(prevColor => prevColor === 'secondary.contrastText' ? 'error.main' : 'secondary.contrastText');
  };

  return (
    <Card sx={{ width: '100%', position: 'relative', backgroundColor: 'secondary.main', color: 'secondary.contrastText', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="195"
        image={image}
        alt={curso}
      />
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
        onClick={handleClick}
      >
        <BookmarkIcon sx={{ color: [iconColor], fontSize: 32 }}/>
      </IconButton>

      <CardContent sx={{ position: 'relative', paddingTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Box sx={{ 
          position: 'absolute',
          bottom: 'calc(100% - 22px)',
          left: 8,
          display: 'flex', 
          zIndex: 1, 
          alignItems: 'center', 
          backgroundColor: 'black', 
          padding: '5px 10px', 
          borderRadius: '20px' 
        }}>
          <Avatar
            src={professorImage}
            alt="Professor" 
            sx={{ width: 50, height: 50, marginRight: '10px' }}
          />
          <Typography variant="body1">{professor}</Typography>
        </Box>

        <Typography variant="h5" component="div" gutterBottom>
          {curso}
        </Typography>
        <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width:600px)': {
          '& .MuiSvgIcon-root': {
            fontSize: '1.0rem', 
          },
          '& .MuiTypography-body2': {
            fontSize: '0.7rem', 
          },
        },
      }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon />
            <Typography sx={{ mr: 1 }} variant="body2">{duracao}</Typography>
            <StarIcon />
            <Typography variant="body2">{avaliacao}</Typography>
          </Box>
          <Button onClick={() => { router.push('/player'); }} sx={{borderRadius: 5}} variant="contained" color="tertiary">
            Entre!
          </Button>
        </Box>
      </CardContent>
    </Card>




  );
};

export default CursoDestaqueHomeUser;