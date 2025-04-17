import { Box } from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useDataFromSource } from '../../hooks/useDataFromSource';
import { CompareDataProvider } from './-context/ContextProvider';

export const Route = createFileRoute('/compare-data/_layout')({
  component: CompareDataWrapper,
});

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
function CompareDataWrapper() {
  // CUSTOMIZE: the data source for the main data table.
  const scenarios = useDataFromSource('dummy-data/scenarios.json');

  // CUSTOMIZE: the columns for the main data table
  const columns = [
    {
      field: 'name',
      headerName: 'Scenario Name',
      width: 200,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 200,
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
      isComparisonMetric: true,
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
  ];

  return (
    <Box>
      <CompareDataProvider
        data={scenarios || []}
        columns={columns}
        // CUSTOMIZE: the unique identifier field in the data
        dataIdField="id"
      >
        <Outlet />
      </CompareDataProvider>
    </Box>
  );
}
