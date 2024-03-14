import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { getDataFromSource } from '../../utils/api.utils';
import { basename } from '../App';
import { RunComputationProvider } from './context/ContextProvider';
import definitions from './definitions.json';
  
export const RunComputationWrapper: React.FC = () => {
  const [listItems, setListItems] = useState<any[]>([]);

  /**
   * Fetch data for the list table when the page loads
   */
  useEffect(() => {
    if (listItems.length === 0) {
      const getData = async () => {
        const dataSource = 'default/run-computation/list.json';
        const data = await getDataFromSource(dataSource, basename);
        setListItems(data);
      }
      getData();
    }
  }, []);

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
              dataIdField: 'id',
              columns: definitions.inputs.table.columns,
            }
          }}
          results={{
            table: {
              data: [],
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