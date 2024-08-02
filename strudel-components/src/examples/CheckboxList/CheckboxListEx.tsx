import { useState } from "react";
import { CheckboxList } from "../../../lib/main"
import { CheckboxOptionValue } from "../../../lib/components/CheckboxList";

export const CheckboxListEx: React.FC = () => {
  const [values, setValues] = useState<CheckboxOptionValue[] | null>(null);

  const handleChange = (values: CheckboxOptionValue[] | null) => {
    setValues(values);
  }

  return (
    <CheckboxList 
      values={values}
      onChange={handleChange}
      options={[
        {
          label: 'Checkbox 1',
          value: 1
        },
        {
          label: 'Checkbox 2',
          value: 2
        }
      ]} 
    />
  )
}