import type { Meta, StoryObj } from '@storybook/react-vite';
import { CellWithPopover } from './CellWithPopover';
import { Box, BoxProps } from '@mui/material';

// Named wrapper component for better code display in Storybook
const BoxWrapper = (props: BoxProps) => <Box {...props} />;
BoxWrapper.displayName = 'Box';

const meta = {
  title: 'Components/CellWithPopover',
  component: CellWithPopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CellWithPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BoxWrapper sx={{ width: 250, height: 30, overflow: 'hidden' }}>
      <CellWithPopover>
        This is a very long content that should trigger the popover when it overflows the cell.
      </CellWithPopover>
    </BoxWrapper>
  ),
};