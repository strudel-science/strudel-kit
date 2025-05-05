# Customize the Home Page

STRUDEL generates a default home page in `src/pages/index.tsx`. In this section you will add some content, images, and links to the home page.

First, let's remove the contents of the existing home page. Replace the contents of `src/pages/index.tsx` with the following barebones component:

```jsx title="index.tsx"
import { Container } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

/**
 * Home page component that renders at the root route /
 */
function Index() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      My home page
    </Container>
  );
}
```

Now, let's add a title. To add a title, use the `Typography` component from MUI. This is a general component for different variations of text. You can read more about the `Typography` component on the[ MUI `Typography` documentation page](https://mui.com/material-ui/react-typography/).

Add the `Typography` component to the `'@mui/material'` import:

```jsx title="index.tsx"
import { Container, Typography } from '@mui/material';
```

Then add a `Typography` title component inside of the `<Container>` component:

```jsx title="index.tsx"
<Container
  maxWidth="lg"
  sx={{
    marginTop: 3,
    marginBottom: 3,
  }}
>
  <Typography variant="h1">Planets of the Solar System</Typography>
</Container>
```

The `variant` prop is used to specify the kind of text to display in the component. The `h1` option stands for "Heading 1" and it's used for top-level page headings. If you look at the new title in the browser, you may notice that the default `h1` size is quite large. Make it smaller by setting `fontSize` to `2rem`.

```jsx title="index.tsx"
<Typography variant="h1" fontSize="2rem">
  Planets of the Solar System
</Typography>
```

That looks better. Now, let's add a description section underneath. For this section you are going to use two new components: `Paper` and `Stack`. These are both components from MUI. The `Paper` component is used to wrap content in an elevated panel and the `Stack` component is used to organize content in vertical or horizontal layouts with equal spacing. Learn detailed information about [Paper](https://mui.com/material-ui/react-paper/) and [Stack](https://mui.com/material-ui/react-stack/) in the MUI docs.

Here is the text to use for the description section (from [Wikipedia](https://en.wikipedia.org/wiki/Solar_System)):

> The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. The largest of these objects are the eight planets, which in order from the Sun are four terrestrial planets (Mercury, Venus, Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants (Uranus and Neptune). The Solar System developed 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc.

First add `Paper` to the `'@material/ui'` imports:

```jsx title="index.tsx"
import { Container, Paper, Typography } from '@mui/material';
```

Then add a new `Paper` component underneath the title's `Typography` and embed a `Typography` component with the description text from above:

```jsx title="index.tsx"
<Paper
  sx={{
    padding: 2,
  }}
>
  <Typography>
    The Solar System is the gravitationally bound system of the Sun and the
    objects that orbit it. The largest of these objects are the eight planets,
    which in order from the Sun are four terrestrial planets (Mercury, Venus,
    Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants
    (Uranus and Neptune). The Solar System developed 4.6 billion years ago when
    a dense region of a molecular cloud collapsed, forming the Sun and a
    protoplanetary disc.
  </Typography>
</Paper>
```

Now create some space between the `Paper` and title `Typography` components by wrapping them in a `Stack` component. First add `Stack` to the `'@material/ui'` imports:

```jsx title="index.tsx"
import { Container, Paper, Stack, Typography } from '@mui/material';
```

Then wrap both components inside of a `Stack`:

```jsx title="index.tsx"
<Stack>
  <Typography variant="h1" fontSize="2rem">
    Planets of the Solar System
  </Typography>
  <Paper
    sx={{
      padding: 2,
    }}
  >
    <Typography>
      The Solar System is the gravitationally bound system of the Sun and the
      objects that orbit it. The largest of these objects are the eight planets,
      which in order from the Sun are four terrestrial planets (Mercury, Venus,
      Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants
      (Uranus and Neptune). The Solar System developed 4.6 billion years ago
      when a dense region of a molecular cloud collapsed, forming the Sun and a
      protoplanetary disc.
    </Typography>
  </Paper>
</Stack>
```

That's looking pretty good!

## Next Steps

In the last section you will find resources to continue building your app and learning the STRUDEL Tech Stack.
