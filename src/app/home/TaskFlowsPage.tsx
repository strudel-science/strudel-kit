import React, { ReactNode, useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as d3 from 'd3-fetch';
import { Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const TaskFlowsPage: React.FC = () => {
  return (
    <Stack p={2}>
      <Link component={RouterLink} to="exploring-datasets">
        Exploring Datasets
      </Link>
      <Link component={RouterLink} to="exploring-entities">
        Exploring Entities
      </Link>
      <Link component={RouterLink} to="optimization">
        Optimization
      </Link>
      <Link component={RouterLink} to="contributing-data">
        Contributing Data
      </Link>
    </Stack>
  )
}