# Customize Your App

For most web applications, it is important to include content and alterations that are unique to your project. In this section we will cover the basics of how to make the app your own by changing the theme, styles, and general content.

## Modify the Theme

STRUDEL leverages MUI theming capabilities to style much of the app. Because STRUDEL uses MUI for its low-level components, using the theme makes it easy to make app-wide changes and keep things consistent. To learn more about how MUI theming works, checkout (their documentation on the topic)[https://mui.com/material-ui/customization/theming/]. For this tutorial, we will keep explanations brief.

To get started modifying the theme, open up the theme file in `src/app/theme.tsx`. In this file you will find the `theme` object. This is where all of the theme values are configured and it has been prepopulated with many default values to make editing the theme simpler.

### Change the Color Palette

Let's start out by changing the color palette for the app. Right now, the primary color for the app is blue (`#1976d2`). Start by changing the `primary` `main` color to amaranth red (`#DD4050`):

```js
primary: {
  main: '#DD4050',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
},
```

The essential colors in the palette each have a `main`, `light`, and `dark` version. You can specify the `light` and `dark` versions explicitly or you can remove them and they will be generated automatically based on the `main` color. For now, set the `light` and `dark` versions to bright pink (`#E36370`) and cardinal red (`#BF2231`) respectively.

```js
primary: {
  main: '#DD4050',
  light: '#E36370',
  dark: '#BF2231',
  contrastText: '#fff',
},
```

Refresh the page and see if the blue text and buttons changed to the red tones.

TODO: add image of red palette

While you are here, also change the `secondary` colors to electric blue tones. Change `main` to `#00E9F5`, `light` to `#5EF6FF`, and `dark` to `#00C2CC`. Because this is a lighter color in general, also change the `contrastText` to black (`#000`). This controls the color of text that is rendered on top of the color and ensures the contrast is still readable and accessible.

```js
secondary: {
  main: '#00E9F5',
  light: '#5EF6FF',
  dark: '#00C2CC',
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

TODO: add image of final dark mode

## Modify Specific Styles

You just learned how to modify the global app theme. Now let's learn how to customize the style of a specific component. In this step you will change the color of the top level navigation bar.





