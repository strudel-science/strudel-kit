import React, { ReactNode, useEffect, useState } from 'react';
import { DataExplorer } from './DataExplorer';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { TopBar } from './TopBar';
import { ExploreDataProvider } from './context/ContextProvider';

export const ExploreDataWrapper: React.FC = () => {
  const [entities, setEntities] = useState<any[]>([]);

  useEffect(() => {
    if (entities.length === 0) {
      const getData = async () => {
        const data = await d3.tsv(`${basename}/data/Current_Genomes.tsv`);
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
        <ExploreDataProvider data={entities} columns={columns} dataIdField='Proteome_ID'>
          <Outlet />
        </ExploreDataProvider>
      </Box>
    </Box>
  )
}

const columns: GridColDef[] = [
  { 
    field: 'Organism', 
    headerName: 'Organism', 
    width: 200 
  },
  {
    field: 'Common Name',
    headerName: 'Common Name',
    width: 150,
  },
  {
    field: 'Assembly',
    headerName: 'Assembly',
    width: 150,
  },
  {
    field: 'Data Usage Policy',
    headerName: 'Data Usage Policy',
    width: 150,
  },
  {
    field: 'Euk. BUSCO %',
    headerName: 'Euk. BUSCO %',
    type: 'number',
    width: 110,
  },
  {
    field: 'Emb. BUSCO %',
    headerName: 'Emb. BUSCO %',
    type: 'number',
    width: 110,
  }
];