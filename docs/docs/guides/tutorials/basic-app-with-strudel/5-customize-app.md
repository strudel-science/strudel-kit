# Customize Your App

:::warning

This tutorial was written for v0.0.2 through v0.0.9 of strudel-kit. It is currently in the process of being updated for v0.1.0. 
:::

For most web applications, it is important to include content and alterations that are unique to your project. In this section you will learn the basics of how to make the app your own by changing the theme, styles, and general content.

## Modify the Global Theme

STRUDEL leverages [MUI](https://mui.com/) theming capabilities to style much of the app. Because STRUDEL uses MUI for its low-level components, using the theme makes it easy to make app-wide changes and keep things consistent. To learn more about how MUI theming works, checkout [their documentation on the topic](https://mui.com/material-ui/customization/theming/). For this tutorial, the explanations will be kept brief.

To get started modifying the theme, open up the theme file in `src/app/theme.tsx`. In this file you will find the `theme` object. This is where all of the theme values are configured and it has been prepopulated with many default values to make editing the theme simpler.

### Change the Color Palette

Let's start out by changing the color palette for the app. Right now, the primary color for the app is blue (`#1976d2`). Start by changing the `primary` `main` color to amaranth red (`#dd4050`):

```js
primary: {
  main: '#dd4050',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
},
```

The essential colors in the palette each have a `main`, `light`, and `dark` version. You can specify the `light` and `dark` versions explicitly or you can remove them and they will be generated automatically based on the `main` color. For now, set the `light` and `dark` versions to bright pink (`#e36370`) and cardinal red (`#bf2231`) respectively.

```js
primary: {
  main: '#dd4050',
  light: '#e36370',
  dark: '#bf2231',
  contrastText: '#fff',
},
```

Refresh the page and see if the blue text and buttons changed to the red tones.

While you are here, also change the `secondary` colors to electric blue tones. Change `main` to `#00e9f5`, `light` to `#5ef6ff`, and `dark` to `#00c2cc`. Because this is a lighter color in general, also change the `contrastText` to black (`#000`). This controls the color of text that is rendered on top of the color and ensures the contrast is still readable and accessible.

```js
secondary: {
  main: '#00e9f5',
  light: '#5ef6ff',
  dark: '#00c2cc',
  contrastText: '#000',
},
```

### Convert to Dark Mode

The new palette is looking good but what if you want to change the more prevalant base and background colors of the app? Let's convert the whole app to dark mode to demonstrate how to do that.

First, find the `mode` option nested under `palette`. This value controls how many of the inner components and various component states are rendered:

```js
palette: {
  mode: 'light',
```

Change the `mode` from `light` to `dark`:

```js
palette: {
  mode: 'dark',
```

You also need to adjust the `default` background color and the `paper` background color. To do this, find those two options nested under `palette.background`. Set `background.default` to eerie black (`#191919`) and `background.paper` to a lighter eerie black (`#232323`):

```js
background: {
  default: '#191919',
  paper: '#232323',
},
```

Refresh the page and see how the new dark mode looks.

### Change the Default Font

The theme also controls the default font used throughout the app. All font properties are nested inside of the `typography` property. Try changing the default `fontFamily` from `Helvetica` to `Avenir`:

```js
typography: {
  htmlFontSize: 16,
  fontFamily: '"Avenir", "Verdana", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
},
```

Refresh the page and see if the font has changed. Some devices may not support `Avenir` and will instead show one of the backup fonts.

## Modify Specific Styles

You just learned how to modify the global app theme. Now let's learn how to customize the style of a specific component. In this step you will change the color of the top level navigation bar.

Open the component for the navigation bar in `src/components/TopBar.tsx` and find the `AppBar` component:

```js
<AppBar color="default" position="static">
```

There are many ways to modify the styles of the elements in a component or on a page. In this tutorial you will use the MUI `sx` prop to change the styles of specific components. It's possible to use traditional methods like CSS classes for this too, but the `sx` prop allows you to easily utilize the global theme and create dynamic styles and states. You can read more about the `sx` prop in the [MUI documentation](https://mui.com/material-ui/customization/how-to-customize/).

To change the background color of the `AppBar` add the `sx` prop and set the `backgroundColor` property to `primary.main`:

```js
<AppBar 
  color="default" 
  position="static"
  sx={{
    backgroundColor: 'primary.main'
  }}
>
```

The `primary.main` string is a reference to the value in the `theme.palette` object. You can reference any value in the theme's `palette` inside of the `sx` prop. You can also just as easily use an explicit color code.

You may have noticed that the color of the navigation bar changed, but now the links are not very readable because they are also red. Use the `sx` prop to change the text of the 3 `AppLink` components to white (`#fff`):

```js
<AppLink 
  to="/" 
  sx={{ 
    color: '#fff'
  }}
>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
  >
    <HomeIcon />
  </IconButton>
</AppLink>
<AppLink 
  to="/" 
  sx={{ 
    color: '#fff'
  }}
>
  <Typography variant="h6" component="div">
    {app.state.appTitle}
  </Typography>
</AppLink>
<AppLink 
  to="/" 
  sx={{ 
    color: '#fff'
  }}
>
  Explore
</AppLink>
```

Refresh the page to see the new navigation bar.

You can also use the `sx` prop to make advanced style changes like changing the hover state of an element. To do add a different style for the hover state, add a new property to the `sx` object called `'&:hover'`. You can then give this new property its own object of styles which tells the component how it should look when it is being hovered by a user's cursor.

Add a hover state style to the Explore page `AppLink` so that its color is `secondary.light` on hover:

```js
<AppLink 
  to="/" 
  sx={{ 
    color: '#fff',
    '&:hover': {
      color: 'secondary.light',
    }
  }}
>
  Explore
</AppLink>
```

Refresh the page and watch the Explore link change color when you mouse over it.

## Add a Project Logo

Now, let's replace the "Tutorial Science App" title in the navigation bar with a logo for a project. First, download the tutorial app logo from GitHub:

[Click to download example-logo.png from GitHub](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/example-logo.png?raw=true)

Place `example-logo.png` in `public/images` alongside your other images.

In `TopBar.tsx`, import the `ImageWrapper` component at the top of the file:

```js
import { ImageWrapper } from './ImageWrapper';
```

Then find the `AppLink` that contains the app title:

```js
<AppLink 
  to="/" 
  sx={{ 
    color: '#fff'
  }}
>
  <Typography variant="h6" component="div">
    {app.state.appTitle}
  </Typography>
</AppLink>
```

Replace the whole `Typography` component with an `ImageWrapper` and `img` element. Then, reference the new logo image in the `src` attribute of the `img`. You can also remove the `sx` prop from this `AppLink` because it's no longer necessary:

```js
<AppLink to="/">
  <ImageWrapper height="50px">
    <img src="images/example-logo.png" alt="PLANETS app logo" />
  </ImageWrapper>
</AppLink>
```

The above snippet also includes a `height` prop on the `ImageWrapper` and an `alt` prop on the `img`. The `height` prop specifies how tall the image should be in pixels. The width will automatically scale based on the height value. 

Refresh the browser and check out your new app logo in the navigation bar.

![Screenshot of the finished solar system page with new logo and dark mode theme in a browser](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/final-explore-data.png?raw=true)

Hooray! You are all done customizing app styles for this tutorial.

## Next Steps

In the last section of this tutorial, you will put what you have learned together to edit the app's home page.