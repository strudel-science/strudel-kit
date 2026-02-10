import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { getUsersOptions } from '../../api/queries';
import { Card, CardContent, Container, Typography } from '@mui/material';

export const Route = createFileRoute('/users/')({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(getUsersOptions());
  },
  component: UsersPage,
});

function UsersPage() {
  const { data: users } = useSuspenseQuery(getUsersOptions());

  return (
    <Container sx={{ paddingTop: 2 }}>
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent>
            <Typography variant="h6">{user.fullname}</Typography>
            <Typography color="textSecondary">{user.email}</Typography>
          </CardContent>
        </Card>
      ))}
      {users.length === 0 && <div>No users found.</div>}
    </Container>
  );
}
