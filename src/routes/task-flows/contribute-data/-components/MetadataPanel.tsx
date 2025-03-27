import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useState } from 'react';

/**
 * Panel for entering metadata about the new dataset in the contribute-data Task Flow.
 * Data from this panel would then display in the <DatasetView> in the next step (not currently hooked together).
 */
export const MetadataPanel: React.FC = () => {
  const [category, setCategory] = useState<string>();
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  /**
   * Content to render on the page for this component
   */
  return (
    <Paper>
      <Box
        sx={{
          padding: 2,
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.main',
        }}
      >
        <Typography fontWeight="bold" component="h2">
          Metadata
        </Typography>
      </Box>
      <Stack direction="row" spacing={0}>
        <Box
          component="aside"
          sx={{
            borderRight: '1px solid',
            borderRightColor: 'neutral.main',
            width: '150px',
          }}
        >
          {/* CUSTOMIZE: the metadata groups */}
          <List>
            <ListItem>Overview</ListItem>
            <ListItem>Dates</ListItem>
            <ListItem>Locations</ListItem>
            <ListItem>Methods</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            padding: 2,
          }}
        >
          <Stack>
            <Stack
              spacing={3}
              sx={{
                borderBottom: '1px solid',
                borderBottomColor: 'neutral.main',
                paddingBottom: 2,
              }}
            >
              {/* CUSTOMIZE: the metdata fields */}
              <Typography color="neutral.dark" fontWeight="bold">
                Overview
              </Typography>
              <TextField
                label="Dataset Title"
                variant="outlined"
                helperText="A brief, meaningful title for dataset including topic, dates and location. Ex: Sapflow and Soil Moisture Raw sensor data. Jan 2023-Apr 2023. San Diego, CA."
                fullWidth
              />
              <TextField
                label="DOI"
                variant="outlined"
                helperText="Digital object identifier for the dataset"
                fullWidth
              />
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="Fires">Fires</MenuItem>
                  <MenuItem value="Floods">Floods</MenuItem>
                  <MenuItem value="Groundwater">Groundwater</MenuItem>
                </Select>
                <FormHelperText>
                  Select the category most closely associeted with your dataset.
                </FormHelperText>
              </FormControl>
              <TextField
                label="Dataset Summary"
                variant="outlined"
                helperText="Briefly describe the dataset."
                fullWidth
                multiline
                minRows={4}
              />
            </Stack>
            <Stack
              spacing={3}
              sx={{
                borderBottom: '1px solid',
                borderBottomColor: 'neutral.main',
                paddingBottom: 2,
              }}
            >
              <Typography color="neutral.dark" fontWeight="bold">
                Dates
              </Typography>
              <Stack direction="row">
                <DatePicker
                  value={startDate}
                  label="Start Date"
                  slotProps={{
                    actionBar: {
                      actions: ['clear', 'today'],
                    },
                  }}
                  onChange={(value) => setStartDate(value)}
                />
                <DatePicker
                  value={endDate}
                  label="End Date"
                  slotProps={{
                    actionBar: {
                      actions: ['clear', 'today'],
                    },
                  }}
                  onChange={(value) => setEndDate(value)}
                />
              </Stack>
            </Stack>
            <Stack spacing={3}>
              <Typography color="neutral.dark" fontWeight="bold">
                Contacts
              </Typography>
              <TextField
                label="Point of Contact"
                variant="outlined"
                helperText="Primary contact person for the dataset"
                fullWidth
              />
              <TextField
                label="Originator"
                variant="outlined"
                helperText="Primary originators for the dataset"
                fullWidth
              />
              <TextField
                label="Metadata Contact"
                variant="outlined"
                helperText="Contact person about metadata"
                fullWidth
              />
              <TextField
                label="Publisher"
                variant="outlined"
                helperText="Organization responsible for publishing for the dataset"
                fullWidth
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};
