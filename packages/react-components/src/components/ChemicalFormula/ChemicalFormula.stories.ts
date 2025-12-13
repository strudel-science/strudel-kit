import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChemicalFormula } from './ChemicalFormula';

const meta = {
  title: 'Components/ChemicalFormula',
  component: ChemicalFormula,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChemicalFormula>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'H2O',
  },
};

export const WithComplexSubscripts: Story = {
  args: {
    content: 'LiFexMn2-xO4',
  },
};
