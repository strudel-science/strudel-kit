import { FilterState } from "../../../lib/components/FilterContext"
import { FilterField } from "../../../lib/components/FilterField"
import { Filters } from "../../../lib/components/Filters"

export const FiltersExNoGroups: React.FC = () => {
  const handleFilterChange = (filters: FilterState['activeFilters']) => {
    console.log(filters);
  }
  return (
    <Filters
      header="My Filters"
      grouped={false}
      onChange={handleFilterChange}
      sx={{
        maxWidth: '400px'
      }}
    >
      <FilterField
        label="Slider"
        field="field1"
        operator="between-inclusive"
        filterComponent="RangeSlider"
        filterProps={{
          min: 0,
          max: 100
        }}
      />
      <FilterField
        label="Slider 2"
        field="field2"
        operator="between-inclusive"
        filterComponent="RangeSlider"
        filterProps={{
          min: 100,
          max: 400
        }}
      />
      <FilterField
        label="Checkboxes"
        field="field3"
        operator="contains-one-of"
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
        operator="between-inclusive"
        filterComponent="RangeSlider"
        filterProps={{
          min: 0,
          max: 100
        }}
      />
      <FilterField
        label="Slider 2"
        field="field5"
        operator="between-inclusive"
        filterComponent="RangeSlider"
        filterProps={{
          min: 100,
          max: 400
        }}
      />
      <FilterField
        label="Checkboxes"
        field="field6"
        operator="contains-one-of"
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