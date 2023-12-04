import React, { ReactNode, useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
import { Optimization } from '../task-flows/Optimization';
import { AnalyticsProvider } from '../components/contexts/analytics/AnalyticsProvider';
import { basename } from '../App';

export const OptimizationPage: React.FC = () => {
  return (
    <Optimization />
  )
}