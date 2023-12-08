import React, { ReactNode, useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
// import { Optimization } from '../task-flows/Optimization';
import { MyAnalysis } from '../task-flows/MyAnalysis';
import { AnalyticsProvider } from '../components/contexts/analytics/AnalyticsProvider';

const columns: GridColDef[] = [

];

//export const OptimizationPage: React.FC = () => {
export const MyAnalysisPage: React.FC = () => {
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
      {/* <Optimization /> */}
      <MyAnalysis />
    </AnalyticsProvider>
  )
}