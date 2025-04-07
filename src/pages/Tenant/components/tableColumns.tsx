import { GridColumns } from '@mui/x-data-grid';
import TableActionsButton from 'src/components/tableActionsButton';
import { ITenant } from '../types';

export const getTenantColumns = (
  handleEdit: (id: string) => void,
  handleDelete: (id: string) => void
): GridColumns<ITenant> => [
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'personalCount',
    headerName: 'Personal Count',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'filialCount',
    headerName: 'Filial Count',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'translations',
    headerName: 'Translations',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'usingPlan',
    headerName: 'Using Plan',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'recordSetings',
    headerName: 'Record Setings',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'actions',
    headerName: '',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: ({ row }) => (
      <TableActionsButton
        handleEdit={() => handleEdit(row.id)}
        handleDelet={() => handleDelete(row.id)}
      />
    ),
  },
];
