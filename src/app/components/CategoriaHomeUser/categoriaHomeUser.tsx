import React from 'react';
import { Button, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import { useRouter } from 'next/navigation';

const CategoriaHomeUser: React.FC<{ label: string }> = ({ label }) => {
  const router = useRouter();
  return (
    <Button 
      onClick={() => { router.push('/Construcao'); }}
      variant="outlined" 
      sx={{
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        width: "100%", 
        height: "100%",  
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 2,
        padding: 0,
        border: '1.5px solid', 
        borderColor: 'secondary.main',
        '&:hover': {
          borderColor: 'secondary.main', 
        }}
      }
    >
      <CategoryIcon sx={{ fontSize: 36 }} />
      <Typography variant="caption" sx={{ marginTop: 1 }}>
        {label}
      </Typography>
    </Button>
  );
};

export default CategoriaHomeUser;
