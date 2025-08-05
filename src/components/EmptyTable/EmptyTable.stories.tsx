import type { Meta, StoryObj } from '@storybook/react';
import EmptyTable from './EmptyTable';

const meta: Meta<typeof EmptyTable> = {
  component: EmptyTable,
  title: 'Components/EmptyTable',
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof EmptyTable>;

export const Primary: Story = {
  args: {
    text: 'No Data Available Right Now',
  },
};
