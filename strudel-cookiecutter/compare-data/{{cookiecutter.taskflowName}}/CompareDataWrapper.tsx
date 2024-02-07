import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { TopBar } from '../../components/TopBar';
import { CompareDataProvider } from './context/ContextProvider';
import { GridColDef } from '@mui/x-data-grid';
  
export const CompareDataWrapper: React.FC = () => {
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
      <Box sx={{ '{{' }} flexGrow: 1 {{ '}}' }}>
        <TopBar />
      </Box>
      <Box>
        <CompareDataProvider data={scenarios} columns={columns}>
          <Outlet />
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export type CompareDataGridColDef = GridColDef & {
  isComparisonMetric?: boolean;
}

const columns: CompareDataGridColDef[] = [
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
    width: 200,
  },
  { 
    field: 'volumetric_flow_rate', 
    headerName: 'Volumetric Flow Rate', 
    width: 200,
    isComparisonMetric: true
  },
  { 
    field: 'tss_concentration', 
    headerName: 'TSS Concentration', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'cod_concentration', 
    headerName: 'COD Concentration', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'tkn_concentration', 
    headerName: 'TKN Concentration', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'acetic_acid_concentration', 
    headerName: 'Acetic Acid Concentration', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'metric6', 
    headerName: 'metric6', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'metric7', 
    headerName: 'metric7', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'metric8', 
    headerName: 'metric8', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'metric9', 
    headerName: 'metric9', 
    width: 200,
    isComparisonMetric: true,
  },
  { 
    field: 'metric10', 
    headerName: 'metric10', 
    width: 200,
    isComparisonMetric: true,
  },
];