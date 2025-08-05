import type { Meta, StoryObj } from '@storybook/react';
import BaseButton from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  title: 'Components/BaseButton',
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  args: {
    title: 'Button',
    color: 'primary',
    size: 'xs',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Button',
    color: 'secondary',
    textColor: 'black',
    size: 'sm',
  },
};

export const Danger: Story = {
  args: {
    title: 'Delete',
    color: 'danger',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Button',
    disabled: true,
    size: 'lg',
    loading: true,
  },
};

export const CustomSize: Story = {
  args: {
    title: 'Button',
    size: 'xl',
  },
};
