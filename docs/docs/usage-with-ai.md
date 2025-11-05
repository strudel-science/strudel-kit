# Usage with AI Assistants

Generative AI tools provide software developers with an opportunity to create scientific web GUIs from simple prompts, without needing extensive formal web development skills. AI tools may be used as collaborative partners to brainstorm and strategize product features, design prototypes, or develop and refine application code.

This documentation page outlines using AI tools for web app development, offers advice on getting started selecting tools, and provides some tips and tricks for using AI tools to design and develop user interfaces. It also includes example prompts relevant to the STRUDEL codebase, helping you get started with STRUDEL using generative AI.

## Developing Usable Web Applications with STRUDEL and AI Tools

Generative AI is most effective when used in conjunction with established UX design principles and a progressive, incremental development approach for a user-centered and manageable development process. The STRUDEL team finds three key principles are helpful to keep in mind:

**1\. Start with a clear target.**  
Define a vision or design goal to guide the development process with low-risk changes and ensure a user-centered approach.

**2\. Debug and build progressively.**  
Implement in small steps to simplify debugging and gain familiarity with the codebase.

**3\. Expect iteration and deviations.**  
Be prepared for AI fixes to deviate from the initial context and requirements, and plan for trial and error to achieve the desired UI.

By combining the STRUDEL code library with AI tools, you can accelerate your development workflow and build innovative applications. Pair programmer AI tools can assist you in writing code faster and more efficiently by providing real-time code suggestions, explanations, and automated code implementation and debugging. With the STRUDEL library serving as a starting point, AI tools can help you understand and build upon your existing codebase, enabling you to create high quality applications with minimal web development experience.

## Getting Started Selecting AI Tools

