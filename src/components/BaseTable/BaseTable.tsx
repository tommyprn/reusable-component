import type { Dispatch, SetStateAction } from 'react';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { cn } from '../../utils/cn';
import { DataGrid } from '@mui/x-data-grid';

// component
import EmptyTable from '../EmptyTable/EmptyTable';
// import FilterDialog from '../order/filter-dialog';
// import BaseSearchInput from './base-search-input';

// icon

import './BaseTable.css';

interface TableProps {
  rows: GridRowsProp;
  meta: number | undefined;
  columns: GridColDef[];
  setQuery: Dispatch<SetStateAction<any>>;
  emptyText: string;
  classname?: string;
  isFetching: boolean;
  onRowClick?: (val: any) => void;
  hideFooter?: boolean;
  disableRowClick?: boolean;
}

function BaseTable({
  rows,
  meta,
  columns,
  setQuery,
  classname,
  emptyText,
  onRowClick,
  hideFooter,
  isFetching,
  disableRowClick = false,
}: TableProps) {
  return (
    <div
      className={cn(
        'bg-white flex flex-col gap-4 rounded-lg p-4 max-w-[calc(100dvw-320px)]',
        classname
      )}
    >
      <DataGrid
        disableColumnMenu
        // disableColumnResize
        rows={rows}
        loading={isFetching}
        columns={columns as GridColDef[]}
        rowCount={meta}
        rowHeight={60}
        onRowClick={(val) => (onRowClick ? onRowClick(val.row) : null)}
        paginationMode='server'
        pageSizeOptions={[10, 20, 50, 100]}
        hideFooterPagination={hideFooter}
        disableRowSelectionOnClick={disableRowClick}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 0,
            },
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        slots={{
          noRowsOverlay: () => <EmptyTable text={emptyText} />,
          noResultsOverlay: () => <EmptyTable text={emptyText} />,
        }}
        className={cn('[--unstable_DataGrid-radius:0px]')}
        onPaginationModelChange={(pagination) =>
          setQuery({ page: pagination.page + 1, limit: pagination.pageSize })
        }
      />
    </div>
  );
}

export default BaseTable;
