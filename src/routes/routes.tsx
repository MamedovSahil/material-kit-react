import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import { ProtectedRoute } from './protectedRoute';
import { HomePage, ManagerPage, TenantPage, SignInPage, CreateUpdateTenantPage } from 'src/pages';

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <CircularProgress />
  </Box>
);

export const dashboardRoutes = [
  { index: true, element: <HomePage /> },
  { path: 'manager', element: <ManagerPage /> },
  { path: 'tenant', element: <TenantPage /> },
  { path: 'create-tenant', element: <CreateUpdateTenantPage /> },
];

export function Router() {
  return useRoutes([
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: (
            <DashboardLayout>
              <Suspense fallback={renderFallback}>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          ),
          children: dashboardRoutes,
        },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },

    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);
}
