import { lazy } from 'react';

const HomePage = lazy(() => import('./Home'));
const TenantPage = lazy(() => import('./Tenant'));
const ManagerPage = lazy(() => import('./Manager'));
const SignInPage = lazy(() => import('./Auth'));
const CreateUpdateTenantPage = lazy(() => import('./Tenant/components/pages/CreateUpdateTenant'));

export { HomePage, SignInPage, TenantPage, ManagerPage, CreateUpdateTenantPage };
