'use client';

import * as React from 'react';
import { Container, Box, Typography, Button, Grid, Link, CssBaseline, OutlinedInput, FormControl, FormHelperText } from '@mui/material';
import { useFormLogin } from './useFormLogin';
import Copyright from '../Copyright/Copyright';
import SucessToast from '../Toasts/SucessToast';

const FormLogin: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    onSubmit,
    errors,
    toastOpen,
    toastMessage,
    toastSeverity,
    handleToastClose } = useFormLogin();

  return (
    <Container component="main" maxWidth="xs" sx={{ color: 'secondary.contrastText', borderRadius: 2, marginBottom: 10 }}>
      <CssBaseline />
      <Typography component="h1" variant="h4" align="center" sx={{ marginTop: 5 }}>
        Entrar
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'secondary.main',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

        <FormControl margin="normal" error={!!errors.email} fullWidth>
            <OutlinedInput
              id="email"
              required
              autoComplete="email"
              autoFocus
              {...register('email')}
              sx={{ bgcolor: "white", borderRadius:0.8}}
              placeholder="Endereço de Email"
            />
            <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>

        <FormControl margin="normal" error={!!errors.senha} fullWidth>
            <OutlinedInput
              id="password"
              type="password"
              required
              autoComplete="current-password"
              autoFocus
              {...register('senha')}
              sx={{ bgcolor: "white", borderRadius:0.8}}
              placeholder="Senha"
            />
            <FormHelperText>{errors.senha?.message}</FormHelperText>
        </FormControl>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="tertiary"
            sx={{ mt: 3, mb: 2, borderRadius: 5 }}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link sx={{ color: "white" }} href="/Construcao" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link sx={{ color: "white" }} href="/Cadastro" variant="body2">
                Cadastre-se
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
      <SucessToast 
        open={toastOpen}
        onClose={handleToastClose}
        message={toastMessage}
        severity={toastSeverity}></SucessToast>
    </Container>
  );
}

export default FormLogin;
