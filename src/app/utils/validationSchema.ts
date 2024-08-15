import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),

  sobreNome: Yup.string()
    .required('Sobrenome é obrigatório')
    .min(3, 'Sobrenome deve ter pelo menos 3 caracteres'),

  email: Yup.string()
    .required('Email é obrigatório')
    .email('Email inválido'),

  senha: Yup.string()
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[^a-zA-Z0-9]/, 'A senha deve conter pelo menos um caractere especial')
    .required('Senha é obrigatória'),

  confirmacaoSenha: Yup.string()
    .oneOf([Yup.ref('senha'), undefined], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória'),

  acceptedTerms: Yup.boolean()
    .oneOf([true], 'Você deve aceitar os termos e condições')
    .required('Você deve aceitar os termos e condições')
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Preencha seu Email.')
    .email('Email inválido'),
  senha: Yup.string()
    .required('Preencha sua senha.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});