import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CdBz_BW3.js";import{M as s}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Tutorials/Get Started With STRUDEL/Customize App"}),`
`,e.jsx(o.h1,{id:"customize-your-app",children:"Customize Your App"}),`
`,e.jsx(o.p,{children:"For most web applications, it is important to include content and alterations that are unique to your project. In this section you will learn the basics of how to make the app your own by changing the theme, styles, and general content."}),`
`,e.jsx(o.h2,{id:"modify-the-global-theme",children:"Modify the Global Theme"}),`
`,e.jsxs(o.p,{children:["STRUDEL leverages ",e.jsx(o.a,{href:"https://mui.com/",rel:"nofollow",children:"MUI"})," theming capabilities to style much of the app. Because STRUDEL uses MUI for its low-level components, using the theme makes it easy to make app-wide changes and keep things consistent. To learn more about how MUI theming works, checkout ",e.jsx(o.a,{href:"https://mui.com/material-ui/customization/theming/",rel:"nofollow",children:"their documentation on the topic"}),". For this tutorial, the explanations will be kept brief."]}),`
`,e.jsxs(o.p,{children:["To get started modifying the theme, open up the theme file in ",e.jsx(o.code,{children:"src/theme.tsx"}),". In this file you will find the ",e.jsx(o.code,{children:"theme"})," object. This is where all of the theme values are configured and it has been prepopulated with many default values to make editing the theme simpler."]}),`
`,e.jsx(o.h3,{id:"change-the-color-palette",children:"Change the Color Palette"}),`
`,e.jsxs(o.p,{children:["Let's start out by changing the color palette for the app. Right now, the primary color for the app is blue (",e.jsx(o.code,{children:"#1976d2"}),"). Start by changing the ",e.jsx(o.code,{children:"primary"})," ",e.jsx(o.code,{children:"main"})," color to amaranth red (",e.jsx(o.code,{children:"#dd4050"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`primary: {
  main: '#dd4050',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
},
`})}),`
`,e.jsxs(o.p,{children:["The essential colors in the palette each have a ",e.jsx(o.code,{children:"main"}),", ",e.jsx(o.code,{children:"light"}),", and ",e.jsx(o.code,{children:"dark"})," version. You can specify the ",e.jsx(o.code,{children:"light"})," and ",e.jsx(o.code,{children:"dark"})," versions explicitly or you can remove them and they will be generated automatically based on the ",e.jsx(o.code,{children:"main"})," color. For now, set the ",e.jsx(o.code,{children:"light"})," and ",e.jsx(o.code,{children:"dark"})," versions to bright pink (",e.jsx(o.code,{children:"#e36370"}),") and cardinal red (",e.jsx(o.code,{children:"#bf2231"}),") respectively."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`primary: {
  main: '#dd4050',
  light: '#e36370',
  dark: '#bf2231',
  contrastText: '#fff',
},
`})}),`
`,e.jsx(o.p,{children:"Refresh the page and see if the blue text and buttons changed to the red tones."}),`
`,e.jsxs(o.p,{children:["While you are here, also change the ",e.jsx(o.code,{children:"secondary"})," colors to electric blue tones. Change ",e.jsx(o.code,{children:"main"})," to ",e.jsx(o.code,{children:"#00e9f5"}),", ",e.jsx(o.code,{children:"light"})," to ",e.jsx(o.code,{children:"#5ef6ff"}),", and ",e.jsx(o.code,{children:"dark"})," to ",e.jsx(o.code,{children:"#00c2cc"}),". Because this is a lighter color in general, also change the ",e.jsx(o.code,{children:"contrastText"})," to black (",e.jsx(o.code,{children:"#000"}),"). This controls the color of text that is rendered on top of the color and ensures the contrast is still readable and accessible."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`secondary: {
  main: '#00e9f5',
  light: '#5ef6ff',
  dark: '#00c2cc',
  contrastText: '#000',
},
`})}),`
`,e.jsx(o.h3,{id:"convert-to-dark-mode",children:"Convert to Dark Mode"}),`
`,e.jsx(o.p,{children:"The new palette is looking good but what if you want to change the more prevalant base and background colors of the app? Let's convert the whole app to dark mode to demonstrate how to do that."}),`
`,e.jsxs(o.p,{children:["First, find the ",e.jsx(o.code,{children:"mode"})," option nested under ",e.jsx(o.code,{children:"palette"}),". This value controls how many of the inner components and various component states are rendered:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`palette: {
  mode: 'light',
`})}),`
`,e.jsxs(o.p,{children:["Change the ",e.jsx(o.code,{children:"mode"})," from ",e.jsx(o.code,{children:"light"})," to ",e.jsx(o.code,{children:"dark"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`palette: {
  mode: 'dark',
`})}),`
`,e.jsxs(o.p,{children:["You also need to adjust the ",e.jsx(o.code,{children:"default"})," background color and the ",e.jsx(o.code,{children:"paper"})," background color. To do this, find those two options nested under ",e.jsx(o.code,{children:"palette.background"}),". Set ",e.jsx(o.code,{children:"background.default"})," to eerie black (",e.jsx(o.code,{children:"#191919"}),") and ",e.jsx(o.code,{children:"background.paper"})," to a lighter eerie black (",e.jsx(o.code,{children:"#232323"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`background: {
  default: '#191919',
  paper: '#232323',
},
`})}),`
`,e.jsx(o.p,{children:"Refresh the page and see how the new dark mode looks."}),`
`,e.jsx(o.h3,{id:"change-the-default-font",children:"Change the Default Font"}),`
`,e.jsxs(o.p,{children:["The theme also controls the default font used throughout the app. All font properties are nested inside of the ",e.jsx(o.code,{children:"typography"})," property. Try changing the default ",e.jsx(o.code,{children:"fontFamily"})," from ",e.jsx(o.code,{children:"Helvetica"})," to ",e.jsx(o.code,{children:"Avenir"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`typography: {
  htmlFontSize: 16,
  fontFamily: '"Avenir", "Verdana", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
},
`})}),`
`,e.jsxs(o.p,{children:["Refresh the page and see if the font has changed. Some devices may not support ",e.jsx(o.code,{children:"Avenir"})," and will instead show one of the backup fonts."]}),`
`,e.jsx(o.h2,{id:"modify-specific-styles",children:"Modify Specific Styles"}),`
`,e.jsx(o.p,{children:"You just learned how to modify the global app theme. Now let's learn how to customize the style of a specific component. In this step you will change the color of the top level navigation bar."}),`
`,e.jsxs(o.p,{children:["Open the component for the navigation bar in ",e.jsx(o.code,{children:"src/components/TopBar.tsx"})," and find the ",e.jsx(o.code,{children:"AppBar"})," component:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<AppBar
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
`})}),`
`,e.jsxs(o.p,{children:["There are many ways to modify the styles of the elements in a component or on a page. In this tutorial you will use the MUI ",e.jsx(o.code,{children:"sx"})," prop to change the styles of specific components. It's possible to use traditional methods like CSS classes for this too, but the ",e.jsx(o.code,{children:"sx"})," prop allows you to easily utilize the global theme and create dynamic styles and states. You can read more about the ",e.jsx(o.code,{children:"sx"})," prop in the ",e.jsx(o.a,{href:"https://mui.com/material-ui/customization/how-to-customize/",rel:"nofollow",children:"MUI documentation"}),"."]}),`
`,e.jsxs(o.p,{children:["To change the background color of the ",e.jsx(o.code,{children:"AppBar"})," add the ",e.jsx(o.code,{children:"sx"})," prop and set the ",e.jsx(o.code,{children:"backgroundColor"})," property to ",e.jsx(o.code,{children:"primary.main"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<AppBar
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
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"primary.main"})," string is a reference to the value in the ",e.jsx(o.code,{children:"theme.palette"})," object in ",e.jsx(o.code,{children:"src/theme.tsx"}),". You can reference any value in the theme's ",e.jsx(o.code,{children:"palette"})," inside of the ",e.jsx(o.code,{children:"sx"})," prop. You can also just as easily use an explicit color code."]}),`
`,e.jsxs(o.p,{children:["You may have noticed that the color of the navigation bar changed, but now the links are not very readable because they are also red. Use the ",e.jsx(o.code,{children:"sx"})," prop to change the text of each ",e.jsx(o.code,{children:"AppLink"})," component to white (",e.jsx(o.code,{children:"#ffffff"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<AppLink to="/" sx={{ color: '#ffffff' }}>
  <ImageWrapper height={30}>
    <img
      src={cleanPath(
        \`\${import.meta.env.BASE_URL}/strudel-logo-icon.png\`
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
`})}),`
`,e.jsx(o.p,{children:"Refresh the page to see the new navigation bar."}),`
`,e.jsxs(o.p,{children:["You can also use the ",e.jsx(o.code,{children:"sx"})," prop to make advanced style changes like changing the hover state of an element. To do add a different style for the hover state, add a new property to the ",e.jsx(o.code,{children:"sx"})," object called ",e.jsx(o.code,{children:"'&:hover'"}),". You can then give this new property its own object of styles which tells the component how it should look when it is being hovered by a user's cursor."]}),`
`,e.jsxs(o.p,{children:["Add a hover state style to the Solar System ",e.jsx(o.code,{children:"AppLink"})," so that its color is ",e.jsx(o.code,{children:"secondary.light"})," on hover:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<AppLink
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
`})}),`
`,e.jsx(o.p,{children:"Refresh the page and watch the Solar System link change color when you mouse over it."}),`
`,e.jsx(o.h2,{id:"add-a-project-logo",children:"Add a Project Logo"}),`
`,e.jsx(o.p,{children:`Now, let's replace the "Tutorial Science App" title in the navigation bar with a logo for a project. First, download the tutorial app logo from GitHub:`}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"/img/tutorial/example-logo.png",children:"Click to open example-logo.png"}),'. Then right-click the image and click "Save Image As..."']}),`
`,e.jsxs(o.p,{children:["Place ",e.jsx(o.code,{children:"example-logo.png"})," in the ",e.jsx(o.code,{children:"public"})," folder alongside your other images."]}),`
`,e.jsxs(o.p,{children:["Now, go back to the ",e.jsx(o.code,{children:"TopBar.tsx"})," component in ",e.jsx(o.code,{children:"src/components"}),". Find the ",e.jsx(o.code,{children:"<ImageWrapper>"}),' component and replace "strudel-logo-icon.png" with "example-logo.png":']}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:"<ImageWrapper height={30}>\n  <img src={cleanPath(`${import.meta.env.BASE_URL}/example-logo.png`)} />\n</ImageWrapper>\n"})}),`
`,e.jsxs(o.p,{children:["You can also delete the extra ",e.jsx(o.code,{children:"<AppLink>"}),' that says "Planets" now that we have our logo in the bar. Delete the following lines:']}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<AppLink to="/">
  <Typography variant="h6" component="div" fontWeight="bold">
    My Project
  </Typography>
</AppLink>
`})}),`
`,e.jsx(o.p,{children:"Save the file and you should see your new logo in the navbar."}),`
`,e.jsx(o.p,{children:"Hooray! You are all done customizing app styles for this tutorial."}),`
`,e.jsx(o.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsx(o.p,{children:"In the last section of this tutorial, you will put what you have learned together to edit the app's home page."})]})}function m(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{m as default};
