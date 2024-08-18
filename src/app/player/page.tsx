'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, Grid, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import VideoPlayer from '../components/Video/VideoPlayer';
import playerContent from '../content/player.content.json';

const VideoPage: React.FC = () => {
  const course = playerContent.playerCursos.cursos[0];
  const [selectedAula, setSelectedAula] = useState(course.aulas[0]);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAulaClick = (aula: React.SetStateAction<{ id: string; nome: string; descricao: string; tipo: string; nivel: string; duracao: string; imagem: string; url: string; }>) => {
    setLoading(true);

    // Simulate loading time (e.g., fetching new video data)
    setTimeout(() => {
      setSelectedAula(aula);
      setLoading(false);
    }, 1500); // Adjust the delay as needed
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ height: '100vh', paddingTop: isMobile ? 2 : 10 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? 4 : 0,
            }}
          >
            {loading ? (
              <CircularProgress sx={{ color: 'white' }} />
            ) : (
              <Box sx={{ width: '100%', maxWidth: '90%' }}>
                <VideoPlayer />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              paddingLeft: isMobile ? 0 : 4,
            }}
          >
            <Typography sx={{ color: 'white'}} variant="h4" gutterBottom>
              {course.nome}
            </Typography>
            <Typography sx={{ color: 'white'}} variant="body1" gutterBottom>
              {course.descricao}
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <Typography sx={{ color: 'white'}} variant="h6">Rating: x</Typography>
            </Box>
            <Typography sx={{ color: 'white'}} variant="h6">Módulos do Curso</Typography>
            <Box
              sx={{
                marginBottom: 2,
                height: isMobile ? '40vh' : '28vh',
                overflowY: 'auto',
                padding: 2,
                borderRadius: 1,
              }}
            >
              <Box>
                {course.aulas.map((aula) => (
                  <Box
                    key={aula.id}
                    sx={{ marginBottom: 1, padding: 1, cursor: 'pointer' }}
                    onClick={() => handleAulaClick(aula)}
                  >
                    <Typography sx={{ color: 'white' }} variant="body1">{aula.nome}</Typography>
                    <Typography sx={{ color: 'white' }} variant="body2">{aula.descricao}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ marginBottom: 12 }}>
              <Typography sx={{ color: 'white'}} variant="h6" gutterBottom>Instrutor</Typography>
              <Typography sx={{ color: 'white'}} variant="body1">{course.professor}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoPage;
