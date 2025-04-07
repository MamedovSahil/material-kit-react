import { DataGrid, GridColumns, ruRU } from '@mui/x-data-grid';
import { FC } from 'react';

interface Props {
  columns: GridColumns;
  rows: any[];
  height?: string;
  loading: boolean;
  page?: number;
  pageSize?: number;
  rowCount?: number;
  onPageChange?: (newPage: number) => void;
  [rest: string]: any;
}

export const CustomTable: FC<Props> = ({
  columns,
  rows,
  height,
  loading,
  page,
  pageSize,
  rowCount,
  onPageChange,
  ...rest
}) => {
  return (
    <div className="h-[calc(100vh-150px)] w-full">
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        rows={rows}
        columns={columns}
        autoPageSize
        className="custom-datagrid"
        {...rest}
      />
      {/* <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        rows={rows}
        columns={columns}
        page={page}
        pageSize={pageSize}
        // rowsPerPageOptions={[pageSize]}
        rowCount={rowCount}
        paginationMode="server"
        onPageChange={(params) => {
          if (onPageChange) {
            onPageChange(params);
          }
        }}
        {...rest}
        className="custom-datagrid"
      /> */}
    </div>
  );
};
