import { Button, Container, Stack } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/playground/')({
  component: Playground,
});

/**
 * A blank canvas to test out content and components
 */
function Playground() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Container
      maxWidth="xl"
      /**
       * Style STRUDEL and MUI components using the `sx` prop.
       */
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      {/**
       * Add your own components here!
       * See MUI's component library: https://mui.com/material-ui/all-components/
       */}
      <h1>Playground</h1>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        <Button variant="contained" onClick={handleIncrement}>
          Increment
        </Button>
        <p>{count}</p>
      </Stack>
    </Container>
  );
}
