import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Filters } from '../lib/components/Filters'
import { Box, CssBaseline, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import { CheckboxList } from '../lib/components/CheckboxList'
import { RangeSlider } from '../lib/components/RangeSlider'
import { FilterGroup } from '../lib/components/FilterGroup'
import { FilterField } from '../lib/components/FilterField'
import { FilterContext, FilterState } from '../lib/components/FilterContext'

function App() {
  const handleFilterChange = (filters: FilterState['activeFilters']) => {
    console.log(filters);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Stack spacing={2} sx={{ padding: 2 }}>
          <Filters
            header="My Filters"
            onChange={handleFilterChange}
            sx={{
              maxWidth: '400px'
            }}
          >
            <FilterGroup label="My Accordion 1" groupId={1}>
              <FilterField
                label="Slider"
                field="field1"
                filterComponent="RangeSlider"
                filterProps={{
                  min: 0,
                  max: 100
                }}
              />
              <FilterField
                label="Slider 2"
                field="field2"
                filterComponent="RangeSlider"
                filterProps={{
                  min: 100,
                  max: 400
                }}
              />
              <FilterField
                label="Checkboxes"
                field="field3"
                filterComponent="CheckboxList"
                filterProps={{
                  options: [
                    {
                      label: "JGI",
                      value: "JGI"
                    },
                    {
                      label: "BYU",
                      value: "BYU"
                    },
                    {
                      label: "AGP",
                      value: "AGP"
                    }
                  ]
                }}
              />
            </FilterGroup>
            <FilterGroup label="My Accordion 2" groupId={2}>
              <FilterField
                label="Slider"
                field="field4"
                filterComponent="RangeSlider"
                filterProps={{
                  min: 0,
                  max: 100
                }}
              />
              <FilterField
                label="Slider 2"
                field="field5"
                filterComponent="RangeSlider"
                filterProps={{
                  min: 100,
                  max: 400
                }}
              />
              <FilterField
                label="Checkboxes"
                field="field6"
                filterComponent="CheckboxList"
                filterProps={{
                  options: [
                    {
                      label: "JGI",
                      value: "JGI"
                    },
                    {
                      label: "BYU",
                      value: "BYU"
                    },
                    {
                      label: "AGP",
                      value: "AGP"
                    }
                  ]
                }}
              />
            </FilterGroup>
          </Filters>
          <Filters
            header="No Groups"
            onChange={handleFilterChange}
            grouped={false}
            sx={{
              maxWidth: '400px'
            }}
          >
              <FilterField
                label="Text 1"
                field="field3"
                tooltip='This cool text field'
                filterComponent="TextField"
              />
              <FilterField
                label="Slider 2"
                field="field1"
                tooltip='This cool slider'
                filterComponent="RangeSlider"
                filterProps={{
                  min: 100,
                  max: 400
                }}
              />
              <FilterField
                label="Slider 2"
                field="field2"
                filterComponent="RangeSlider"
                filterProps={{
                  min: 100,
                  max: 400
                }}
              />
          </Filters>
        </Stack>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
