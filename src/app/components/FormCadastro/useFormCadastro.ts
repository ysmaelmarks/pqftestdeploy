import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/validationSchema';
import { IFormInput } from '@/app/types/types';
import { useAuth } from '@/app/context/AuthContext';

export const useFormCadastro = () => {

  const router = useRouter();
  const { cadastrar } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    cadastrar(data.nome, data.sobreNome, data.email, data.senha);
    console.log(data);
    router.push('/Login');
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  };
};
