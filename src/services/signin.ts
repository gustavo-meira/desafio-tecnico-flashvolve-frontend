import { api } from '../api';
import { setToken } from './token';

export const signin = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await api.post<{ accessToken: string }>('/signin', { email, password });
  
    const isOk = response.status === 200;
  
    if (isOk) {
      setToken(response.data.accessToken);
    }
  
    return isOk;
  } catch (error) {
    return false;
  }
};
