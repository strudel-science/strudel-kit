import type { Meta, StoryObj } from '@storybook/react-vite';
import { FiltersPanel } from './FiltersPanel';
import { FilterConfig } from '../types/filters.type';
import { FilterContext } from '../context/FilterContext';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const meta = {
  title: 'Components/FiltersPanel',
  component: FiltersPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# FiltersPanel

The \`FiltersPanel\` component provides a standardized interface for building data filtering interfaces in STRUDEL applications.

## Overview

This component renders a collapsible panel containing filter controls. It manages filter state and provides apply/reset functionality.

## Basic Usage

\`\`\`tsx
import { FiltersPanel } from '@strudel/react-components';

function MyComponent() {
  const handleApply = (filterValues) => {
    console.log('Applied filters:', filterValues);
  };

  return (
    <FiltersPanel
      filters={filterConfig}
      onApply={handleApply}
    />
  );
}
\`\`\`

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`filters\` | \`FilterConfig[]\` | Yes | Array of filter configurations |
| \`onApply\` | \`(values: any) => void\` | Yes | Called when user applies filters |
| \`onReset\` | \`() => void\` | No | Called when filters are reset |
| \`title\` | \`string\` | No | Panel title (default: "Filters") |
| \`collapsible\` | \`boolean\` | No | Whether panel can collapse (default: true) |

## Filter Configuration

Each filter object should have:

\`\`\`typescript
interface FilterConfig {
  id: string;           // Unique identifier
  label: string;        // Display label
  type: 'text' | 'select' | 'date' | 'range';
  options?: string[];   // For select type
  defaultValue?: any;   // Initial value
}
\`\`\`

## Example with Multiple Filter Types

\`\`\`tsx
const filters = [
  { id: 'search', label: 'Search', type: 'text' },
  { id: 'category', label: 'Category', type: 'select', options: ['A', 'B', 'C'] },
  { id: 'date', label: 'Date Range', type: 'range' }
];

<FiltersPanel filters={filters} onApply={handleApply} />
\`\`\`

## Accessibility

- Keyboard navigable (Tab, Enter, Escape)
- ARIA labels for screen readers
- Focus management when panel opens/closes
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FiltersPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const filterConfigs: FilterConfig[] = [
  {
    field: 'category',
  },
];