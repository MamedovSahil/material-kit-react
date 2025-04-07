import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { http } from 'src/helpers/http';
import { useRouter } from 'src/routes/hooks';
import { ICreateAccaunt, ILogin } from './types';

const login = async (values: ILogin) => {
  try {
    const res = await http.post('/Account/login', values);
    return res.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: login,
    onMutate: () => {},
    onSuccess: (data) => {
      localStorage.setItem('dashboardToken', data.data);
      router.push('/');
    },
    onError: () => {
      toast.error('Произошла ошибка при входе в систему.');
    },
  });

  return mutation;
};

const createAccaunt = async (values: ICreateAccaunt) => {
  try {
    const res = await http.post('/Account', values);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const useCreateAccaunt = () => {
  const mutation = useMutation({
    mutationFn: createAccaunt,
    onError: () => {
      toast.error('Произошла ошибка');
    },
    onSuccess: () => {
      toast.success('Добавлено успешно');
    },
  });

  return mutation;
};
