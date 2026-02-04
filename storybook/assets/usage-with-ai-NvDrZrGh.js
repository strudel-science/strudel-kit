import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-C6fQpxbM.js";import{M as i}from"./blocks-BAahHWKC.js";import"./iframe-C8JEZrMR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVXv_ufn.js";import"./index-BLSDZ4Qa.js";import"./index-DQ98qibe.js";function s(n){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Usage with AI Assistants"}),`
`,e.jsx(t.h1,{id:"usage-with-ai-assistants",children:"Usage with AI Assistants"}),`
`,e.jsx(t.p,{children:"Generative AI tools provide software developers with an opportunity to create scientific web GUIs from simple prompts, without needing extensive formal web development skills. AI tools may be used as collaborative partners to brainstorm and strategize product features, design prototypes, or develop and refine application code."}),`
`,e.jsx(t.p,{children:"This documentation page outlines using AI tools for web app development, offers advice on getting started selecting tools, and provides some tips and tricks for using AI tools to design and develop user interfaces. It also includes example prompts relevant to the STRUDEL codebase, helping you get started with STRUDEL using generative AI."}),`
`,e.jsx(t.h2,{id:"developing-usable-web-applications-with-strudel-and-ai-tools",children:"Developing Usable Web Applications with STRUDEL and AI Tools"}),`
`,e.jsx(t.p,{children:"Generative AI is most effective when used in conjunction with established UX design principles and a progressive, incremental development approach for a user-centered and manageable development process. The STRUDEL team finds three key principles are helpful to keep in mind:"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"1. Start with a clear target."}),e.jsx(t.br,{}),`
`,"Define a vision or design goal to guide the development process with low-risk changes and ensure a user-centered approach."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"2. Debug and build progressively."}),e.jsx(t.br,{}),`
`,"Implement in small steps to simplify debugging and gain familiarity with the codebase."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"3. Expect iteration and deviations."}),e.jsx(t.br,{}),`
`,"Be prepared for AI fixes to deviate from the initial context and requirements, and plan for trial and error to achieve the desired UI."]}),`
`,e.jsx(t.p,{children:"By combining the STRUDEL code library with AI tools, you can accelerate your development workflow and build innovative applications. Pair programmer AI tools can assist you in writing code faster and more efficiently by providing real-time code suggestions, explanations, and automated code implementation and debugging. With the STRUDEL library serving as a starting point, AI tools can help you understand and build upon your existing codebase, enabling you to create high quality applications with minimal web development experience."}),`
`,e.jsx(t.h2,{id:"getting-started-selecting-ai-tools",children:"Getting Started Selecting AI Tools"}),`
`,e.jsxs(t.p,{children:["The STRUDEL team has explored a variety of AI tools to serve as programming partners. STRUDEL’s Oct 2025 workshop provided ",e.jsx(t.a,{href:"https://cline.bot/",rel:"nofollow",children:"Cline"})," backed by ",e.jsx(t.a,{href:"https://openrouter.ai/",rel:"nofollow",children:"OpenRouter"})," to participants. We chose Cline and OpenRouter because the workshop used 2i2c’s virtual coding environment with the web version of VSCode for easy setup. Cline integrates seamlessly with this version, enabling even those new to web development to edit UI code effortlessly."]}),`
`,e.jsx(t.p,{children:"A few free tools that the team has found useful include:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"GitHub Copilot:"})," As a student, teacher, researcher, or open-source maintainer you are eligible to get GitHub Copilot Pro for free. See ",e.jsx(t.a,{href:"https://docs.github.com/en/copilot/how-tos/manage-your-account/get-free-access-to-copilot-pro",rel:"nofollow",children:"this article"})," to apply for the education benefit. Copilot is already integrated into VSCode and works very similarly to Cline."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Gemini Code Assist:"})," You can use the ",e.jsx(t.a,{href:"https://codeassist.google/",rel:"nofollow",children:"Gemini Code Assist"})," VSCode extension for free using a personal GMail account."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Cline:"})," Cline is fast, capable of interpreting large codebases, and excels at complex multistep problems. It offers complete transparency into its work, allowing users to see every file read, every decision considered, and every token used."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["OpenRouter: Cline leverages OpenRouter to connect to a range of top models., which gives the flexibility and options to suit one’s needs. With OpenRouter, one can:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Choose from free LLM models like 'Deepseek' (slower, but free)"}),`
`,e.jsx(t.li,{children:"Purchase credits for paid LLM models for faster performance"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"LBNL CBorg"}),": LBNL’s internal ",e.jsx(t.a,{href:"https://cborg.lbl.gov/",rel:"nofollow",children:"CBorg"})," tool offers many ways for LBNL employees to use AI tools for free."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://cborg.lbl.gov/tools_cline/",rel:"nofollow",children:"Use Cline with CBorg"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://cborg.lbl.gov/tools_roo/",rel:"nofollow",children:"Use Roo Code with CBorg"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"using-different-prompting-modes-in-ai-tools",children:"Using Different Prompting Modes in AI Tools"}),`
`,e.jsx(t.p,{children:"AI Tools generally provide two distinct modes of interaction. One is a planning or brainstorming mode (e.g. Plan in Cline, Ask in Copilot). This acts as a thinking partner for determining what to build and how to do so in your codebase. The second is an execution mode that writes or adapts code and changes the codebase."}),`
`,e.jsxs(t.p,{children:["For example, STRUDEL has had success using Cline in different environments. Key to this is considering the two modes that this AI tool offers: ",e.jsx(t.strong,{children:"Plan"})," and ",e.jsx(t.strong,{children:"Act"}),". You can use each mode strategically to get the most out of Cline."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Plan mode"})," is where you and Cline figure out what you’re trying to build and how you’ll build it. In this mode, Cline:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Can read your entire codebase to understand the context"}),`
`,e.jsx(t.li,{children:"Won’t make any changes to your files"}),`
`,e.jsx(t.li,{children:"Focuses on understanding requirements and creating a strategy"}),`
`,e.jsx(t.li,{children:"Helps identify potential issues before you write a single line of code"}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Act mode"})," is for once you have a plan. Now Cline:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Has all the building capabilities at its disposal"}),`
`,e.jsx(t.li,{children:"Can make changes to your codebase"}),`
`,e.jsx(t.li,{children:"Still remembers everything from your planning session"}),`
`,e.jsx(t.li,{children:"Executes the strategy you worked out together"}),`
`]}),`
`,e.jsx(t.h2,{id:"constraining-the-ai-tools-operation-with-rules",children:"Constraining the AI Tool’s Operation with Rules"}),`
`,e.jsx(t.p,{children:"Many AI tools enable the end user to constrain its behavior via a rules file. This can help align the behavior when prompting with your goals and expectations. This is generally a simple markdown file that is read and considered during every prompt without requiring direct effort by the end user."}),`
`,e.jsxs(t.p,{children:["For example, when adapting a STRUDEL template with Cline: When you want Cline to respond a certain way or only use certain frameworks/ libraries, you might consider adding to the file called ",e.jsx(t.code,{children:".clinerules"})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"You can find it at the top level of STRUDEL-kit’s codebase."}),`
`,e.jsx(t.li,{children:"This file is a simple text document that provides general instructions that Cline takes into account on every interaction."}),`
`,e.jsx(t.li,{children:"We’ve populated this file with some initial rules but feel free to experiment by adding your own rules."}),`
`,e.jsx(t.li,{children:"Other AI tools would also have the ability to customize the behavior through specific configuration files which can be looked up."}),`
`]}),`
`,e.jsx(t.h2,{id:"prompting-for-design-and-development",children:"Prompting for Design and Development"}),`
`,e.jsx(t.p,{children:"Effectively using AI tools when designing web UIs requires thoughtful prompting. The STRUDEL team’s experiences cover prompting patterns relevant to brainstorming and designing UIs, general considerations, and suggestions for using prompts to adapt a STRUDEL base app for your own needs."}),`
`,e.jsx(t.h3,{id:"prompt-patterns-for-brainstorming-and-designing-ui",children:"Prompt Patterns for Brainstorming and Designing UI"}),`
`,e.jsx(t.p,{children:"If you're unsure about your app's design and features, use AI tools as a brainstorming partner to plan your prototype. Try these prompt patterns to help generate ideas and refine your design:"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Persona:"})," Ask AI to act as a specific persona (ex. - a biomedical researcher, physicist, etc) and provide outputs that they would create. This can help you understand their needs and pain points."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Cognitive Verifier:"})," Ask AI to generate additional questions that help answer the main question and combine their answers. This can help you identify potential gaps in your design."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Flipped Interaction:"})," Instruct AI to ask a series of questions aimed at achieving a specific outcome. This can again help you identify more gaps to fill and help you think about better user experience."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The Alternative Approaches:"})," Ask AI to list the alternate approaches & compare/contrast the pros and cons of each approach. This can help you evaluate different design options."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Recipe:"})," Provide a sequence of steps to achieve a specific goal. This can help you design a clear and intuitive UI workflow."]}),`
`,e.jsx(t.h3,{id:"general-tips-about-prompting-with-ai-tools",children:"General Tips about Prompting with AI tools"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Provide context."}),e.jsx(t.br,{}),`
`,"Provide relevant information as context to help Cline generate a specific output that aligns with your thoughts and goals. It’s okay to start with limited context and refine it as you go along."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Break down your tasks into small pieces."}),e.jsx(t.br,{}),`
`,"Try not to start too big or too general with the tasks that you give to Cline. See if you can break down your task into small bite-sized chunks that you can work on sequentially."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Start with something simple."}),e.jsx(t.br,{}),`
`,"The best way to get started making changes to a codebase with AI is the same as it is without AI: start small. Making minor changes first helps you get familiar with the codebase, how it’s structured, and also helps you get familiar with how the AI tooling works."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Errors are part of the process - share them as context."}),e.jsx(t.br,{}),`
`,"If Cline crashes or produces errors, including unrunnable code, please restart the task and share the error messages from your web console, VSCode console, or VSCode editor, as context into your prompt. Cline can be very good at diagnosing problems if you share enough context."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Start a new conversation for a new line of work."}),e.jsx(t.br,{}),`
`,"When starting a new task, it can be helpful to start a new conversation in a new window rather than continuing in one long conversation. This saves you tokens and keeps Cline focused on the task at hand."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Use agent/act mode wisely."}),e.jsx(t.br,{}),`
`,"It can be tempting to let the AI drive and make many edits at a time, but this can lead to code that you are less familiar with and that is harder to debug. Instead, try having the AI suggest changes for you to implement yourself into the code. This way you know exactly where certain code exists and have a better understanding of what the code does."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Iterate, iterate, iterate."}),e.jsx(t.br,{}),`
`,"Cline may not get it right the first time, especially with a complex task. It can take several iterations to complete complex tasks but you don’t have to throw everything out if it doesn’t get it completely right the first time. Ask yourself, do I see some shape of the thing I want? How can I iterate on what’s here?"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Your mileage may vary."}),e.jsx(t.br,{}),`
`,"AI assistants are probabilistic so you won’t always get the same response given the same input. This leads to the quality of your results varying randomly and from model to model."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Record prompt history in code."}),e.jsx(t.br,{}),`
`,"Document AI prompts in code comments to retain context, clarify that code was AI‑generated, and support future code methodology review, and debugging."]}),`
`,e.jsx(t.h3,{id:"sample-prompts-to-use-with-strudel-base-app",children:"Sample Prompts to use with STRUDEL base app"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:'I want to edit the contribute-data task flow. Can you change the title "Register as a data contributor" to "Get started as a contributor"?'})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["I want the explore-data task flow to pull and display data from my API. Here is a link to the API’s documentation: ",e.jsx(t.a,{href:"https://earthquake.usgs.gov/fdsnws/event/1/",rel:"nofollow",children:"https://earthquake.usgs.gov/fdsnws/event/1/"}),". A sample of the data can be fetched using this url: ",e.jsx(t.a,{href:"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson",rel:"nofollow",children:"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson"}),". I want the table to display the fields mag, status, type, title, and place."]})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Create a map visualization for recent 100 earthquakes from the data, plotting size and color of dots corresponding to magnitude. On hover show location, magnitude, date"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"In an earthquake data explorer - like on explore-data taskflow, provide a series of steps to help the public compare how two earthquakes are different. On selecting one row, how to indicate to the user that they need to select more to start comparing them?"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"I want the search-data-repositories task flow to pull data from my CSV that I have. It’s called studies.csv. Here are the first few lines of my CSV file: <paste CSV snippet here>. Can you show me how to incorporate that data into the main page of the search-data-repositories task flow? I have not uploaded my CSV into the code yet. Can you show me where to put it?"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"My project uses orange (#FC2F00) and purple (#731DD8) as its main colors, can you show me how to edit the theme so that these colors are used in the app?"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"I have an image for our project’s logo. How do I use this image in the navigation bar instead of the current image that’s there?"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"I’m using the run computation task flow and I want to simulate an analysis that changes the input data and shows something different in the results page. Can you generate this kind of mock analysis function for me and incorporate it into the run computation task flow?"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"I want there to be a way to contribute data from the search page. How can I link together the explore data task flow that I’ve been editing and the contribute data task flow?"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"I want users to be able to select rows from the explore data page and visualize those selected rows in a data comparison page. Can you help me add that functionality? I want users to be able to navigate seamlessly back and forth from the data comparison view and the explore data view."})}),`
`]}),`
`]})]})}function g(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default};
