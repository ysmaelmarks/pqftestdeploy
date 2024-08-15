
export interface Course {
    title?: string;
    subtitle?: string;
    image: string;
}

export interface Content {
    novosCursos: {
        maintitle: string;
        courses: Course[];
    };
    cursosMaisComprados: {
        maintitle: string;
        courses: Course[];
    };
}

export interface IFormInput {
    nome: string;
    sobreNome: string;
    email: string;
    senha: string;
    confirmacaoSenha: string;
    acceptedTerms: boolean;
}

export interface ILoginFormInput {
    email: string;
    senha: string;
}