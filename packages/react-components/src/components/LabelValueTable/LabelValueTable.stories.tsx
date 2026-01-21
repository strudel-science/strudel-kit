import type { Meta, StoryObj } from '@storybook/react-vite';
import { LabelValueTable } from './LabelValueTable';

const meta = {
  title: 'Components/LabelValueTable',
  component: LabelValueTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelValueTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [
      { label: 'Gene Symbol', value: 'LOC100737821' },
      { label: 'Gene type', value: 'protein coding' },
      { label: 'Organism', value: 'Sus scrofa' },
    ],
  },
};

export const WithLabelWidth: Story = {
  args: {
    rows: [
      { label: 'Gene Symbol', value: 'LOC100737821' },
      { label: 'Gene type', value: 'protein coding' },
      { label: 'Organism', value: 'Sus scrofa' },
    ],
    labelWidth: 200,
  },
};
