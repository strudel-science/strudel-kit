import type { Meta, StoryObj } from '@storybook/react-vite';
import { FiltersPanel } from './FiltersPanel';
import { FilterConfig } from '../../types/filters.types';
import { FilterContext } from './FilterContext';

const meta = {
  title: 'Components/FiltersPanel',
  component: FiltersPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FiltersPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const filterConfigs: FilterConfig[] = [
  {
    /**
     * Exact name of the property field in the data to filter on.
     */
    field: 'category',
    /**
     * Text to display in the label for the filter.
     */
    label: 'Category',
    operator: 'contains-one-of',
    /**
     * The kind of filter component and function to use. Must be "CheckboxList", "Slider", or "data range".
     */
    filterComponent: 'CheckboxList',
    /**
     * Extra options to pass to the filter based on the filter type.
     */
    filterProps: {
      options: [
        {
          label: 'Groundwater',
          value: 'Groundwater',
        },
        {
          label: 'Fires',
          value: 'Fires',
        },
        {
          label: 'Floods',
          value: 'Floods',
        },
        {
          label: 'Earthquakes',
          value: 'Earthquakes',
        },
      ],
    },
  },
  {
    field: 'tags',
    label: 'Tags',
    operator: 'contains-one-of',
    filterComponent: 'CheckboxList',
    filterProps: {
      options: [
        {
          label: 'Boreal forest',
          value: 'Boreal forest',
        },
        {
          label: 'Carbon and greenhouse gas emissions',
          value: 'Carbon and greenhouse gas emissions',
        },
        {
          label: 'Ecology',
          value: 'Ecology',
        },
      ],
    },
  },
  {
    field: 'publication_date',
    label: 'Publication Date',
    operator: 'between-dates-inclusive',
    filterComponent: 'DateRange',
  },
];

export const Default: Story = {
  args: {
    filterConfigs: filterConfigs,
  },
  render: (args) => (
    <FilterContext>
      <FiltersPanel {...args} />
    </FilterContext>
  ),
};