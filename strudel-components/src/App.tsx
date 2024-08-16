import { CssBaseline, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import { GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SciDataGrid, SciDataGridColDef } from '../lib/components/SciDataGrid'
import { Formula } from '../lib/components/Formula'
import { SciDataGridEx } from './examples/SciDataGrid/SciDataGridEx'
import { FiltersExGroups } from './examples/Filters/FiltersExGroups'
import { FiltersExNoGroups } from './examples/Filters/FiltersExNoGroups'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <SciDataGridEx />
        {/* <FiltersExGroups /> */}
        {/* <FiltersExNoGroups /> */}
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
