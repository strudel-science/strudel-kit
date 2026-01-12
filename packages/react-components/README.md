# @strudel-science/components

A React component library for scientific web applications.

## Installation

```bash
npm install @strudel-science/components
```

## Peer Dependencies

This library requires the following peer dependencies:

- `react` (^19.2.0)
- `react-dom` (^19.2.0)
- `@mui/material` (^7.3.6)
- `@mui/icons-material` (^7.3.6)
- `@mui/x-data-grid` (^8.22.0)
- `@mui/x-date-pickers` (^8.22.0)
- `@emotion/react` (^11.14.0)
- `@emotion/styled` (^11.14.1)
- `dayjs` (^1.11.19)

Install them with:

```bash
npm install react react-dom @mui/material @mui/icons-material @mui/x-data-grid @mui/x-date-pickers @emotion/react @emotion/styled dayjs
```

## Usage

Import components from the library:

```tsx
import { 
  ScientificDataGrid, 
  ChemicalFormula, 
  LabelValueTable,
  FilterContext,
  FiltersPanel
} from '@strudel-science/components';

function MyApp() {
  return (
    <div>
      <ChemicalFormula content="H2O" />
      <ScientificDataGrid data={myData} columns={myColumns} />
    </div>
  );
}
```

## Available Components

### Data Display
- **ScientificDataGrid** - Data grid with scientific notation support
- **LabelValueTable** - Simple label-value pair table
- **ArrayWithPopover** - Display arrays with expandable popover
- **CellWithPopover** - Table cell with popover details
- **ImageWrapper** - Responsive image wrapper
- **LinearMeter** - Progress meter component

### Filters
- **FilterContext** - Context provider for filters
- **FilterField** - Individual filter field
- **FilterGroup** - Group of related filters
- **Filters** - Main filters component
- **FiltersPanel** - Panel for filter controls
- **CheckboxList** - Checkbox list filter
- **RangeSlider** - Range slider filter

### Scientific
- **ChemicalFormula** - Render chemical formulas with proper formatting

## Types

The library also exports TypeScript types:

```tsx
import type { 
  FilterConfig, 
  DataFilter, 
  FilterOperator,
  FilterComponent,
  FilterValue,
  DataCard 
} from '@strudel-science/components';
```

## Utilities

Utility functions for chemical formulas and filtering:

```tsx
import { 
  VALID_ELEMENTS, 
  ELEMENTS_REGEX, 
  ELEMENTS_SPLIT_REGEX,
  hasValue,
  rangeHasValue 
} from '@strudel-science/components';
```

## Building the Library

```bash
npm run build
```

This will generate the library bundle in the `dist/` directory.

## Development

Run Storybook for component development:

```bash
npm run storybook
```

## License

See LICENSE file for details.
