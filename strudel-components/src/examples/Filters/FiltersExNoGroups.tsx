import { CheckboxList } from "../../../lib/components/CheckboxList"
import { FilterField } from "../../../lib/components/FilterField"
import { Filters } from "../../../lib/components/Filters"
import { StrudelSlider } from "../../../lib/components/StrudelSlider"

export const FiltersExNoGroups: React.FC = () => { 
  return (
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
  )
}