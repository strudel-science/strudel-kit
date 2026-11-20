# STRUDEL shadcn Component Registry

A public [shadcn](https://ui.shadcn.com/docs/registry) component registry of React components for scientific web applications, built with **Material UI (MUI)**.

Unlike `@strudel-science/components`, this package is **not** published to npm. Instead, components are distributed through the shadcn CLI (`npx shadcn@latest add ...`) and copied directly into your repository so you own and can freely customize the source code.

- **MUI-based**: Built on `@mui/material`, `@mui/icons-material`, `@mui/x-data-grid`, and `@mui/x-date-pickers`.
- **No Tailwind, Radix, or Base UI**: Components do not use Tailwind CSS, Radix UI, or Base UI.
- **Automatic dependency resolution**: Installing a component automatically installs its required MUI npm dependencies and any internal STRUDEL components, types, or utilities it depends on.

## Setup in Your Project

### 1. Configure Path Aliases

Make sure your project resolves `@/*` to your source directory (for example, in `tsconfig.json` and `vite.config.ts`):

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 2. Add `components.json`

Create a `components.json` file at the root of your project with the `@strudel` registry configured.

> **Note:** You do **not** need Tailwind CSS or official shadcn/ui components installed in your project. The minimal `style`, `tailwind`, and `aliases.utils` fields below are only included because the shadcn CLI schema requires them. Leave `{name}` as a literal placeholder—the CLI replaces it with each component name when running `shadcn add`.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "tailwind": {
    "css": "",
    "baseColor": "neutral",
    "cssVariables": false
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "lib": "@/lib"
  },
  "registries": {
    "@strudel": "https://strudel.science/strudel-kit/r/{name}.json"
  }
}
```

## Installing Components

### Using the `@strudel` Namespace

With `@strudel` configured in `components.json`, add any component with:

```bash
npx shadcn@latest add @strudel/chemical-formula
npx shadcn@latest add @strudel/scientific-data-grid
npx shadcn@latest add @strudel/filters-panel
```

### Using a Direct URL

You can also install any component directly by URL without configuring `registries` in `components.json`:

```bash
npx shadcn@latest add https://strudel.science/strudel-kit/r/chemical-formula.json
```

When you run `shadcn add`, the CLI will:

1. Copy the component source files into your `aliases.components` directory (e.g., `src/components/ChemicalFormula/`).
2. Copy any required STRUDEL utilities or types into your `aliases.lib` directory (e.g., `src/lib/strudel-utils.ts`, `src/lib/filters.types.ts`).
3. Rewrite `@/` imports to match your `components.json` aliases.
4. Install any required MUI/Emotion/dayjs npm packages.

## Usage

Import the installed components directly from your own repository:

```tsx
import { ChemicalFormula } from '@/components/ChemicalFormula';
import { ScientificDataGrid } from '@/components/ScientificDataGrid';
import { FilterContext } from '@/components/FilterContext';
import { FiltersPanel } from '@/components/FiltersPanel';

function MyApp() {
  return (
    <div>
      <ChemicalFormula content="H2O" />
      <ScientificDataGrid rows={myRows} columns={myColumns} />
    </div>
  );
}
```

## Available Registry Items

### Data Display

| Registry Item          | Description                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------- |
| `scientific-data-grid` | MUI X DataGrid with units, significant figures, chemical formulas, and popover cells |
| `label-value-table`    | Two-column MUI table for displaying label-value pairs                                |
| `array-with-popover`   | Display arrays of values with an expandable MUI Popover                              |
| `cell-with-popover`    | Table cell wrapper with popover details on click                                     |
| `image-wrapper`        | Responsive MUI Box wrapper for scaling images                                        |
| `linear-meter`         | Segmented horizontal progress meter                                                  |
| `link-card`            | Clickable MUI card with optional image, label, and description                       |

### Filters

| Registry Item    | Description                                                                       |
| :--------------- | :-------------------------------------------------------------------------------- |
| `filter-context` | React context provider and `useFilters` hook for filter state                     |
| `filter-field`   | Individual filter field (`CheckboxList`, `RangeSlider`, `DateRange`, `TextField`) |
| `filter-group`   | Collapsible MUI accordion group for related filter fields                         |
| `filters`        | Container for filter controls with active count and reset action                  |
| `filters-panel`  | Config-driven filter panel rendering `Filters` and `FilterField` controls         |
| `checkbox-list`  | Multi-select MUI checkbox list filter                                             |
| `range-slider`   | Dual-thumb MUI range slider filter                                                |

### Scientific

| Registry Item      | Description                                        |
| :----------------- | :------------------------------------------------- |
| `chemical-formula` | Render chemical formulas with formatted subscripts |

### Utilities & Types

These are installed automatically when needed by a component, or can be added standalone:

| Registry Item   | Installed File         | Description                                                                                               |
| :-------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------- |
| `strudel-utils` | `lib/strudel-utils.ts` | `VALID_ELEMENTS`, `ELEMENTS_REGEX`, `ELEMENTS_SPLIT_REGEX`, `hasValue`, `rangeHasValue`                   |
| `filter-types`  | `lib/filters.types.ts` | `ParamType`, `FilterOperator`, `FilterComponent`, `FilterValue`, `DataFilter`, `FilterConfig`, `DataCard` |

## Development & Building the Registry

Install local development dependencies:

```bash
npm install
```

### Build the Registry JSON Files

Compile `registry.json` and the component source files into static JSON files under `public/r/`:

```bash
npm run registry:build
```

(`npm run build` runs the same command.)

To publish the public registry, host the generated `public/r/` directory statically (for example, at `https://strudel.science/strudel-kit/r/`).

### Storybook

Run Storybook for local component development:

```bash
npm run storybook
```

### Linting & Formatting

```bash
npm run lint
npm run format:check
```

## License

See LICENSE file for details.
