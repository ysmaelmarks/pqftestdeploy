import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

interface sucessToastProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: AlertProps['severity'];
}

const SucessToast: React.FC<sucessToastProps> = ({ open, onClose, message, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={3500} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SucessToast;
