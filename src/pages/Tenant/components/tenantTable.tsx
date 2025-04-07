import { useMemo } from 'react';
import Card from '@mui/material/Card';
import { GridEventListener } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getAllTenantFn } from 'src/Api/tenant';
import { CustomTable } from 'src/components/Table';
import { useTranslation } from 'react-i18next';
import { getTenantColumns } from './tableColumns';

export const TenantTable = () => {
  const { t } = useTranslation();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {};
  const { data, isLoading } = useQuery({
    queryKey: ['getAllTenant'],
    queryFn: getAllTenantFn,
    refetchOnMount: false,
  });

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
        <CustomTable
          onRowClick={handleRowClick}
          columns={columns}
          rows={data?.data || []}
          loading={isLoading}
        />
      </Card>
    </>
  );
};
