import React, { ReactNode, useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
import { ExploringDatasets } from '../task-flows/ExploringDatasets/ExploringDatasets';
import { AnalyticsProvider } from '../components/contexts/analytics/AnalyticsProvider';

export const ExploringDatasetsPage: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);
  console.log('datasets page')
  useEffect(() => {
    if (datasets.length === 0) {
      const getData = async () => {
        const data: any = await d3.json('/data/datasets.json');
        console.log(data);
        setDatasets(data);
      }
      getData();
    }
  }, []);

  return (
    <AnalyticsProvider data={datasets} dataIdField='id'>
      <ExploringDatasets />
    </AnalyticsProvider>
  )
}