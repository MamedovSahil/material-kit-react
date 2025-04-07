import { Box, Button, Typography } from '@mui/material';
import { ManagerTable } from './components/manegerTable';
import { useTranslation } from 'react-i18next';
import { Iconify } from 'src/components/iconify';
import CreateAccountModal from './components/createAccauntModal';
import { useState } from 'react';
import PageHeader from 'src/components/pageHeader';

const ManagerPage = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-5 px-7">
      <PageHeader title={t('manager')}>
        <Button
          onClick={() => setOpenModal(true)}
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          {t('addAccaunt')}
        </Button>
      </PageHeader>

      {/* <ManagerTable /> */}
      {/* <CreateAccountModal open={openModal} onClose={() => setOpenModal(false)} /> */}
    </div>
  );
};

export default ManagerPage;
