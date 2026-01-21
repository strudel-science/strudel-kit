import type { Meta, StoryObj } from '@storybook/react-vite';
import { RangeSlider } from './RangeSlider';
import { Box, BoxProps } from '@mui/material';

// Named wrapper component for better code display in Storybook
const BoxWrapper = (props: BoxProps) => <Box {...props} />;
BoxWrapper.displayName = 'Box';

const meta = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 5000,
  },
  render: (args) => (
    <BoxWrapper sx={{ width: 300 }}>
      <RangeSlider {...args} />
    </BoxWrapper>
  ),
};
