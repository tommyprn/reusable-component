// src/components/BaseTable/BaseTable.stories.tsx
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import BaseTable from './BaseTable';

const meta: Meta<typeof BaseTable> = {
  component: BaseTable,
  title: 'Components/BaseTable',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseTable>;

const mockRows: GridRowsProp = [
  {
    id: 1,
    brand: { name: 'Toyota' },
    model: { name: 'Avanza' },
    variant: { name: 'G' },
    code: { name: 'AB123' },
    year: 2020,
    license_plate: 'B123XYZ',
    vin: '1234567890ABCDEFG',
  },
  {
    id: 2,
    brand: { name: 'Honda' },
    model: { name: 'Jazz' },
    variant: { name: 'RS' },
    code: { name: 'CD456' },
    year: 2018,
    license_plate: 'D456ABC',
    vin: 'ABCDEFG1234567890',
  },
];

const mockColumns: GridColDef[] = [
  {
    field: 'brand',
    headerName: 'Brand',
    flex: 1,
    renderCell: (params) => <p>{params.row.brand?.name ?? '-'}</p>,
  },
  {
    field: 'model',
    headerName: 'Model',
    flex: 1,
    renderCell: (params) => <p>{params.row.model?.name ?? '-'}</p>,
  },
  {
    field: 'year',
    headerName: 'Year',
    flex: 0.5,
    renderCell: (params) => <p>{params.row.year ?? '-'}</p>,
  },
];

export const Primary: Story = {
  render: (args) => {
    const [query, setQuery] = useState({ page: 1, limit: 10 });

    return (
      <BaseTable
        {...args}
        rows={mockRows}
        columns={mockColumns}
        meta={2}
        setQuery={setQuery}
        emptyText='No data available'
        isFetching={false}
      />
    );
  },
};

export const NoData: Story = {
  render: (args) => {
    const [query, setQuery] = useState({ page: 1, limit: 10 });

    return (
      <BaseTable
        {...args}
        rows={[]}
        columns={mockColumns}
        meta={2}
        setQuery={setQuery}
        emptyText='No data available'
        isFetching={false}
      />
    );
  },
};
