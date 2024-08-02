# STRUDEL Components

STRUDEL Components are a set of react components that support people developing UI applications for the scientific community. They are built on top of [Material UI components](https://mui.com/) and aim to provide an extra layer of implementation to promote positive user experiences and usability standards.

Key Features:
- Specialized data grid for displaying scientific data
- Chemical formula rendering component
- Filters component for managing complex filter states

[Check out the documentation on the STRUDEL Kit site.](https://strudel.science/strudel-kit/docs/components/overview)

They also provide the building blocks for the STRUDEL Task Flow templates. [Learn how to get started with the full templates](https://strudel.science/strudel-kit/docs/).

## Install

```
npm install @strudel-science/components
```

## Usage

[SciDataGrid](https://github.com/strudel-science/strudel-kit/blob/main/strudel-components/src/examples/SciDataGrid/SciDataGridEx.tsx)
```js
import { SciDataGrid } from '@strudel-science/components';
```

[Filters](https://github.com/strudel-science/strudel-kit/blob/main/strudel-components/src/examples/Filters/FiltersExGroups.tsx)
```js
import { Filters, FilterGroup, FilterField } from '@strudel-science/components';
```

[LabelValueTable](https://github.com/strudel-science/strudel-kit/blob/main/strudel-components/src/examples/Filters/FiltersExGroups.tsx)
```js
import { LabelValueTable } from '@strudel-science/components';
```