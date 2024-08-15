// layouts.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme/theme';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import { usePathname } from 'next/navigation';
import { AuthProvider } from './context/AuthContext';

const GlobalBodyStyles = styled('body')({
  backgroundColor: '#161616'
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const showHeader = pathname !== '/player';

  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalBodyStyles>
            <AuthProvider>
              {showHeader && <Header />}
              <Container component="main" sx={{ mt: 2, mb: 2 }}>
                {children}
              </Container>
              <Footer />
            </AuthProvider>
          </GlobalBodyStyles>
        </ThemeProvider>
      </body>
    </html>
  );
}
