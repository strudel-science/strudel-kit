import { ExploreDataConfig } from './taskflow.types';

export const taskflow: ExploreDataConfig = {
  data: {
    /**
     * Data definition for the initial items list
     */
    list: {
      /**
       * URL or path to the data source
       */
      source: 'data/default/explore-data/exoplanets.csv',
      /**
       * Key-value object of params that should always be included in the query URL
       */
      staticParams: null,
      /**
       * Name of the field in the data that represents a unique identifier for each record.
       */
      idField: 'Id',
      /**
       * Method by which data should be filtered, either client or server.
       */
      queryMode: 'client',
    },
    /**
     * Data definition for the item detail page
     */
    detail: {
      source: 'data/default/explore-data/exoplanets.csv',
      staticParams: null,
      idField: 'Id',
      queryMode: 'client',
    },
  },
  pages: {
    index: {
      /**
       * Title to appear at the top of the main page.
       */
      title: 'Explore Data App',
      /**
       * Text to appear underneath the title at the top of the main page.
       */
      description: 'Description of this app section',
      /**
       * List of column definition objects for the columns in the table on the main page.
       */
      tableColumns: [
        {
          field: 'Planet Name',
          headerName: 'Planet Name',
          width: 200,
        },
        {
          field: 'Planet Host',
          headerName: 'Planet Host',
          width: 200,
        },
        {
          field: 'Discovery Method',
          headerName: 'Discovery Method',
          width: 200,
        },
        {
          field: 'Orbital Period Days',
          headerName: 'Orbital Period',
          units: 'days',
          type: 'number',
          width: 200,
        },
        {
          field: 'Mass',
          headerName: 'Mass',
          units: 'Earth Mass',
          type: 'number',
          width: 200,
        },
        {
          field: 'Eccentricity',
          headerName: 'Eccentricity',
          type: 'number',
          width: 200,
        },
      ],
      /**
       * List of filters to display on the main page and use to filter the main table data.
       * Each filter has a definition object to determine how it renders and functions.
       */
      tableFilters: [
        {
          field: 'Discovery Method',
          label: 'Discovery Method',
          operator: 'contains-one-of',
          filterComponent: 'CheckboxList',
          filterProps: {
            options: [
              {
                label: 'Astrometry',
                value: 'Astrometry',
              },
              {
                label: 'Disk Kinematics',
                value: 'Disk Kinematics',
              },
              {
                label: 'Eclipse Timing Variations',
                value: 'Eclipse Timing Variations',
              },
              {
                label: 'Imaging',
                value: 'Imaging',
              },
              {
                label: 'Microlensing',
                value: 'Microlensing',
              },
              {
                label: 'Radial Velocity',
                value: 'Radial Velocity',
              },
              {
                label: 'Transit',
                value: 'Transit',
              },
            ],
          },
        },
        {
          field: 'Mass',
          label: 'Mass',
          operator: 'between-inclusive',
          filterComponent: 'RangeSlider',
          filterProps: {
            min: 0,
            max: 10000,
          },
        },
      ],
    },
  },
};
