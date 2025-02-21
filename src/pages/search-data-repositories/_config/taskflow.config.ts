import { SearchDataRepositoriesConfig } from './taskflow.types';

export const taskflow: SearchDataRepositoriesConfig = {
  data: {
    /**
     * Data definition for the initial items list
     */
    list: {
      /**
       * Source of the data for the initial list of items on the main page.
       */
      source: 'data/default/search-data-repositories/datasets.json',
      /**
       * Key-value object of params that should always be included in the query URL
       */
      staticParams: null,
      /**
       * Field name for the unique ID in the data source.
       */
      idField: 'id',
      /**
       * Method by which data should be filtered, either client or server.
       */
      queryMode: 'client',
    },
    /**
     * Data definition for the item detail page
     */
    detail: {
      source: 'data/default/search-data-repositories/datasets.json',
      staticParams: null,
      idField: 'id',
      queryMode: 'client',
    },
  },
  pages: {
    index: {
      /**
       * Title to appear at the top of the main page.
       */
      title: 'Search Data Repositories App',
      /**
       * Text to appear underneath the title at the top of the main page.
       */
      description: 'Description of this app section',
      /**
       * Map of card sections to property names in the data source.
       * This determines the content of the cards on the main page.
       */
      cardFields: {
        title: 'title',
        content: 'summary',
        tags: 'tags',
      },
      /**
       * List of filters to display on the main page and use to filter the main data cards.
       * Each filter has a definition object to determine how it renders and functions.
       */
      cardFilters: [
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
      ],
    },
  },
};
