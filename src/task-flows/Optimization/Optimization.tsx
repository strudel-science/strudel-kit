import React, { ReactNode, useEffect, useState } from 'react';
import { AnalyticsProvider } from '../../components/contexts/analytics/AnalyticsProvider';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';

const columns: GridColDef[] = [

];

export const Optimization: React.FC = () => {
  const [scenarios, setScenarios] = useState<any[]>([]);

  useEffect(() => {
    if (scenarios.length === 0) {
      const getData = async () => {
        const data = await d3.tsv('/data/scenarios.tsv');
        setScenarios(data);
      }
      getData();
    }
  }, []);

  return (
    <AnalyticsProvider data={scenarios} columns={columns} dataIdField='Proteome_ID'>
      Optimization
    </AnalyticsProvider>
  )
}