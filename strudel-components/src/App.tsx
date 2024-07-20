import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Filters } from '../lib/components/Filters'
import { Box, CssBaseline, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import { CheckboxList } from '../lib/components/CheckboxList'
import { StrudelSlider } from '../lib/components/StrudelSlider'
import { FilterGroup } from '../lib/components/FilterGroup'
import { FilterField } from '../lib/components/FilterField'
import { FilterContext } from '../lib/components/FilterContext'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Stack spacing={2} sx={{ padding: 2 }}>
          <FilterContext>
            <Filters
              header={<Typography fontWeight="bold">My Filters</Typography>}
              sx={{
                maxWidth: '400px'
              }}
            >
              <FilterGroup label="My Accordion 1" groupId={1}>
                <FilterField
                  label="Slider"
                  filter={
                    <StrudelSlider
                      valueLabelDisplay="auto"
                      min={0}
                      max={1000}
                      onChangeCommitted={(event, values) => null}
                    />
                  }
                />
                <FilterField
                  label="Slider 2"
                  filter={
                    <StrudelSlider
                      valueLabelDisplay="auto"
                      min={0}
                      max={1000}
                      onChangeCommitted={(event, values) => null}
                    />
                  }
                />
                <FilterField 
                  label="Assembly"
                  filter={
                    <CheckboxList
                      options={[
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
                      ]}
                      onChange={(values) => null}
                    />
                  }
                />
              </FilterGroup>
              <FilterGroup label="My Accordion 2" groupId={2}>
                <FilterField
                  label="Slider"
                  filter={
                    <StrudelSlider
                      valueLabelDisplay="auto"
                      min={0}
                      max={1000}
                      onChangeCommitted={(event, values) => null}
                    />
                  }
                />
                <FilterField
                  label="Slider 2"
                  filter={
                    <StrudelSlider
                      valueLabelDisplay="auto"
                      min={0}
                      max={1000}
                      onChangeCommitted={(event, values) => null}
                    />
                  }
                />
              </FilterGroup>
            </Filters>
          </FilterContext>
          <Filters
            header="No Groups"
            grouped={false}
            sx={{
              maxWidth: '400px'
            }}
          >
              <FilterField
                label="Slider"
                filter={
                  <StrudelSlider
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    onChangeCommitted={(event, values) => null}
                  />
                }
              />
              <FilterField
                label="Slider 2"
                filter={
                  <StrudelSlider
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    onChangeCommitted={(event, values) => null}
                  />
                }
              />
              <FilterField 
                  label="Assembly"
                  filter={
                    <CheckboxList
                      options={[
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
                      ]}
                      onChange={(values) => null}
                    />
                  }
                />
              <FilterField
                label="Slider"
                filter={
                  <StrudelSlider
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    onChangeCommitted={(event, values) => null}
                  />
                }
              />
              <FilterField
                label="Slider 2"
                filter={
                  <StrudelSlider
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    onChangeCommitted={(event, values) => null}
                  />
                }
              />
          </Filters>
        </Stack>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
