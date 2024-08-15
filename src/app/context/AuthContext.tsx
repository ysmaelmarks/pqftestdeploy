'use client'

import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react';

interface User {
  nome: string;
  sobreNome: string;
  email: string;
  senha: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  cadastrar: (nome: string, sobreNome: string, email: string, senha: string) => void;
  login: (email: string, senha: string) => number;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const logoutIndicator = localStorage.getItem('logout');

    if (storedUser && !logoutIndicator) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
      localStorage.removeItem('logout');  // Remove o indicador de logout ao logar
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  const cadastrar = (nome: string, sobreNome: string, email: string, senha: string) => {
    const newUser: User = { nome, sobreNome, email, senha };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email: string, senha: string) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      if (parsedUser.email === email && parsedUser.senha === senha) {
        setUser(parsedUser);
        return 1;
      } else {
        return 0;
      }
    } else {
      return -1;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('logout', 'true'); // Adiciona um indicador de logout
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, cadastrar, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
