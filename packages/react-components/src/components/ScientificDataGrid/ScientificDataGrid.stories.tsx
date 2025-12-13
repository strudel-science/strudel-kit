import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScientificDataGrid } from './ScientificDataGrid';

const meta = {
  title: 'Components/ScientificDataGrid',
  component: ScientificDataGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScientificDataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { id: 1, name: 'Sample A', value: 42, formula: 'H2O' },
  { id: 2, name: 'Sample B', value: 3.14159, formula: 'C6H12O6' },
  { id: 3, name: 'Sample C', value: 7.898989, formula: 'NaCl' },
  { id: 4, name: 'Sample D', value: null, formula: 'CO2' },
];

const rowsWithArray = [
  { id: 1, name: 'Sample A', value: ['red', 'blue', 'green'], description: 'Amet labore tempor Lorem nulla ad amet ex mollit Lorem est.' },
  { id: 2, name: 'Sample B', value: ['red', 'yellow', 'orange', 'green'], description: 'Labore ullamco cupidatat velit tempor elit ullamco consequat aliqua tempor incididunt Lorem irure.' },
  { id: 3, name: 'Sample C', value: null, description: 'Eu sint est do reprehenderit irure reprehenderit anim non ad eiusmod dolor.' },
  { id: 4, name: 'Sample D', value: ['pink', 'purple', 'gold', 'crimson', 'silver'], description: 'Veniam proident cillum nisi ea reprehenderit dolor culpa et.' },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'value', headerName: 'Value', width: 100, decimals: 2, type: 'number' as const, units: 'grams',  },
  { field: 'formula', headerName: 'Formula', width: 200, isFormula: true },
];

const columnsWithSigFigs = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'value', headerName: 'Value', width: 100, sigFigs: 4, type: 'number' as const, units: 'grams',  },
  { field: 'formula', headerName: 'Formula', width: 200, isFormula: true },
];

const columnsWithArray = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'value', headerName: 'Value', width: 100, hasPopover: true,  },
  { field: 'description', headerName: 'Description', width: 200, hasPopover: true },
];

export const Default: Story = {
  args: {
    rows: rows,
    columns: columns,
  },
};

export const WithSigFigs: Story = {
  args: {
    rows: rows,
    columns: columnsWithSigFigs,
  },
};

export const WithPopovers: Story = {
  args: {
    rows: rowsWithArray,
    columns: columnsWithArray,
  },
};
