import { Typography } from "@mui/material"
import { FilterField } from "../../../lib/components/FilterField"
import { FilterGroup } from "../../../lib/components/FilterGroup"
import { Filters } from "../../../lib/components/Filters"
import { StrudelSlider } from "../../../lib/components/RangeSlider"
import { CheckboxList } from "../../../lib/components/CheckboxList"

export const FiltersExGroups: React.FC = () => { 
  return (
    <Filters
      header={<Typography fontWeight="bold">My Filters</Typography>}
      sx={{
        maxWidth: '400px'
      }}
    >
      <FilterGroup label="My Accordion 1">
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
      <FilterGroup label="My Accordion 2">
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
  )
}