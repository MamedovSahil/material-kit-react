import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GridEventListener } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getAllTenantFn } from 'src/Api/tenant';
import { getTenantColumns } from './tableColumns';
import CreateAccountModal from './createAccauntModal';
import { CustomTable } from 'src/components/Table';
import { useTranslation } from 'react-i18next';

export const ManagerTable = () => {
  const { t } = useTranslation();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {};
  const [openModal, setOpenModal] = useState(false);
  // const { data, isLoading } = useQuery({
  //   queryKey: ['getAllTenant'],
  //   queryFn: getAllTenantFn,
  //   refetchOnMount: false,
  // });

  const handleEdit = (id: string) => {
    console.log(id, 'id');
  };

  const handleDelete = (id: string) => {
    console.log(id, 'id');
  };

  const columns = useMemo(
    () => getTenantColumns(handleEdit, handleDelete),
    [handleEdit, handleDelete]
  );

  return (
    <>
      <Card>
        {/* <CustomTable
          onRowClick={handleRowClick}
          columns={columns}
          rows={data?.data || []}
          loading={isLoading}
        /> */}
      </Card>
      <CreateAccountModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};
