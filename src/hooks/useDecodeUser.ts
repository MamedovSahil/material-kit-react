import decode from 'jwt-decode';
import { useRef } from 'react';
import { ISystemUser } from 'src/types';

export const useDecodedUser = () => {
  const token = localStorage.getItem('dashboardToken');
  const decodedUser = useRef<ISystemUser>({
    email: '',
    id: '',
    username: '',
  });
  if (token && decodedUser.current) {
    decodedUser.current = decode<ISystemUser>(token);
  }
  return decodedUser.current;
};
