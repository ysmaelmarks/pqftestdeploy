'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CursoDestaque from './components/CursoDestaque/cursoDestaque';
import CursoIndicacao from './components/CursoIndicacao/cursoIndicacao';
import CarroselHome from './components/CarroselHome/carroselHome';
import content from './content/content.json';
import { useAuth } from './context/AuthContext';
import CursoDestaqueHomeUser from './components/CursoDestaqueHomeUser/cursoDestaqueHomeUser';
import CategoriaHomeUser from './components/CategoriaHomeUser/categoriaHomeUser';
import UltCursoUser from './components/UltCursoUser/ultCursoUser';

const {carrosselInicialTitle, carrosselInicialCursos } = content.carrosselInicial;
const { cursosMaisCompradosTitle, cursosMaisComprados } = content.cursosMaisComprados;
const { cursosLancamentosTitle, cursosLancamentos } = content.cursosLancamentos;
const { cursosRecomendadosTitle, cursosRecomendados} = content.cursosRecomendados;
const { indicacaoTitle, cursoIndicado } = content.cursoRecomendado;
const { categoriasTitle, categorias } = content.categoriasCurso;
const { ultimoCursoUserTitle, ultimoCursoUser } = content.ultimoCursoUser;

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  return (
    <Container maxWidth="lg">

      <Box
        sx={{
          width: '100%',
          textAlign: 'left',
          zIndex: 1000,
          py: 1,
          left: 0,
          margin: 0,
          marginBottom: 3
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '2.7rem',
            paddingBottom: '5px',
            px: '5%'
          }}
        >
          Faça o futuro acontecer!
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontSize: '1.1rem',
            marginTop: '7px',
            px: '5%'
          }}
        >
          A transformação que sua carreira precisa na palma das suas mãos!
        </Typography>
      </Box>

      {/* Exibe o botão "Matricule-se Já!" somente se o usuário não estiver autenticado */}
      {!isAuthenticated && (
        <Box>
          
          <Button onClick={() => { router.push('/Cadastro'); }} sx={{ justifyContent: 'center', marginBottom: 3, width: '100%', color: 'secondary.contrastText', borderRadius: 5 }} variant='contained' color='tertiary'>Matricule-se Já!</Button>
          <Box sx={{ marginBottom: 4 }}>
            <CarroselHome autoplay={true} slides={carrosselInicialCursos.map((carrosselInicialCurso, index) => (
              <CursoDestaque
                key={index}
                image={carrosselInicialCurso.image}
                title={carrosselInicialCurso.title}
                subtitle={carrosselInicialCurso.subtitle} />
            ))} />
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%',
                marginBottom: 1,
              }}
            >
              {indicacaoTitle}
            </Typography>

            <CursoIndicacao
              image={cursoIndicado.image}
              nomeCurso={cursoIndicado.nomeCurso}
              nomeInstrutor={cursoIndicado.nomeInstrutor}
              descricaoCurso={cursoIndicado.descricaoCurso}
            />
          </Box>

          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%',
                marginBottom: 1,
              }}
            >
              {cursosMaisCompradosTitle}
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: 'center' }}
            >
              {cursosMaisComprados.map((cursoMaisComprado) => (
                <Grid
                  item
                  key={cursoMaisComprado.title}
                  xs={6}
                  md={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <CursoDestaque image={cursoMaisComprado.image} title={cursoMaisComprado.title} subtitle={cursoMaisComprado.subtitle} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%',
                marginBottom: 1,
              }}
            >
              {categoriasTitle}
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {categorias.map((categoria) => (
                <Grid
                  item
                  key={categoria}
                  xs={2}
                  sm={4}
                  md={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    onClick={() => { router.push('/Login'); }}
                    fullWidth
                    sx={{
                      height: '100%',
                      backgroundColor: 'secondary.main',
                      color: 'secondary.contrastText',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: 'tertiary.main',
                      },
                    }}
                  >
                    {categoria}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ marginBottom: 10 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%',
                marginBottom: 1,
              }}
            >
              {cursosLancamentosTitle}
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: 'center' }}
            >
              {cursosLancamentos.map((cursoLancamento) => (
                <Grid
                  item
                  key={cursoLancamento.title}
                  xs={6}
                  md={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <CursoDestaque image={cursoLancamento.image} title={cursoLancamento.title} subtitle={cursoLancamento.subtitle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>  
      )}

      {isAuthenticated && (
        <Box>
          <Box sx={{ marginBottom: 4 }}>
            <CarroselHome autoplay={true} slides={cursosRecomendados.map((cursoRecomendado, index) => (
                <CursoDestaqueHomeUser 
                  key={index}
                  id={cursoRecomendado.id}
                  image={cursoRecomendado.image}
                  professor={cursoRecomendado.professor}
                  professorImage={cursoRecomendado.professorImage}
                  curso={cursoRecomendado.curso}
                  duracao={cursoRecomendado.duracao}
                  avaliacao= {cursoRecomendado.avaliacao}/>
              ))} />
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%',
                marginBottom: 1,
              }}
            >
              Navegue pelas Categorias!
            </Typography>
            <Grid
              container
              spacing={1}
              sx={{ justifyContent: 'center' }}
            >
              {categorias.map((categoria) => (
                <Grid
                  item
                  key={categoria}
                  xs={3}
                  md={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <CategoriaHomeUser label={categoria}/>
                </Grid>
              ))}
            </Grid>
          </Box>
            
          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%',
                marginBottom: 1,
              }}
            >
              {ultimoCursoUserTitle}
            </Typography>
            <UltCursoUser
              id={ultimoCursoUser.id}
              image={ultimoCursoUser.image}
              curso={ultimoCursoUser.curso}
              progresso={ultimoCursoUser.progresso}
            ></UltCursoUser>
          </Box>
          <Button onClick={() => { router.push('/Construcao'); }} sx={{ justifyContent: 'center', marginBottom: 10, width: '100%', color: 'secondary.contrastText', borderRadius: 5 }} variant='contained' color='tertiary'>Veja todos seus cursos!</Button>
        </Box>
      )}
    </Container>
  );
}
