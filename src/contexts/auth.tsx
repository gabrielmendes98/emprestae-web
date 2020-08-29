import React, { createContext, useState, useEffect } from 'react';
import Auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      setUser(JSON.parse(user));
    }
  }, []);

  async function signIn(email: string, password: string) {
    const response = await Auth.signIn(email, password);

    const { user, token } = response;

    setUser(user);

    localStorage.setItem('customer', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('customer');
    localStorage.removeItem('token');
  }

  return <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
