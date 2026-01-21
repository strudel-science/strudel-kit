import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrayWithPopover } from './ArrayWithPopover';
import { Box, BoxProps } from '@mui/material';

// Named wrapper component for better code display in Storybook
const BoxWrapper = (props: BoxProps) => <Box {...props} />;
BoxWrapper.displayName = 'Box';

const meta = {
  title: 'Components/ArrayWithPopover',
  component: ArrayWithPopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArrayWithPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    values: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  },
  render: (args) => (
    <BoxWrapper sx={{ width: 250, overflow: 'hidden' }}>
      <ArrayWithPopover {...args} />
    </BoxWrapper>
  ),
};