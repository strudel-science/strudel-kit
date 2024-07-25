import { CssBaseline, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import { GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SciDataTable, SciDataTableColDef } from '../lib/components/SciDataTable'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <SciDataTable rows={rows} columns={columns} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

const columns: SciDataTableColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First Name',
    units: 'meters',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    decimals: 4,
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'stuff',
    headerName: 'Stuff',
    width: 110,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, stuff: ['one', 'two', 'three', 'two', 'three', 'two', 'three'] },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 0 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 0.0000001 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 31 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default App
