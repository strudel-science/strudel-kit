import React, { ReactNode, useEffect, useState } from 'react';
import { DataExplorer } from './DataExplorer';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { ExploreDataProvider } from './context/ContextProvider';
import columns from './configs/columns.json';
import filters from './configs/filters.json';
import { TopBar } from '../../components/TopBar';

export const ExploreDataWrapper: React.FC = () => {
  const [entities, setEntities] = useState<any[]>([]);

  useEffect(() => {
    if (entities.length === 0) {
      const getData = async () => {
        const filename = 'Current_Genomes.tsv';
        const fileExtension = filename.split('.').pop();
        const filePath = `${basename}/data/${filename}`;
        let data: any = null;
        if (fileExtension === 'csv') {
          data = await d3.csv(filePath);
        } else if (fileExtension === 'tsv') {
          data = await d3.tsv(filePath);
        } else if (fileExtension === 'json') {
          data = await d3.json(filePath);
        }
        setEntities(data);
      }
      getData();
    }
  }, []);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <ExploreDataProvider data={entities} columns={columns} filters={filters} dataIdField='Proteome_ID'>
          <Outlet />
        </ExploreDataProvider>
      </Box>
    </Box>
  )
}