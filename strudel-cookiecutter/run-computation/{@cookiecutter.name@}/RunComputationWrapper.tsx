import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { basename } from '../App';
import { RunComputationProvider } from './context/ContextProvider';
import definitions from './definitions.json';

/**
 * Top-level wrapper for the run-computation Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const RunComputationWrapper: React.FC = () => {
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
              dataIdField: '{@ cookiecutter.data.list.table.dataIdField @}',
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
              dataIdField: '{@ cookiecutter.data.inputs.table.dataIdField @}',
              columns: definitions.inputs.table.columns,
            }
          }}
          results={{
            table: {
              data: [],
              dataIdField: '{@ cookiecutter.data.results.table.dataIdField @}',
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