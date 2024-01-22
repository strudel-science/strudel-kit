import { AppBar, Box, Link, Grid, IconButton, Paper, Stack, TextField, Toolbar, Typography, Tab, Button, Container } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircleIcon from '@mui/icons-material/Circle';
import React, { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import { setPreviewItem } from '../../components/contexts/analytics/actions';
import { FiltersPanel } from './FiltersPanel';
import { PreviewPanel } from './PreviewPanel';
import { DataListPanel } from './DataListPanel';
import { PageHeader } from '../../components/PageHeader';
import { LabelValueTable } from '../../components/LabelValueTable';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { DataGrid, GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';

const attachedFilesColumns = [
  { 
    field: 'file_name', 
    headerName: 'File Name',
    flex: 1
  },
  { 
    field: 'description', 
    headerName: 'Description',
    flex: 1
  },
  { 
    field: 'file_size', 
    headerName: 'Size', 
    width: 150 
  },
  { 
    field: 'actions', 
    headerName: '', 
    type: 'actions',
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem icon={<DownloadIcon/>} label="Download" />,
      <GridActionsCellItem icon={<VisibilityIcon/>} label="View" />,
    ],
    flex: 1
  },
];
  
export const DatasetDetail: React.FC = () => {
  const {state, dispatch} = useAnalytics();
  const params = useParams();
  const dataset = state.data?.find((d) => {
    if (params.datasetId) {
      return d.id === parseInt(params.datasetId);
    }
  });
  const datasetTitle = dataset ? dataset['title'] : 'Not Found';
  const [dataTabsValue, setDataTabsValue] = React.useState('1');

  const handleDataTabsChange = (event: React.SyntheticEvent, newValue: string) => {
    setDataTabsValue(newValue);
  };

  return (
    <Box>
      <PageHeader
        pageTitle={datasetTitle}
        breadcrumbTitle="Dataset Detail"
        mb={1}
        p={2}
        sx={{
          backgroundColor: 'white'
        }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={1} sx={{ pt: 1, pr: 2, pb: 2, pl: 2,  }}>
          {dataset && (
            <>
              <Grid item md={8} xs={12}>
                <Paper sx={{ mb: 1 }}>
                  <Stack p={2}>
                    <Stack direction="row">
                      <Box>
                        <Typography variant="h6" component="h2" mb={1}>Dates</Typography>
                        <LabelValueTable
                          rows={[
                            { label: 'Publication', value: dataset['publication_date'] },
                            { label: 'Start Date', value: dataset['start_date'] },
                            { label: 'End Date', value: dataset['end_date'] }
                          ]}
                        />
                      </Box>
                      <Box flex={1}>
                        <Typography variant="h6" component="h2" mb={1}>Citation</Typography>
                        <Typography>{dataset['citation']}</Typography>
                      </Box>
                    </Stack>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Summary</Typography>
                      <Typography>{dataset['summary']}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Purpose</Typography>
                      <Typography>{dataset['purpose']}</Typography>
                    </Box>
                  </Stack>
                </Paper>
                <Paper>
                  <TabContext value={dataTabsValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleDataTabsChange} aria-label="lab API tabs example">
                        <Tab label="Data Files" value="1" />
                        <Tab label="Data Types" value="2" />
                        <Tab label="Metadata" value="3" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Stack direction="row" justifyContent="flex-end">
                          <Button variant="contained">Download all files</Button>
                      </Stack>
                      <DataGrid
                        rows={dataset['attached_files']}
                        getRowId={(row) => row.file_id}
                        columns={attachedFilesColumns}
                        disableColumnSelector
                        disableRowSelectionOnClick
                        sx={{
                          border: 'none'
                        }}
                      />
                    </TabPanel>
                    <TabPanel value="2">Tab Two Content</TabPanel>
                    <TabPanel value="3">Tab Three Content</TabPanel>
                  </TabContext>
                </Paper>
              </Grid>
              <Grid item md={4} xs={12}>
                <Paper>
                  <Stack p={2}>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Map</Typography>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: "center", 
                          bgcolor: "neutral.dark", 
                          height: 300 
                        }}
                      >
                        <Typography>{'<Map>'}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Tags</Typography>
                        {dataset.tags.map((tag: string, i: number) => {
                          if (i < dataset.tags.length -1) {
                            return <Typography component="span" sx={{ fontSize: 'small', marginRight: 0.5 }}>{tag},</Typography>
                          } else {
                            return <Typography component="span" sx={{ fontSize: 'small' }}>{tag}</Typography>
                          }
                        })}
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Communities</Typography>
                      <ul>
                        {dataset['communities'].map((community: any, i: number) => (
                          <li>
                            <Link href={community.url} target='_blank'>
                              {community.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Associated Projects</Typography>
                      <ul>
                        {dataset['associated_projects'].map((project: any, i: number) => (
                          <li>
                            <Link href={project.url} target='_blank'>
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h2" mb={1}>Contacts</Typography>
                      <LabelValueTable
                        rows={[
                          { label: 'Point of Contact', value: dataset['point_of_contact'] },
                          { label: 'Originator', value: dataset['originator'] },
                          { label: 'Metadata Contact', value: dataset['metadata_contact'] },
                          { label: 'Publisher', value: dataset['publisher'] },
                          { label: 'Distributor', value: dataset['distributor'] },
                          { label: 'USGS Mission Area', value: dataset['usgs_mission_area'] }
                        ]}
                      />
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </>
          )}
          {!dataset && (
            <Typography>Could not find this dataset</Typography>
          )}
        </Grid>
      </Container>
    </Box>
  )
}