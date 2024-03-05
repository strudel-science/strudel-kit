# Customize the Home Page

STRUDEL generates a default home page in `src/app/home/HomePage.tsx`. In this section you will add some content, images, and links to the home page.

First, let's add a title. To add a title, use the `Typography` component from MUI. This is a general component for different variations of text. You can read more about the `Typography` component on the[ MUI `Typography` documentation page](https://mui.com/material-ui/react-typography/).

In `src/app/home/HomePage.tsx`, add the `Typography` component to the `'@mui/material'` import:

```js
import { Box, Container, Paper, Typography } from '@mui/material';
```

Then replace the "Welcome to your STRUDEL app!" text with a `Typography` title:

```js
<Paper
  sx={{
    padding: 2
  }}
>
  <Typography variant="h1">Planets of the Solar System</Typography>
</Paper>
```

The `variant` prop is used to specify the kind of text to display in the component. The `h1` option stands for "Heading 1" and it's used for top-level page headings. If you look at the new title in the browser, you may notice that the default `h1` size is quite large. Make it smaller by setting `fontSize` to `2rem`.

```js
<Typography variant="h1" fontSize="2rem">Planets of the Solar System</Typography>
```

That looks better. Now, let's add a description section underneath. For this section we are going to discuss two new components: `Paper` and `Stack`. These are both components from MUI. The `Paper` component is used to wrap content in an elevated panel and the `Stack` component is used to organize content in vertical or horizontal layouts with equal spacing. Learn detailed information about [Paper](https://mui.com/material-ui/react-paper/) and [Stack](https://mui.com/material-ui/react-stack/) in the MUI docs.

Here is the text to use for the description section (from [Wikipedia](https://en.wikipedia.org/wiki/Solar_System)):

> The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. The largest of these objects are the eight planets, which in order from the Sun are four terrestrial planets (Mercury, Venus, Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants (Uranus and Neptune). The Solar System developed 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc.

Add a new `Paper` component underneath the title's `Paper` (also copy over the same padding for the new `Paper`) and embed a `Typography` component with the description text from above:

```js
<Paper
  sx={{
    padding: 2
  }}
>
  <Typography>
    The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. The largest of these objects are the eight planets, which in order from the Sun are four terrestrial planets (Mercury, Venus, Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants (Uranus and Neptune). The Solar System developed 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc.
  </Typography>
</Paper>
```

Now create some space between the two `Paper` components by wrapping them in a `Stack` component. First add `Stack` to the `'@material/ui'` imports:

```js
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
```

Then wrap both `Paper` components inside of a `Stack`:

```js
<Stack>
  <Paper
    sx={{
      padding: 2
    }}
  >
    <Typography variant="h1" fontSize="2rem">Planets of the Solar System</Typography>
  </Paper>
  <Paper
    sx={{
      padding: 2
    }}
  >
    <Typography>
      The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. The largest of these objects are the eight planets, which in order from the Sun are four terrestrial planets (Mercury, Venus, Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants (Uranus and Neptune). The Solar System developed 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc.
    </Typography>
  </Paper>
</Stack>
```

That's looking pretty good!

Previous           |  Next
:-------------------------:|:-------------------------:
[Customize Your App](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/6-customize-app.md)  |  [Continue Learning](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/8-continue-learning.md)