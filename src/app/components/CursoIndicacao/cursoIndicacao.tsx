import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface CursoIndicacaoProps {
  image: string;
  nomeCurso: string;
  nomeInstrutor: string;
  descricaoCurso: string;
}

const CursoIndicacao: React.FC<CursoIndicacaoProps> = ({ image, nomeCurso, nomeInstrutor, descricaoCurso }) => {

  const router = useRouter();
  const [iconColor, setIconColor] = useState('secondary.contrastText');

  const handleClick = () => {
    setIconColor(prevColor => prevColor === 'secondary.contrastText' ? 'error.main' : 'secondary.contrastText');
  };
  
  return (
    <Card sx={{ maxWidth: '100%', position: 'relative', backgroundColor: 'secondary.main', color: 'secondary.contrastText'}}>
        <CardMedia
            component="img"
            height="195"
            image={image}
            alt={nomeCurso}
        />
        <IconButton 
          sx={{position: 'absolute', top: 8, right: 10, borderRadius: 5}}
          onClick={handleClick}>
            <FavoriteIcon sx={{ color: [iconColor], fontSize: 38}}/>
        </IconButton>

        <CardContent sx={{color: 'secondary.contrastText'}}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {nomeCurso}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {nomeInstrutor}
            </Typography>
            <Typography variant="body2"sx={{ mb: 2 }}>
            {descricaoCurso}
            </Typography>
            <Button onClick={() => { router.push('/Login'); }} variant="contained" color="tertiary" fullWidth>
            Saiba mais!
            </Button>
      </CardContent>
    </Card>
  );
}

export default CursoIndicacao;