The STRUDEL team has explored a variety of AI tools to serve as programming partners. STRUDEL’s Oct 2025 workshop provided [Cline](https://cline.bot/) backed by [OpenRouter](https://openrouter.ai/) to participants. We chose Cline and OpenRouter because the workshop used 2i2c’s virtual coding environment with the web version of VSCode for easy setup. Cline integrates seamlessly with this version, enabling even those new to web development to edit UI code effortlessly.

A few free tools that the team has found useful include:

- **GitHub Copilot:** As a student, teacher, researcher, or open-source maintainer you are eligible to get GitHub Copilot Pro for free. See [this article](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-free-access-to-copilot-pro) to apply for the education benefit. Copilot is already integrated into VSCode and works very similarly to Cline.

- **Gemini Code Assist:** You can use the [Gemini Code Assist](https://codeassist.google/) VSCode extension for free using a personal GMail account.

- **Cline:** Cline is fast, capable of interpreting large codebases, and excels at complex multistep problems. It offers complete transparency into its work, allowing users to see every file read, every decision considered, and every token used.

  - OpenRouter: Cline leverages OpenRouter to connect to a range of top models., which gives the flexibility and options to suit one’s needs. With OpenRouter, one can:
    - Choose from free LLM models like 'Deepseek' (slower, but free)
    - Purchase credits for paid LLM models for faster performance

- **LBNL CBorg**: LBNL’s internal [CBorg](https://cborg.lbl.gov/) tool offers many ways for LBNL employees to use AI tools for free.
  - [Use Cline with CBorg](https://cborg.lbl.gov/tools_cline/)
  - [Use Roo Code with CBorg](https://cborg.lbl.gov/tools_roo/)

## Using Different Prompting Modes in AI Tools

AI Tools generally provide two distinct modes of interaction. One is a planning or brainstorming mode (e.g. Plan in Cline, Ask in Copilot). This acts as a thinking partner for determining what to build and how to do so in your codebase. The second is an execution mode that writes or adapts code and changes the codebase.

For example, STRUDEL has had success using Cline in different environments. Key to this is considering the two modes that this AI tool offers: **Plan** and **Act**. You can use each mode strategically to get the most out of Cline.

**Plan mode** is where you and Cline figure out what you’re trying to build and how you’ll build it. In this mode, Cline:

- Can read your entire codebase to understand the context
- Won’t make any changes to your files
- Focuses on understanding requirements and creating a strategy
- Helps identify potential issues before you write a single line of code

**Act mode** is for once you have a plan. Now Cline:

- Has all the building capabilities at its disposal
- Can make changes to your codebase
- Still remembers everything from your planning session
- Executes the strategy you worked out together

## Constraining the AI Tool’s Operation with Rules

Many AI tools enable the end user to constrain its behavior via a rules file. This can help align the behavior when prompting with your goals and expectations. This is generally a simple markdown file that is read and considered during every prompt without requiring direct effort by the end user.

For example, when adapting a STRUDEL template with Cline: When you want Cline to respond a certain way or only use certain frameworks/ libraries, you might consider adding to the file called `.clinerules`

- You can find it at the top level of STRUDEL-kit’s codebase.
- This file is a simple text document that provides general instructions that Cline takes into account on every interaction.
- We’ve populated this file with some initial rules but feel free to experiment by adding your own rules.
- Other AI tools would also have the ability to customize the behavior through specific configuration files which can be looked up.

## Prompting for Design and Development

Effectively using AI tools when designing web UIs requires thoughtful prompting. The STRUDEL team’s experiences cover prompting patterns relevant to brainstorming and designing UIs, general considerations, and suggestions for using prompts to adapt a STRUDEL base app for your own needs.

### Prompt Patterns for Brainstorming and Designing UI

If you're unsure about your app's design and features, use AI tools as a brainstorming partner to plan your prototype. Try these prompt patterns to help generate ideas and refine your design:

**Persona:** Ask AI to act as a specific persona (ex. \- a biomedical researcher, physicist, etc) and provide outputs that they would create. This can help you understand their needs and pain points.

**Cognitive Verifier:** Ask AI to generate additional questions that help answer the main question and combine their answers. This can help you identify potential gaps in your design.

**Flipped Interaction:** Instruct AI to ask a series of questions aimed at achieving a specific outcome. This can again help you identify more gaps to fill and help you think about better user experience.

**The Alternative Approaches:** Ask AI to list the alternate approaches & compare/contrast the pros and cons of each approach. This can help you evaluate different design options.

**Recipe:** Provide a sequence of steps to achieve a specific goal. This can help you design a clear and intuitive UI workflow.

### General Tips about Prompting with AI tools

**Provide context.**  
Provide relevant information as context to help Cline generate a specific output that aligns with your thoughts and goals. It’s okay to start with limited context and refine it as you go along.

**Break down your tasks into small pieces.**  
Try not to start too big or too general with the tasks that you give to Cline. See if you can break down your task into small bite-sized chunks that you can work on sequentially.

**Start with something simple.**  
The best way to get started making changes to a codebase with AI is the same as it is without AI: start small. Making minor changes first helps you get familiar with the codebase, how it’s structured, and also helps you get familiar with how the AI tooling works.

**Errors are part of the process \- share them as context.**  
If Cline crashes or produces errors, including unrunnable code, please restart the task and share the error messages from your web console, VSCode console, or VSCode editor, as context into your prompt. Cline can be very good at diagnosing problems if you share enough context.

**Start a new conversation for a new line of work.**  
When starting a new task, it can be helpful to start a new conversation in a new window rather than continuing in one long conversation. This saves you tokens and keeps Cline focused on the task at hand.

**Use agent/act mode wisely.**  
It can be tempting to let the AI drive and make many edits at a time, but this can lead to code that you are less familiar with and that is harder to debug. Instead, try having the AI suggest changes for you to implement yourself into the code. This way you know exactly where certain code exists and have a better understanding of what the code does.

**Iterate, iterate, iterate.**  
Cline may not get it right the first time, especially with a complex task. It can take several iterations to complete complex tasks but you don’t have to throw everything out if it doesn’t get it completely right the first time. Ask yourself, do I see some shape of the thing I want? How can I iterate on what’s here?

**Your mileage may vary.**  
AI assistants are probabilistic so you won’t always get the same response given the same input. This leads to the quality of your results varying randomly and from model to model.

**Record prompt history in code.**  
Document AI prompts in code comments to retain context, clarify that code was AI‑generated, and support future code methodology review, and debugging.

### Sample Prompts to use with STRUDEL base app

- _I want to edit the contribute-data task flow. Can you change the title "Register as a data contributor" to "Get started as a contributor"?_

- _I want the explore-data task flow to pull and display data from my API. Here is a link to the API’s documentation: [https://earthquake.usgs.gov/fdsnws/event/1/](https://earthquake.usgs.gov/fdsnws/event/1/). A sample of the data can be fetched using this url: [https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson](https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson). I want the table to display the fields mag, status, type, title, and place._

  - _Create a map visualization for recent 100 earthquakes from the data, plotting size and color of dots corresponding to magnitude. On hover show location, magnitude, date_

  - _In an earthquake data explorer \- like on explore-data taskflow, provide a series of steps to help the public compare how two earthquakes are different. On selecting one row, how to indicate to the user that they need to select more to start comparing them?_

- _I want the search-data-repositories task flow to pull data from my CSV that I have. It’s called studies.csv. Here are the first few lines of my CSV file: \<paste CSV snippet here\>. Can you show me how to incorporate that data into the main page of the search-data-repositories task flow? I have not uploaded my CSV into the code yet. Can you show me where to put it?_

- _My project uses orange (\#FC2F00) and purple (\#731DD8) as its main colors, can you show me how to edit the theme so that these colors are used in the app?_

- _I have an image for our project’s logo. How do I use this image in the navigation bar instead of the current image that’s there?_

- _I’m using the run computation task flow and I want to simulate an analysis that changes the input data and shows something different in the results page. Can you generate this kind of mock analysis function for me and incorporate it into the run computation task flow?_

- _I want there to be a way to contribute data from the search page. How can I link together the explore data task flow that I’ve been editing and the contribute data task flow?_

- _I want users to be able to select rows from the explore data page and visualize those selected rows in a data comparison page. Can you help me add that functionality? I want users to be able to navigate seamlessly back and forth from the data comparison view and the explore data view._
