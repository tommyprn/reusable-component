import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import DateRangePicker from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: 'Components/DateRangePicker',
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const primary: Story = {
  render: (args) => {
    const [date, setDate] = useState({
      endDate: '',
      startDate: '',
    });

    return (
      <DateRangePicker
        {...args}
        endDate={date.endDate}
        required={false}
        setStartDate={(date: any) =>
          setDate((prevState) => {
            const newState = {
              ...prevState,
              startDate: date && dayjs(date)?.format('YYYY-MM-DD'),
            };
            return newState;
          })
        }
        setEndDate={(date: any) =>
          setDate((prevState) => {
            const newState = {
              ...prevState,
              endDate: date && dayjs(date)?.format('YYYY-MM-DD'),
            };
            return newState;
          })
        }
        startDate={date.startDate}
      />
    );
  },
};
