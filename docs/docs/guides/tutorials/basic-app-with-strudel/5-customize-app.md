# Customize Your App

For most web applications, it is important to include content and alterations that are unique to your project. In this section you will learn the basics of how to make the app your own by changing the theme, styles, and general content.

## Modify the Global Theme

There are two ways to modify the global theme with STRUDEL. To make some of the most commono modifications, you can use the `theme` object in `strudel.config.ts`. To make more advanced customizations, STRUDEL leverages [MUI](https://mui.com/) theming capabilities which live in the `theme` object in `src/theme.tsx`. To learn more about how MUI theming works, checkout [their documentation on the topic](https://mui.com/material-ui/customization/theming/). For this tutorial, the explanations will be kept brief.

To get started modifying the theme, open up `strudel.config.ts`. In this file you will find the `theme` object that handles common attributes like palette colors and font families. It has been prepopulated with default values to make editing the theme even simpler.

### Change the Color Palette

Let's start out by changing the color palette for the app. Right now, the primary color for the app is blue (`#1976d2`). Start by changing the `primary` `main` color to amaranth red (`#dd4050`):

```js
primaryColor: '#dd4050',
```

Save this file, refresh the page, and see if the blue text and buttons changed to the red tones.

While you are here, also change the `secondary` color to electric blue (`#00e9f5`):

```js
secondaryColor: '#00e9f5',
```

### Convert to Dark Mode

The new palette is looking good but what if you want to change the more prevalant base and background colors of the app? Let's convert the whole app to dark mode to demonstrate how to do that.

First, find the `mode` option nested under `theme` in `strudel.config.ts`. This value controls how many of the inner components and various component states are rendered:

Change the `mode` from `light` to `dark`:

```js
mode: 'dark',
```

You also need to adjust the `default` background color and the `paper` background color. To do this, find those two options nested under `theme`. Set `backgroundColor` to eerie black (`#191919`) and `paperBackgroundColor` to a lighter eerie black (`#232323`):

```js
backgroundColor: '#191919',
paperBackgroundColor: '#232323',
```

Refresh the page and see how the new dark mode looks.

### Change the Default Font

The theme also controls the default font used throughout the app. Try changing the default `fontFamily` from `Helvetica` to `Avenir`:

```js
fontFamily: '"Avenir", "Verdana", "Arial", sans-serif',
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

The `primary.main` string is a reference to the value in the `theme.palette` object in `src/theme.tsx`. You can reference any value in the theme's `palette` inside of the `sx` prop. You can also just as easily use an explicit color code.

You may have noticed that the color of the navigation bar changed, but now the links are not very readable because they are also red. Use the `sx` prop to change the text of each `AppLink` component to white (`#FFFFFF`):

```js
<AppLink 
  to="/" 
  sx={{ 
    color: '#FFFFFF'
  }}
>
  {!config.navbar.logo && (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <HomeIcon />
    </IconButton>
  )}
  {config.navbar.logo && (
    <ImageWrapper height={30}>
      <img src={config.navbar.logo} />
    </ImageWrapper>
  )}
</AppLink>
<AppLink 
  to="/" 
  sx={{ 
    color: '#FFFFFF'
  }}
>
  <Typography variant="h6" component="div">
    {config.navbar.title}
  </Typography>
</AppLink>
{config.navbar.items.map((item, i) => (
  <AppLink 
    key={`${item.path}-${i}`} 
    to={item.path}
    sx={{ 
      color: '#FFFFFF'
    }}
  >
    {item.label}
  </AppLink>
))}
```

Refresh the page to see the new navigation bar.

You can also use the `sx` prop to make advanced style changes like changing the hover state of an element. To do add a different style for the hover state, add a new property to the `sx` object called `'&:hover'`. You can then give this new property its own object of styles which tells the component how it should look when it is being hovered by a user's cursor.

Add a hover state style to the dynamic navbar items' `AppLink` so that their color is `secondary.light` on hover:

```js
{config.navbar.items.map((item, i) => (
  <AppLink 
    key={`${item.path}-${i}`} 
    to={item.path}
    sx={{ 
      color: '#FFFFFF',
      '&:hover': {
        color: 'secondary.light',
      }
    }}
  >
    {item.label}
  </AppLink>
))}
```

Refresh the page and watch the Explore link change color when you mouse over it.

## Add a Project Logo

Now, let's replace the "Tutorial Science App" title in the navigation bar with a logo for a project. First, download the tutorial app logo from GitHub:

[Click to download example-logo.png from GitHub](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/example-logo.png?raw=true)

Place `example-logo.png` in the `public` folder alongside your other images.

Now, go back to `strudel.config.ts` and find the `navbar.logo` property.

Replace the value with your new logo:

```js
logo: 'example-logo.png',
```

Save the file and you should see your new logo in the navbar.

Hooray! You are all done customizing app styles for this tutorial.

## Next Steps

In the last section of this tutorial, you will put what you have learned together to edit the app's home page.