import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import Auth from '../services/auth';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<User>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(JSON.parse(user));
    }

    setLoading(false);
  }, []);

  async function signIn(email: string, password: string) {
    const response = await Auth.signIn(email, password);

    const { user, token } = response;

    setUser(user);

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    return user;
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
