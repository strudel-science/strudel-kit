import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { TopBar } from './TopBar';
import { CompareScenariosProvider } from './context/ContextProvider';
import { GridColDef } from '@mui/x-data-grid';
  
export const CompareScenariosWrapper: React.FC = () => {
  const [scenarios, setScenarios] = useState<any[]>([]);

  useEffect(() => {
    if (scenarios.length === 0) {
      const getData = async () => {
        const data: any = await d3.json(`${basename}/data/scenarios.json`);
        setScenarios(data);
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
        <CompareScenariosProvider data={scenarios} columns={columns}>
          <Outlet />
        </CompareScenariosProvider>
      </Box>
    </Box>
  )
}

const columns: GridColDef[] = [
  { 
    field: 'name', 
    headerName: 'Scenario Name', 
    width: 200 
  },
  { 
    field: 'description', 
    headerName: 'Description', 
    width: 200 
  },
  { 
    field: 'analysis_type', 
    headerName: 'Analysis Type', 
    width: 200 
  },
  { 
    field: 'volumetric_flow_rate', 
    headerName: 'Volumetric Flow Rate', 
    width: 200 
  },
  { 
    field: 'tss_concentration', 
    headerName: 'TSS Concentration', 
    width: 200 
  },
  { 
    field: 'cod_concentration', 
    headerName: 'COD Concentration', 
    width: 200 
  },
  { 
    field: 'tkn_concentration', 
    headerName: 'TKN Concentration', 
    width: 200 
  },
  { 
    field: 'acetic_acid_concentration', 
    headerName: 'Acetic Acid Concentration', 
    width: 200 
  },
];