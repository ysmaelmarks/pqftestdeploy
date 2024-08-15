import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../utils/validationSchema';
import { ILoginFormInput } from '@/app/types/types';
import { useAuth } from '@/app/context/AuthContext';

export const useFormLogin = () => {

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState<'success' | 'error'>('success');

  const { login } = useAuth();

  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = data => {

    let checkLog = login(data.email, data.senha)
    if (checkLog == 1)
    {
      setToastMessage(`Seja Bem Vindo de volta!`);
      setToastSeverity('success');
      router.push('/');
    }
    else 
    {
      if (checkLog == 0)
      {
        setToastMessage('Usuário ou Senha Incorreta. Por favor, tente novamente.');
        setToastSeverity('error');
      }
      else
      {
        setToastMessage('Usuário não encontrado. Por favor, crie uma conta.');
        setToastSeverity('error');
      }
    }
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    toastOpen,
    toastMessage,
    toastSeverity,
    handleToastClose,

  };
};
