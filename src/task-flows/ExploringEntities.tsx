import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { AnalyticsProvider, useAnalytics } from '../components/Analytics/AnalyticsProvider';
import { AnalyticsDataTable } from '../components/Analytics/AnalyticsDataTable';
import { AnalyticsSearchField } from '../components/Analytics/AnalyticsSearchField';
import { FiltersPanel } from '../components/FiltersPanel';
import { CheckboxList } from '../components/CheckboxList';
import { setFilter } from '../components/Analytics/actions';
import { FilterGroup } from '../components/FilterGroup';
  
export const ExploringEntities: React.FC = () => {
  const {state, dispatch} = useAnalytics();
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);

  const handleCloseFilters = () => {
    setShowFiltersPanel(false);
  };
  
  const handleToggleFilters = () => {
    setShowFiltersPanel(!showFiltersPanel);
  }

  return (
    <Box>
      <Box component="nav">
        <Typography variant="h5" component="h1">Project name</Typography>
      </Box>
      <Grid container>
        {showFiltersPanel && (
          <Grid item xs={2}>
            <FiltersPanel onClose={handleCloseFilters}>
              <FilterGroup name="Category 1">
                <CheckboxList
                  listLabel="First Name"
                  options={[
                    { label: 'Arya', value: 'Arya' },
                    { label: 'Cersei', value: 'Cersei' },
                    { label: 'Jon', value: 'Jon' }
                  ]}
                  onChange={(values) => dispatch(setFilter({ field: 'firstName', value: values, operator: 'contains one of' }))}
                />
                <CheckboxList
                  listLabel="Last Name"
                  options={[
                    { label: 'Lannister', value: 'Lannister' },
                    { label: 'Snow', value: 'Snow' },
                    { label: 'Targaryen', value: 'Targaryen' }
                  ]}
                  onChange={(values) => dispatch(setFilter({ field: 'lastName', value: values, operator: 'contains one of' }))}
                />
              </FilterGroup>
            </FiltersPanel>
          </Grid>
        )}
        <Grid item xs={showFiltersPanel ? 10 : 12}>
          <Box>
            <Typography>Entity List</Typography>
            <Button onClick={handleToggleFilters}>Filters</Button>
            <AnalyticsSearchField />
          </Box>
          <AnalyticsDataTable />
        </Grid>
      </Grid>
    </Box>
  )
}