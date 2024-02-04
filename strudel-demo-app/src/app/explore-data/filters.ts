import { FilterConfig } from "./context/ContextProvider";

export const filters: FilterConfig[] = [
  {
    field: 'Assembly',
    displayName: 'Assembly',
    filterType: 'CheckboxList',
    props: {
      options: [
        {
          label: 'JGI',
          value: 'JGI',
        },
        {
          label: 'BYU',
          value: 'BYU',
        },
        { 
          label: 'AGP',
          value: 'AGP',
        },
      ],
    }
  },
  {
    field: 'Data Usage Policy',
    displayName: 'Data Usage Policy',
    filterType: 'CheckboxList',
    props: {
      options: [
        {
          label: 'restricted',
          value: 'restricted',
        },
        {
          label: 'unrestricted',
          value: 'unrestricted',
        },
      ],
    }
  },
  {
    field: 'Euk. BUSCO %',
    displayName: 'Euk. BUSCO %',
    filterType: 'Slider',
    props: {
      min: 0,
      max: 100,
    }
  },
  {
    field: 'Emb. BUSCO %',
    displayName: 'Emb. BUSCO %',
    filterType: 'Slider',
    props: {
      min: 0,
      max: 100,
    }
  }
]