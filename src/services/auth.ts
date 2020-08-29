import api from './api';

class Auth {
  async signIn(email: string, password: string) {
    const response = await api.post('session/user', { email, password });
    return response.data;
  }

  async signUp(name: string, email: string, password: string) {
    const response = await api.post('users', { name, email, password });
    return response.data;
  }
}

export default new Auth();
