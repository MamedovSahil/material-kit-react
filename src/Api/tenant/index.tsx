import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { http } from 'src/helpers/http';
export const getAllTenantFn = async () => {
  try {
    const res = await http.get('/Tenant');
    return res.data;
  } catch (error) {
    throw new Error('Tenant failed');
  }
};

export const getAllBusinessTypesFn = async () => {
  try {
    const res = await http.get('/Tenant/business-types');
    return res.data;
  } catch (error) {
    throw new Error('Failed');
  }
};
