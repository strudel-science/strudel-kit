import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import {
	Box,
	Button,
	Pagination,
	Paper,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { DataListCard } from './DataListCard';
import { useSearchDataRepositories } from '../_context/ContextProvider';
import { taskflow } from '../_config/taskflow.config';

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
	const [searchTerm, setSearchTerm] = useState('');
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
				<Stack flex={1}>
					{state.filteredData?.map((item) => (
						<DataListCard
							key={item[taskflow.data.items.idField]}
							item={item}
							previewItem={previewItem}
							setPreviewItem={setPreviewItem}
						/>
					))}
				</Stack>
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
