import { FilterState } from "../../../lib/components/FilterContext"
import { FilterField } from "../../../lib/components/FilterField"
import { Filters } from "../../../lib/components/Filters"

export const FiltersExGroups: React.FC = () => {
  const handleFilterChange = (filters: FilterState['activeFilters']) => {
    console.log(filters);
  }
  return (
    <Filters
      header="My Filters"
      onChange={handleFilterChange}
      sx={{
        maxWidth: '400px'
      }}
    >
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
    </Filters>
  )
}