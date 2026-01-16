import { Button, Container, Stack, Typography } from '@mui/material';
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
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      <Typography component="h1" variant="h3">Playground</Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
          marginTop: 2,
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
