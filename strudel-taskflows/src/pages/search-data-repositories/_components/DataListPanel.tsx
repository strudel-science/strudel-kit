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
import React, { useState } from 'react';
import { DataListCard } from './DataListCard';
import { useSearchDataRepositories } from '../_context/ContextProvider';
import { taskflow } from '../_config/taskflow.config';
import { useFilters } from '../../../components/FilterContext';
import { filterData } from '../../../utils/filters.utils';
import { useDataQuery } from '../../../utils/useDataQuery';

interface DataListPanelProps {
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
	onToggleFiltersPanel,
	previewItem,
	setPreviewItem,
}) => {
	const { state } = useSearchDataRepositories();
	const { activeFilters } = useFilters();
	const [searchTerm, setSearchTerm] = useState('');
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(25);
	const [offset, setOffest] = useState(page * pageSize);
	const filterConfigs = taskflow.pages.index.cardFilters;
	const queryMode = taskflow.data.items.queryMode;
	const { isPending, isFetching, isError, data, error } = useDataQuery({
		activeFilters,
		dataSource: taskflow.data.items.source,
		filterConfigs,
		offset,
		page,
		pageSize,
		queryMode: taskflow.data.items.queryMode,
		staticParams: taskflow.data.items.staticParams,
	});
	const cards =
		queryMode === 'server'
			? data.results
			: filterData(data, activeFilters, filterConfigs, searchTerm);
	const emptyRows = new Array(pageSize).fill(null);
	const indexedRows = emptyRows.map((row, i) => i);

	const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		setSearchTerm(evt.target.value);
	};

	/**
	 * Content to render on the page for this component
	 */
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
				{cards && cards.length > 0 && (
					<Stack flex={1}>
						{cards?.map((item: any) => (
							<DataListCard
								key={item[taskflow.data.items.idField]}
								item={item}
								previewItem={previewItem}
								setPreviewItem={setPreviewItem}
							/>
						))}
					</Stack>
				)}
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
			<Pagination count={10} />
		</Paper>
	);
};
