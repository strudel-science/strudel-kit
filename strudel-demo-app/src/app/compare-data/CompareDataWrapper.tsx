import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { basename } from '../App';
import { TopBar } from '../../components/TopBar';
import { CompareDataProvider } from './context/ContextProvider';
import { GridColDef } from '@mui/x-data-grid';
import { getDataFromSource } from '../../utils/api.utils';
import definitions from './definitions.json'

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const CompareDataWrapper: React.FC = () => {
  const [scenarios, setScenarios] = useState<any[]>([]);

  /**
   * Fetch data for the list table when the page loads
   */
  useEffect(() => {
    if (scenarios.length === 0) {
      const getData = async () => {
        const dataSource = 'default/compare-data/scenarios.json';
        const data = await getDataFromSource(dataSource, basename);
        setScenarios(data);
      }
      getData();
    }
  }, []);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <CompareDataProvider data={scenarios} columns={definitions.columns.main} dataIdField='id'>
          <Outlet />
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export type CompareDataGridColDef = GridColDef & {
  isComparisonMetric?: boolean;
}