import api from './api';

interface Response {
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  token: string;
}

class Auth {
  async signIn(email: string, password: string): Promise<Response> {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  }

  async signUp(name: string, email: string, password: string) {
    const response = await api.post('/users', { name, email, password });
    return response.data;
  }
}

export default new Auth();
