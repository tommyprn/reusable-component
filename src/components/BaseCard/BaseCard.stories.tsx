import type { Meta, StoryObj } from '@storybook/react';
import BaseCard from './BaseCard';

const meta: Meta<typeof BaseCard> = {
  component: BaseCard,
  title: 'Components/BaseCard',
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof BaseCard>;

export const primary: Story = {
  render: (args) => {
    return (
      <BaseCard {...args}>
        <p>Hello World!</p>
      </BaseCard>
    );
  },
};

export const elevate: Story = {
  render: (args) => {
    return (
      <BaseCard {...args} shadow>
        <p>Hello World!</p>
      </BaseCard>
    );
  },
};

export const bordered: Story = {
  render: (args) => {
    return (
      <BaseCard {...args} border>
        <p>Hello World!</p>
      </BaseCard>
    );
  },
};
