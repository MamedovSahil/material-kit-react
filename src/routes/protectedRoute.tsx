import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return Boolean(localStorage.getItem('dashboardToken'));
};

export const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/sign-in" replace />;
};
