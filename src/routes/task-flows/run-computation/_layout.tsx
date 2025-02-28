import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useDataFromSource } from '../../../hooks/useDataFromSource';
import { RunComputationProvider } from './-context/ContextProvider';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/task-flows/run-computation/_layout')({
  component: RunComputationLayout,
});

/**
 * Top-level wrapper for the run-computation Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
function RunComputationLayout() {
  const listItems = useDataFromSource('data/default/run-computation/list.json');

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box>
        <RunComputationProvider
          list={{
            table: {
              data: listItems,
              dataIdField: 'id',
              columns: [
                {
                  field: 'name',
                  headerName: 'Scenario Name',
                  width: 200,
                },
                {
                  field: 'analysisType',
                  headerName: 'Analysis Type',
                  width: 200,
                },
                {
                  field: 'createdDate',
                  headerName: 'Date Created',
                  width: 200,
                },
                {
                  field: 'status',
                  headerName: 'Status',
                  width: 200,
                },
                {
                  field: 'actions',
                  headerName: 'Actions',
                  type: 'actions',
                  getActions: () => [
                    <GridActionsCellItem
                      icon={<ContentCopyIcon />}
                      label="Duplicate"
                    />,
                    <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
                    <GridActionsCellItem
                      icon={<DeleteIcon />}
                      label="Delete"
                    />,
                  ],
                  flex: 1,
                },
              ],
            },
          }}
          inputs={{
            table: {
              data: [],
              dataIdField: 'id',
              columns: [
                {
                  field: 'name',
                  headerName: 'Unit Name',
                  width: 200,
                },
                {
                  field: 'unitType',
                  headerName: 'Unit Type',
                  width: 200,
                },
                {
                  field: 'constraints',
                  headerName: 'Constraints',
                  width: 200,
                },
                {
                  field: 'lowerBound',
                  headerName: 'Lower Bound',
                  width: 200,
                  type: 'number',
                },
                {
                  field: 'upperBound',
                  headerName: 'Upper Bound',
                  width: 200,
                  type: 'number',
                },
              ],
            },
          }}
          results={{
            table: {
              data: [],
              dataIdField: 'id',
              columns: [
                {
                  field: 'name',
                  headerName: 'Unit Name',
                  width: 200,
                },
                {
                  field: 'unitType',
                  headerName: 'Unit Type',
                  width: 200,
                },
                {
                  field: 'constraints',
                  headerName: 'Constraints',
                  width: 200,
                },
                {
                  field: 'lowerBound',
                  headerName: 'Lower Bound',
                  width: 200,
                  type: 'number',
                },
                {
                  field: 'upperBound',
                  headerName: 'Upper Bound',
                  width: 200,
                  type: 'number',
                },
              ],
            },
          }}
        >
          <Outlet />
        </RunComputationProvider>
      </Box>
    </Box>
  );
}
