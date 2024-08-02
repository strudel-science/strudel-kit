import { LabelValueTable } from "../../../lib/main"

export const LabelValueTableEx: React.FC = () => {
  return (
    <LabelValueTable
      rows={[
        {
          label: 'Attribute 1',
          value: 'Value 1',
        },
        {
          label: 'Attribute 2',
          value: 'Value 2',
        },
        {
          label: 'Attribute 3',
          value: 'Value 3',
        }
      ]}
    />
  )
}