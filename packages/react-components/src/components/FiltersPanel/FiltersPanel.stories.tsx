import type { Meta, StoryObj } from '@storybook/react-vite';
import { FiltersPanel } from './FiltersPanel';
import { FilterConfig } from '../../types/filters.types';
import { FilterContext } from '../FilterContext/FilterContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
    field: 'category',
    label: 'Category',
    tooltip: 'Type of natural disaster event',
    operator: 'contains-one-of',
    filterComponent: 'CheckboxList',
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
    field: 'volume',
    label: 'Volume',
    tooltip: 'Volume calculated by workflow',
    units: 'm³',
    operator: 'between-inclusive',
    filterComponent: 'RangeSlider',
    filterProps: {
      min: 0,
      max: 100,
      step: 1,
    },
  },
];

const filterConfigsWithDateRange: FilterConfig[] = [
  {
    field: 'category',
    label: 'Category',
    operator: 'contains-one-of',
    filterComponent: 'CheckboxList',
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FilterContext>
        <FiltersPanel {...args} />
      </FilterContext>
    </LocalizationProvider>
  ),
};

export const WithDateRangeField: Story = {
  args: {
    filterConfigs: filterConfigsWithDateRange,
  },
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FilterContext>
        <FiltersPanel {...args} />
      </FilterContext>
    </LocalizationProvider>
  ),
};