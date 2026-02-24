import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-CdBz_BW3.js";import{M as r}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tutorials/Get Started With STRUDEL/Customize Home Page"}),`
`,e.jsx(n.h1,{id:"customize-the-home-page",children:"Customize the Home Page"}),`
`,e.jsxs(n.p,{children:["STRUDEL generates a default home page in ",e.jsx(n.code,{children:"src/pages/index.tsx"}),". In this section you will add some content, images, and links to the home page."]}),`
`,e.jsxs(n.p,{children:["First, let's remove the contents of the existing home page. Replace the contents of ",e.jsx(n.code,{children:"src/pages/index.tsx"})," with the following barebones component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Container } from '@mui/material';
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
`})}),`
`,e.jsxs(n.p,{children:["Now, let's add a title. To add a title, use the ",e.jsx(n.code,{children:"Typography"})," component from MUI. This is a general component for different variations of text. You can read more about the ",e.jsx(n.code,{children:"Typography"})," component on the",e.jsxs(n.a,{href:"https://mui.com/material-ui/react-typography/",rel:"nofollow",children:[" MUI ",e.jsx(n.code,{children:"Typography"})," documentation page"]}),"."]}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"Typography"})," component to the ",e.jsx(n.code,{children:"'@mui/material'"})," import:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Container, Typography } from '@mui/material';
`})}),`
`,e.jsxs(n.p,{children:["Then add a ",e.jsx(n.code,{children:"Typography"})," title component inside of the ",e.jsx(n.code,{children:"<Container>"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Container
  maxWidth="lg"
  sx={{
    marginTop: 3,
    marginBottom: 3,
  }}
>
  <Typography variant="h1">Planets of the Solar System</Typography>
</Container>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"variant"})," prop is used to specify the kind of text to display in the component. The ",e.jsx(n.code,{children:"h1"}),` option stands for "Heading 1" and it's used for top-level page headings. If you look at the new title in the browser, you may notice that the default `,e.jsx(n.code,{children:"h1"})," size is quite large. Make it smaller by setting ",e.jsx(n.code,{children:"fontSize"})," to ",e.jsx(n.code,{children:"2rem"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Typography variant="h1" fontSize="2rem">
  Planets of the Solar System
</Typography>
`})}),`
`,e.jsxs(n.p,{children:["That looks better. Now, let's add a description section underneath. For this section you are going to use two new components: ",e.jsx(n.code,{children:"Paper"})," and ",e.jsx(n.code,{children:"Stack"}),". These are both components from MUI. The ",e.jsx(n.code,{children:"Paper"})," component is used to wrap content in an elevated panel and the ",e.jsx(n.code,{children:"Stack"})," component is used to organize content in vertical or horizontal layouts with equal spacing. Learn detailed information about ",e.jsx(n.a,{href:"https://mui.com/material-ui/react-paper/",rel:"nofollow",children:"Paper"})," and ",e.jsx(n.a,{href:"https://mui.com/material-ui/react-stack/",rel:"nofollow",children:"Stack"})," in the MUI docs."]}),`
`,e.jsxs(n.p,{children:["Here is the text to use for the description section (from ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Solar_System",rel:"nofollow",children:"Wikipedia"}),"):"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. The largest of these objects are the eight planets, which in order from the Sun are four terrestrial planets (Mercury, Venus, Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants (Uranus and Neptune). The Solar System developed 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc."}),`
`]}),`
`,e.jsxs(n.p,{children:["First add ",e.jsx(n.code,{children:"Paper"})," to the ",e.jsx(n.code,{children:"'@material/ui'"})," imports:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Container, Paper, Typography } from '@mui/material';
`})}),`
`,e.jsxs(n.p,{children:["Then add a new ",e.jsx(n.code,{children:"Paper"})," component underneath the title's ",e.jsx(n.code,{children:"Typography"})," and embed a ",e.jsx(n.code,{children:"Typography"})," component with the description text from above:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Paper
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
`})}),`
`,e.jsxs(n.p,{children:["Now create some space between the ",e.jsx(n.code,{children:"Paper"})," and title ",e.jsx(n.code,{children:"Typography"})," components by wrapping them in a ",e.jsx(n.code,{children:"Stack"})," component. First add ",e.jsx(n.code,{children:"Stack"})," to the ",e.jsx(n.code,{children:"'@material/ui'"})," imports:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Container, Paper, Stack, Typography } from '@mui/material';
`})}),`
`,e.jsxs(n.p,{children:["Then wrap both components inside of a ",e.jsx(n.code,{children:"Stack"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Stack>
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
`})}),`
`,e.jsx(n.p,{children:"That's looking pretty good!"}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsx(n.p,{children:"In the last section you will find resources to continue building your app and learning the STRUDEL Tech Stack."})]})}function u(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
