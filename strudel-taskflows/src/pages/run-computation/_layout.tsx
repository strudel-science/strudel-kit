import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { RunComputationProvider } from './_context/ContextProvider';
import { taskflow } from './_config/taskflow.config';

/**
 * Top-level wrapper for the run-computation Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const RunComputationLayout: React.FC = () => {
  const listItems = useDataFromSource(taskflow.data.items.source)

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        <RunComputationProvider 
          list={{
            table: {
              data: listItems,
              dataIdField: taskflow.data.items.idField,
              columns: [
                ...taskflow.pages.index.tableColumns,
                { 
                  field: 'actions', 
                  headerName: 'Actions', 
                  type: 'actions',
                  getActions: (params: GridRowParams) => [
                    <GridActionsCellItem icon={<ContentCopyIcon/>} label="Duplicate" />,
                    <GridActionsCellItem icon={<EditIcon/>} label="Edit" />,
                    <GridActionsCellItem icon={<DeleteIcon/>} label="Delete" />
                  ],
                  flex: 1,
                },
              ],
            }
          }}
          inputs={{
            table: {
              data: [],
              dataIdField: taskflow.data.inputs.idField,
              columns: taskflow.pages.dataInputs.tableColumns,
            }
          }}
          results={{
            table: {
              data: [],
              dataIdField: taskflow.data.results.idField,
              columns: taskflow.pages.results.tableColumns,
            }
          }}
        >
          <Outlet />
        </RunComputationProvider>
      </Box>
    </Box>
  )
}

export default RunComputationLayout;