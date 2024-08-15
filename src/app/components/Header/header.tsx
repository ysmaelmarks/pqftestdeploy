import React from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from '@mui/material/Link';
import Image from "next/image";
import { useLayout } from '../../context/LayoutContext';
import { useAuth } from '@/app/context/AuthContext';

const Header = () => {
  
  const router = useRouter();
  const { showHeader } = useLayout();
  const { isAuthenticated, logout } = useAuth();

  if (!showHeader) {
    return null;
  }

  const handleLogout = () => {
    logout(); // Executa a função de logout
    router.push('/'); // Redireciona o usuário para a homepage após logout
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{
        width: '100%',
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
        py: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                width={175}
                height={30}
                alt="logo"
              />
            </Link>
          </Typography>
        </Box>
        {isAuthenticated ? (
          <Button onClick={handleLogout} variant='contained' color='tertiary'>
            Sair
          </Button>
        ) : (
          <Button onClick={() => { router.push('/Login'); }} variant='contained' color='tertiary'>
            Entre
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
