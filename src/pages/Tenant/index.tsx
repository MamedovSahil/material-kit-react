import PageHeader from 'src/components/pageHeader';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { TenantTable } from './components/tenantTable';
import { Iconify } from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';

const TenantPage = () => {
  const { t } = useTranslation();
  const routes = useRouter();
  return (
    <div className="p-5 px-7">
      <PageHeader title="Tenant">
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => routes.push('/create-tenant')}
        >
          Create Tenant
        </Button>
      </PageHeader>

      <TenantTable />
    </div>
  );
};

export default TenantPage;
