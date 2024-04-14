import { LabelValueTable } from '../lib/components/LabelValueTable'

function App() {
  return (
    <>
      Test
      <LabelValueTable 
        rows={[
          {
            label: 'Test',
            value: 17
          },
          {
            label: 'Test B',
            value: 29
          }
        ]}
      />
    </>
  )
}

export default App
