import { AppBar, Box, Button, Container, Grid, IconButton, Link, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '../../components/DataGrid';

const scenarios = [
  {
    id: 0,
    name: 'Scenario 1',
    analysisType: 'Sensitivity Analysis',
    createdDate: '05/24/2023',
    status: 'Running'
  },
  {
    id: 1,
    name: 'Scenario 2',
    analysisType: 'Sensitivity Analysis',
    createdDate: '05/24/2023',
    status: 'Draft'
  },
  {
    id: 2,
    name: 'Scenario 3',
    analysisType: 'Optimization',
    createdDate: '05/24/2023',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Scenario 4',
    analysisType: 'Optimization',
    createdDate: '05/23/2023',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'Scenario 5',
    analysisType: 'Optimization',
    createdDate: '05/23/2023',
    status: 'Completed'
  },
];

const columns: GridColDef[] = [
  { 
    field: 'name', 
    headerName: 'Scenario Name', 
    width: 200 
  },
  { 
    field: 'analysisType', 
    headerName: 'Analysis Type', 
    width: 200 
  },
  { 
    field: 'createdDate', 
    headerName: 'Date Created', 
    width: 200 
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 200 
  },
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
    // headerAlign: 'right',
    // align: 'right'
  },
];
  
export const Optimization: React.FC = () => {
  const {state, dispatch} = useAnalytics();
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);

  const handleCloseFilters = () => {
    setShowFiltersPanel(false);
  };
  
  const handleToggleFilters = () => {
    setShowFiltersPanel(!showFiltersPanel);
  }

  const handleClosePreview = () => {
    dispatch(setPreviewItem(null));
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link component={RouterLink} to="/">
                <MenuIcon />
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Project name
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container 
        maxWidth="xl"
        sx={{
          mt: 4
        }}
      >
        <Paper>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              padding: 2
            }}
          >
            <Box flex={1}>
              <Typography 
                variant="h6" 
                component="h2" 
              >
                Scenario List
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="p" 
              >
                Scenarios represent a set of analysis inputs / parameters / settings and the results of that analysis. 
              </Typography>
            </Box>
            
            <Button
              variant="contained"
            >
              New Scenario
            </Button>
          </Stack>
          <DataGrid
            rows={scenarios}
            getRowId={(row) => row.id}
            columns={columns}
            disableColumnSelector
            initialState={{
              pagination: { paginationModel: { page: state.tablePage, pageSize: state.tablePageSize } }
            }}
            // {...props}
            // onRowClick={handleRowClick}
            sx={{
              '& .MuiDataGrid-cell:focus-within': {
                outline: 'none'
              },
              '& .MuiDataGrid-overlayWrapper': {
                minHeight: '4rem'
              }
            }}
          />
        </Paper>  
      </Container>
        
    </Box>
  )
}