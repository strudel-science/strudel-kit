import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { TopBar } from '../../components/TopBar';
import { ContributeDataProvider } from './context/ContextProvider';
  
export const ContributeDataWrapper: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);

  useEffect(() => {
    if (datasets.length === 0) {
      const getData = async () => {
        const data: any = await d3.json(`${basename}/data/datasets.json`);
        setDatasets(data);
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
        <ContributeDataProvider>
          <Outlet />
        </ContributeDataProvider>
      </Box>
    </Box>
  )
}