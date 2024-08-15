'use client';

import * as React from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, OutlinedInput, FormControl, FormHelperText } from '@mui/material';
import { useFormCadastro } from './useFormCadastro';
import Copyright from '../Copyright/Copyright';

const FormCadastro: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormCadastro();

  return (
    <Container component="main" maxWidth="xs" sx={{ color: 'secondary.contrastText', borderRadius: 2, mb: 10 }}>
      <CssBaseline />
      <Typography component="h1" variant="h4" align="center" sx={{ marginTop: 5 }}>
        Registre-se!
      </Typography>
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'secondary.main',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl error={!!errors.nome} fullWidth>
                  <OutlinedInput
                    id="nome"
                    required
                    autoComplete="given-name"
                    autoFocus
                    {...register('nome')}
                    sx={{ bgcolor: "white", borderRadius:0.8}}
                    placeholder="Nome"
                  />
                  <FormHelperText>{errors.nome?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={!!errors.sobreNome} fullWidth>
                  <OutlinedInput
                    id="sobrenome"
                    required
                    autoComplete="family-name"
                    autoFocus
                    {...register('sobreNome')}
                    sx={{ bgcolor: "white", borderRadius:0.8}}
                    placeholder="Sobrenome"
                  />
                  <FormHelperText>{errors.sobreNome?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={!!errors.email} fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <FormControl error={!!errors.senha} fullWidth>
                  <OutlinedInput
                    type="password"
                    id="password"
                    required
                    autoComplete="new-password"
                    autoFocus
                    {...register('senha')}
                    sx={{ bgcolor: "white", borderRadius:0.8}}
                    placeholder="Senha"
                  />
                  <FormHelperText>{errors.senha?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={!!errors.confirmacaoSenha} fullWidth>
                  <OutlinedInput
                    type="password"
                    id="confirmationpassword"
                    required
                    autoComplete="new-password"
                    autoFocus
                    {...register('confirmacaoSenha')}
                    sx={{ bgcolor: "white", borderRadius:0.8}}
                    placeholder="Confirme sua senha"
                  />
                  <FormHelperText>{errors.confirmacaoSenha?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('acceptedTerms')}
                    sx={{
                      color: '#f50057',
                      '&.Mui-checked': { color: '#f50057' },
                    }}
                  />
                }
                label="Estou de acordo com os termos e condições previstos em lei, aplicam-se T&C"
              />
              {errors.acceptedTerms && (
                <FormHelperText error>{errors.acceptedTerms.message}</FormHelperText>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="tertiary"
            sx={{ mt: 3, mb: 2, borderRadius: 5 }}
          >
            Cadastrar
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link sx={{ color: 'white' }} href="/Login" variant="inherit">
                Já possui uma conta? Entre aqui!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};

export default FormCadastro;
