import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { basename } from '../../main';
import { RunComputationProvider } from './_context/ContextProvider';
import definitions from './definitions.json';

/**
 * Top-level wrapper for the run-computation Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const RunComputationWrapper: React.FC = () => {
  // strudel-kit-variable-next-line
  const listItems = useDataFromSource('default/run-computation/list.json', basename)

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
              // strudel-kit-variable-next-line
              dataIdField: 'id',
              columns: [
                ...definitions.list.table.columns,
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
              // strudel-kit-variable-next-line
              dataIdField: 'id',
              columns: definitions.inputs.table.columns,
            }
          }}
          results={{
            table: {
              data: [],
              // strudel-kit-variable-next-line
              dataIdField: 'id',
              columns: definitions.results.table.columns,
            }
          }}
        >
          <Outlet />
        </RunComputationProvider>
      </Box>
    </Box>
  )
}