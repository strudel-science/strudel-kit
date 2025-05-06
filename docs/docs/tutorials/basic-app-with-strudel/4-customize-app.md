# Customize Your App

For most web applications, it is important to include content and alterations that are unique to your project. In this section you will learn the basics of how to make the app your own by changing the theme, styles, and general content.

## Modify the Global Theme

STRUDEL leverages [MUI](https://mui.com/) theming capabilities to style much of the app. Because STRUDEL uses MUI for its low-level components, using the theme makes it easy to make app-wide changes and keep things consistent. To learn more about how MUI theming works, checkout [their documentation on the topic](https://mui.com/material-ui/customization/theming/). For this tutorial, the explanations will be kept brief.

To get started modifying the theme, open up the theme file in `src/theme.tsx`. In this file you will find the `theme` object. This is where all of the theme values are configured and it has been prepopulated with many default values to make editing the theme simpler.

### Change the Color Palette

Let's start out by changing the color palette for the app. Right now, the primary color for the app is blue (`#1976d2`). Start by changing the `primary` `main` color to amaranth red (`#dd4050`):

```js title="theme.tsx"
primary: {
  main: '#dd4050',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
},
```

The essential colors in the palette each have a `main`, `light`, and `dark` version. You can specify the `light` and `dark` versions explicitly or you can remove them and they will be generated automatically based on the `main` color. For now, set the `light` and `dark` versions to bright pink (`#e36370`) and cardinal red (`#bf2231`) respectively.

```js title="theme.tsx"
primary: {
  main: '#dd4050',
  light: '#e36370',
  dark: '#bf2231',
  contrastText: '#fff',
},
```

Refresh the page and see if the blue text and buttons changed to the red tones.

While you are here, also change the `secondary` colors to electric blue tones. Change `main` to `#00e9f5`, `light` to `#5ef6ff`, and `dark` to `#00c2cc`. Because this is a lighter color in general, also change the `contrastText` to black (`#000`). This controls the color of text that is rendered on top of the color and ensures the contrast is still readable and accessible.

```js title="theme.tsx"
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

```js title="theme.tsx"
palette: {
  mode: 'light',
```

Change the `mode` from `light` to `dark`:

```js title="theme.tsx"
palette: {
  mode: 'dark',
```

You also need to adjust the `default` background color and the `paper` background color. To do this, find those two options nested under `palette.background`. Set `background.default` to eerie black (`#191919`) and `background.paper` to a lighter eerie black (`#232323`):

```js title="theme.tsx"
background: {
  default: '#191919',
  paper: '#232323',
},
```

Refresh the page and see how the new dark mode looks.

### Change the Default Font

The theme also controls the default font used throughout the app. All font properties are nested inside of the `typography` property. Try changing the default `fontFamily` from `Helvetica` to `Avenir`:

```js title="theme.tsx"
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

```jsx title="TopBar.tsx"
<AppBar
  color="default"
  position="static"
  component="nav"
  sx={{
    backgroundColor: 'white',
    borderBottom: '1px solid',
    borderBottomColor: 'grey.300',
    boxShadow: 'none',
  }}
>
```

There are many ways to modify the styles of the elements in a component or on a page. In this tutorial you will use the MUI `sx` prop to change the styles of specific components. It's possible to use traditional methods like CSS classes for this too, but the `sx` prop allows you to easily utilize the global theme and create dynamic styles and states. You can read more about the `sx` prop in the [MUI documentation](https://mui.com/material-ui/customization/how-to-customize/).

To change the background color of the `AppBar` add the `sx` prop and set the `backgroundColor` property to `primary.main`:

```jsx title="TopBar.tsx"
<AppBar
  color="default"
  position="static"
  component="nav"
  sx={{
    backgroundColor: 'primary.main',
    borderBottom: '1px solid',
    borderBottomColor: 'grey.300',
    boxShadow: 'none',
  }}
>
```

The `primary.main` string is a reference to the value in the `theme.palette` object in `src/theme.tsx`. You can reference any value in the theme's `palette` inside of the `sx` prop. You can also just as easily use an explicit color code.

You may have noticed that the color of the navigation bar changed, but now the links are not very readable because they are also red. Use the `sx` prop to change the text of each `AppLink` component to white (`#ffffff`):

```jsx title="TopBar.tsx"
<AppLink to="/" sx={{ color: '#ffffff' }}>
  <ImageWrapper height={30}>
    <img
      src={cleanPath(
        `${import.meta.env.BASE_URL}/strudel-logo-icon.png`
      )}
    />
  </ImageWrapper>
</AppLink>
<AppLink to="/" sx={{ color: '#ffffff' }}>
  <Typography variant="h6" component="div" fontWeight="bold">
    Planets
  </Typography>
</AppLink>
<AppLink to="/solar-system" sx={{ color: '#ffffff' }}>
  Solar System
</AppLink>
```

Refresh the page to see the new navigation bar.

You can also use the `sx` prop to make advanced style changes like changing the hover state of an element. To do add a different style for the hover state, add a new property to the `sx` object called `'&:hover'`. You can then give this new property its own object of styles which tells the component how it should look when it is being hovered by a user's cursor.

Add a hover state style to the Solar System `AppLink` so that its color is `secondary.light` on hover:

```jsx title="TopBar.tsx"
<AppLink
  to="/solar-system"
  sx={{
    color: '#ffffff',
    '&:hover': {
      color: 'secondary.light',
    },
  }}
>
  Solar System
</AppLink>
```

Refresh the page and watch the Solar System link change color when you mouse over it.

## Add a Project Logo

Now, let's replace the "Tutorial Science App" title in the navigation bar with a logo for a project. First, download the tutorial app logo from GitHub:

[Click to open example-logo.png](/img/tutorial/example-logo.png). Then right-click the image and click "Save Image As..."

Place `example-logo.png` in the `public` folder alongside your other images.

Now, go back to the `TopBar.tsx` component in `src/components`. Find the `<ImageWrapper>` component and replace "strudel-logo-icon.png" with "example-logo.png":

```jsx title="TopBar.tsx"
<ImageWrapper height={30}>
  <img src={cleanPath(`${import.meta.env.BASE_URL}/example-logo.png`)} />
</ImageWrapper>
```

You can also delete the extra `<AppLink>` that says "Planets" now that we have our logo in the bar. Delete the following lines:

```jsx title="TopBar.tsx"
<AppLink to="/">
  <Typography variant="h6" component="div" fontWeight="bold">
    My Project
  </Typography>
</AppLink>
```

Save the file and you should see your new logo in the navbar.

Hooray! You are all done customizing app styles for this tutorial.

## Next Steps

In the last section of this tutorial, you will put what you have learned together to edit the app's home page.
