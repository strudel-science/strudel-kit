import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxList } from './CheckboxList';

const meta = {
  title: 'Components/CheckboxList',
  component: CheckboxList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    values: ['option1'],
  },
};