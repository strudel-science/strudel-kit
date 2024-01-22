import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as d3 from 'd3-fetch';
import { basename } from '../App';
import { TopBar } from './TopBar';
  
export const MonitorTasksWrapper: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}