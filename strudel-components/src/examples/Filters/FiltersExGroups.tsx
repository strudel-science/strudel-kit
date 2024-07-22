import { FilterState } from "../../../lib/components/FilterContext"
import { FilterField } from "../../../lib/components/FilterField"
import { FilterGroup } from "../../../lib/components/FilterGroup"
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
  )
}