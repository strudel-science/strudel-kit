import type { Meta, StoryObj } from '@storybook/react-vite';
import { Filters } from './Filters';
import { FilterContext } from '../FilterContext/FilterContext';
import { FilterField } from '../FilterField';
import { FilterGroup } from '../FilterGroup';

const meta = {
  title: 'Components/Filters',
  component: Filters,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    grouped: false,
  },
  render: (args) => (
    <FilterContext>
      <Filters {...args}>
        <FilterField
          field="name"
          label="Name"
          operator="contains"
          filterComponent="TextField"
        />
        <FilterField
          field="status"
          label="Status"
          operator="contains-one-of"
          filterComponent="CheckboxList"
          filterProps={{
            options: [
              { label: 'Active', value: 'active' },
              { label: 'Inactive', value: 'inactive' },
              { label: 'Pending', value: 'pending' },
            ],
          }}
        />
        <FilterField
          field="volume"
          label="Volume"
          tooltip="Volume calculated by workflow"
          units="mL"
          operator="between-inclusive"
          filterComponent="RangeSlider"
          filterProps={{
            min: 0,
            max: 1000,
          }}
        />
      </Filters>
    </FilterContext>
  ),
};

export const WithGroups: Story = {
  args: {
    grouped: false,
  },
  render: (args) => (
    <FilterContext>
      <Filters {...args}>
        <FilterGroup label="Basic Info" groupId="basic-info">
          <FilterField
            field="name"
            label="Name"
            operator="contains"
            filterComponent="TextField"
          />
          <FilterField
            field="status"
            label="Status"
            operator="contains-one-of"
            filterComponent="CheckboxList"
            filterProps={{
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
                { label: 'Pending', value: 'pending' },
              ],
            }}
          />
        </FilterGroup>
        <FilterGroup label="Metrics" groupId="metrics">
          <FilterField
            field="volume"
            label="Volume"
            tooltip="Volume calculated by workflow"
            units="mL"
            operator="between-inclusive"
            filterComponent="RangeSlider"
            filterProps={{
              min: 0,
              max: 1000,
            }}
          />
        </FilterGroup>
      </Filters>
    </FilterContext>
  ),
};