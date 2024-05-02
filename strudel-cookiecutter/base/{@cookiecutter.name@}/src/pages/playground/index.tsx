import { Button, Container, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Layout } from '../../components/Layout';

/**
 * A blank canvas to test out content and components
 */
const Playground: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <Layout>
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
            alignItems: 'center'
          }}
        >
          <Button variant="contained" onClick={handleIncrement}>Increment</Button>
          <p>{count}</p>
        </Stack>
      </Container>
    </Layout>
  );
}

export default Playground;