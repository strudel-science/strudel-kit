import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinearMeter } from './LinearMeter';
import { Box, BoxProps } from '@mui/material';

// Named wrapper component for better code display in Storybook
const BoxWrapper = (props: BoxProps) => <Box {...props} />;
BoxWrapper.displayName = 'Box';

const meta = {
  title: 'Components/LinearMeter',
  component: LinearMeter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinearMeter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 75,
  },
  render: (args) => (
    <BoxWrapper sx={{ width: '200px' }}>
      <LinearMeter {...args} />
    </BoxWrapper>
  ),
};
