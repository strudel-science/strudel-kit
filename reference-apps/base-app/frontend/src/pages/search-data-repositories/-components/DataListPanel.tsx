import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import {
  Alert,
  Box,
  Button,
  Pagination,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFilters } from '../../../components/FilterContext';
import { FilterConfig } from '../../../types/filters.types';
import { filterData } from '../../../utils/filters.utils';
import { useListQuery } from '../../../hooks/useListQuery';
import { DataListCard } from './DataListCard';

interface DataListPanelProps {
  filterConfigs: FilterConfig[];
  onToggleFiltersPanel: () => any;
  previewItem: any;
  setPreviewItem: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * Show a list of filterable `<DataListCard>` components based on the data source.
 * Cards are filterable by the inputs in `<FiltersPanel>` and clicking a card will
 * display the `<PreviewPanel>`.
 */
export const DataListPanel: React.FC<DataListPanelProps> = ({
  filterConfigs,
  onToggleFiltersPanel,
  previewItem,
  setPreviewItem,
}) => {
  const { activeFilters } = useFilters();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [offset, setOffest] = useState((page - 1) * pageSize);
  const [total, setTotal] = useState(1);
  const [paginatedCards, setPaginatedCards] = useState<any[]>([]);
  // CUSTOMIZE: the query mode
  const queryMode: 'client' | 'server' = 'client';
  const { isPending, isError, data, error } = useListQuery({
    activeFilters,
    // CUSTOMIZE: the main data source
    dataSource: 'dummy-data/datasets.json',
    filterConfigs,
    offset,
    page,
    pageSize,
    queryMode,
    staticParams: null,
  });
  const cards = filterData(data, activeFilters, filterConfigs, searchTerm);
  const emptyRows = new Array(pageSize).fill(null);
  const indexedRows = emptyRows.map((row, i) => i);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  // Set total count after cards is populated from query
  useEffect(() => {
    if (cards) {
      setTotal(cards.length);
    }
  }, [cards]);

  // Modify the item offset when the page changes
  useEffect(() => {
    setOffest((page - 1) * pageSize);
  }, [page]);

  // Filter cards based on their index when the page and offset change
  // The paginatedCards list is only relevant/used for client mode apps
  useEffect(() => {
    if (cards) {
      setPaginatedCards(
        cards.filter((_card: any, i: number) => {
          return i >= offset && i < offset + pageSize;
        })
      );
    }
  }, [cards, offset]);

  return (
    <Paper elevation={0}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          padding: 2,
        }}
      >
        <Button startIcon={<FilterAltIcon />} onClick={onToggleFiltersPanel}>
          Filters
        </Button>
        <Button startIcon={<SortIcon />}>Sort</Button>
        <Box flex={1}>
          <TextField
            variant="outlined"
            label="Search"
            size="small"
            value={searchTerm}
            fullWidth
            onChange={handleSearch}
          />
        </Box>
      </Stack>
      <Stack
        direction="row"
        sx={{
          padding: 2,
        }}
      >
        {isPending && (
          <Box
            flex={1}
            sx={{
              padding: 2,
            }}
          >
            {indexedRows.map((row) => (
              <Skeleton key={row} height={100} />
            ))}
          </Box>
        )}
        {isError && (
          <Stack flex={1}>
            <Alert severity="error">{error.message}</Alert>
          </Stack>
        )}
        {queryMode == 'client' && cards && cards.length > 0 && (
          <Stack flex={1}>
            {paginatedCards?.map((item: any) => (
              <DataListCard
                key={item.id}
                item={item}
                previewItem={previewItem}
                setPreviewItem={setPreviewItem}
              />
            ))}
          </Stack>
        )}
        {/* {queryMode == 'server' && cards && cards.length > 0 && (
          <Stack flex={1}>
            {cards?.map((item: any) => (
              <DataListCard
                key={item[taskflow.data.list.idField]}
                item={item}
                previewItem={previewItem}
                setPreviewItem={setPreviewItem}
              />
            ))}
          </Stack>
        )} */}
        {cards && cards.length === 0 && (
          <Stack flex={1}>
            <Typography>No data matches your search</Typography>
          </Stack>
        )}
        {!previewItem && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'neutral.dark',
              height: 700,
              width: 400,
            }}
          >
            <Typography>{'<Map>'}</Typography>
          </Box>
        )}
      </Stack>
      <Pagination
        count={Math.ceil(total / pageSize)}
        page={page}
        onChange={handlePageChange}
        sx={{
          padding: 2,
        }}
      />
    </Paper>
  );
};
