import type { Meta, StoryObj } from '@storybook/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import BaseDatePicker from './BaseDatePicker';

const meta: Meta<typeof BaseDatePicker> = {
  title: 'Components/BaseDatePicker',
  component: BaseDatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseDatePicker>;

export const Normal: Story = {
  render: (args) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BaseDatePicker {...args} placeholder='DD-MMM-YYYY' />
      </LocalizationProvider>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BaseDatePicker {...args} placeholder='DD-MMM-YYYY' disabled />
      </LocalizationProvider>
    );
  },
};
