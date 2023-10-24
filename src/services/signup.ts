import { api } from '../api';
import { setToken } from './token';

type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const signup = async (params: SignUpParams): Promise<boolean> => {
  try {
    const response = await api.post<{ accessToken: string }>('/signup', params);
    
    const isOk = response.status === 201;
    
    if (isOk) {
      setToken(response.data.accessToken);
    }
    
    return isOk;
  } catch (error) {
    return false;
  }
};