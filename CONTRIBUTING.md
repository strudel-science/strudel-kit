# **STRUDEL Contribution Guide**

**\! Tip:** [Jump straight to a list](#engaging-and-contributing) of ways you can contribute to STRUDEL.

Hi and thank you for being part of the STRUDEL community\! This guide will describe several ways you can contribute to STRUDEL. Here we discuss changes to the STRUDEL Kit, but advice is relevant to sharing designs or making changes to our website. We welcome contributions of all kinds, including those we haven’t thought of yet. 

This guide is a work in progress; feel free to propose revisions by [opening an issue in Github](#opening-an-issue). This version focuses on the STRUDEL Task Flows app, templates, and accompanying documentation; information on contributing to the CLI will be forthcoming. Reach out via a [discussion thread](#opening-a-discussion) if you want to know more.

**Table of contents:**

[Contributors](#contributors)

&nbsp;&nbsp;&nbsp;&nbsp;[Maintainers](#maintainers)

[Code of Conduct](#code-of-conduct)

[Engaging and Contributing](#engaging-and-contributing)

[Getting Help](#getting-help)

[General Procedures for Version Controlled Changes](#general-procedures-for-version-controlled-changes)

&nbsp;&nbsp;&nbsp;&nbsp;[Start with a GitHub Issue](#start-with-a-github-issue)

&nbsp;&nbsp;&nbsp;&nbsp;[Fork and Setup your Dev Environment](#fork-and-setup-your-dev-environment)

&nbsp;&nbsp;&nbsp;&nbsp;[Code your Changes](#code-your-changes)

&nbsp;&nbsp;&nbsp;&nbsp;[Make a Pull Request to the Main Branch](#make-a-pull-request-to-the-main-branch)

[About the Repository](#about-the-repository)

&nbsp;&nbsp;&nbsp;&nbsp;[Framework and Languages](#framework-and-languages)

&nbsp;&nbsp;&nbsp;&nbsp;[Page Routing](#page-routing)

&nbsp;&nbsp;&nbsp;&nbsp;[Testing](#testing)

&nbsp;&nbsp;&nbsp;&nbsp;[Linting and Code Styling](#linting-and-code-styling)

&nbsp;&nbsp;&nbsp;&nbsp;[License](#license)

[Setting up a Local Development Environment](#setting-up-a-local-development-environment)

&nbsp;&nbsp;&nbsp;&nbsp;[Prerequisites](#prerequisites)

&nbsp;&nbsp;&nbsp;&nbsp;[Instructions](#instructions)

[Issues and Discussions](#issues-and-discussions)

&nbsp;&nbsp;&nbsp;&nbsp;[What is an Issue?](#what-is-an-issue)

&nbsp;&nbsp;&nbsp;&nbsp;[Opening an Issue](#opening-an-issue)

&nbsp;&nbsp;&nbsp;&nbsp;[Commenting on an Issue](#commenting-on-an-issue)

[What is a Discussion?](#what-is-a-discussion)

&nbsp;&nbsp;&nbsp;&nbsp;[Opening a Discussion](#opening-a-discussion)

&nbsp;&nbsp;&nbsp;&nbsp;[Contributing to a Discussion](#contributing-to-a-discussion)

&nbsp;&nbsp;&nbsp;&nbsp;[Turning a Discussion into an Issue](#turning-a-discussion-into-an-issue)

[Filing or Fixing a Bug](#filing-or-fixing-a-bug)

[Improving the Code](#improving-the-code)

[Proposing or Adding a Feature](#proposing-or-adding-a-feature)

[Proposing or Adding a New Task Flow](#proposing-or-adding-a-new-task-flow)

&nbsp;&nbsp;&nbsp;&nbsp;[Proposing a Task Flow](#proposing-a-task-flow)

&nbsp;&nbsp;&nbsp;&nbsp;[Designing a Task Flow](#designing-a-task-flow)

&nbsp;&nbsp;&nbsp;&nbsp;[Design Review](#design-review)

&nbsp;&nbsp;&nbsp;&nbsp;[Coding a Task Flow](#coding-a-task-flow)

[Revising the Docs](#revising-the-docs)

&nbsp;&nbsp;&nbsp;&nbsp;[Improving Guides](#improving-guides)

[Adding an Example](#adding-an-example)

[Sharing UX Resources or Principles](#sharing-ux-resources-or-principles)

## Contributors

STRUDEL is an open source project that is developed and supported by a community of contributors. These contributors have served STRUDEL in a variety of ways: as funders, code contributors, workshop instructors, infrastructure partners, feedback providers, and more. We hope you will join us.

Our thanks to the following contributors:  
Erin Becker  
Georgia Bullen  
Hannah Cohoon  
Jim Colliander  
Eriol Fox  
Dan Gunter  
Toby Hodges  
Maarten Lopes  
Jarrod Millman  
Ingrid Ockert  
Drew Paine  
Sarah Poon  
Lavanya Ramakrishnan  
Maryam Vareth  
Tiffany Win

Thanks also go to the following organizations:  
[2i2c](https://2i2c.org/)  
[BIDS](https://bids.berkeley.edu/)  
[Superbloom](https://superbloom.design/)

STRUDEL has been generously funded by the Alfred P. Sloan Foundation, Liz Vu & Josh Greenberg Program Officers, grants \#10074, \#10572, and \#22557

We also wish to acknowledge attendees at the STRUDEL inaugural hackathon in 2024 and at the US-RSE’24 workshop. Thanks to all for your participation, questions, and feedback\!



### Maintainers

*Maintainers* fill an important role within the STRUDEL community. Maintainers are contributors that have a formal responsibility to STRUDEL—these people are employed or have otherwise agreed to add to, revise, and update the various repositories. If you reach out to the STRUDEL team via Github or email, it is likely you will get a response from one of our maintainers.

Our maintainers currently include:  
Cody O’Donnell, @codytodonnell  
Rajshree Deshmukh, @Rjdesh

As STRUDEL matures, we will be developing and refining governance procedures, including defining how people and organizations formally join or underwrite STRUDEL. If you have thoughts on this, you can share them by [opening a discussion thread](#opening-a-discussion). For now, anyone can be a contributor by engaging in [one of the ways we’ve identified in this guide](#engaging-and-contributing).


## Code of Conduct

We want everyone to have a positive experience both using and contributing to this library. In choosing to participate and contribute to STRUDEL, you are agreeing to abide by our [Code of Conduct](https://github.com/strudel-science/strudel-kit/blob/main/CODE_OF_CONDUCT.md) which follows the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).


## Engaging and Contributing
STRUDEL is a way to plan, design, and build usable scientific software. STRUDEL will be a better tool if it is anchored in community needs and insights, so your engagement and contributions are very valuable. We recommend you get involved with STRUDEL through one of the activities listed below and elaborated on elsewhere in this guide. If you have another idea of how you can support that mission, we encourage you to pursue it. Contributions come in all shapes and sizes and we value them all. Let us know if you [need help](#getting-help).

Some ways to get involved:

* [**Enhancing features**](#proposing-or-adding-a-feature) **or [fixing a bug](#filing-or-fixing-a-bug):** Make revisions to existing STRUDEL Kit code   
* [**Adding a Task Flow**](#proposing-or-adding-a-new-task-flow)**:** Contribute an entirely new stepwise flow to be included in the STRUDEL Kit  
* [**Revising documentation**](#revising-the-docs)**:** Correct or elaborate on any information about STRUDEL  
* [**Improving tutorial content**](#improving-guides)**:** Enhance existing tutorials or add your own  
* [**Sharing UX resources or principles**](#sharing-ux-resources-or-principles)**:** Provide reliable UX insights or resources that can help  guide STRUDEL use or development  
* [**Sharing or discussing an idea**](#contributing-to-a-discussion)**:** Add to or begin a conversation about STRUDEL or scientific user experiences 
* [**Share how you’re using STRUDEL**](#adding-an-example)**:** Share your use case with the community   
* [**Give us a star on Github**](https://github.com/strudel-science/strudel-kit)**:** Signal your support for the project by [starring](https://docs.github.com/en/get-started/exploring-projects-on-github/saving-repositories-with-stars) the STRUDEL Kit repository  
* [**Get to know the UX in science community**](https://us-rse.org/wg/ux/)**:** Join a working group for people interested in learning about and improving scientific user experiences, organized by the US Research Software Engineers (US-RSE) Association. US-RSE is not STRUDEL affiliated, but you will find us and like minded people in the UX working group there.


## Getting Help

We recommend that if you have a question you first read through this contribution guide and any other relevant STRUDEL documentation. If you are unable to answer your question that way, we encourage you to [ask your question publicly using a discussion thread.](#what-is-a-discussion) That will allow other people to take part in the conversation and benefit from any answers you receive. If you need to discuss something privately or don’t have a Github account, you can reach out to the STRUDEL maintainers via email at [strudel@lbl.gov](mailto:strudel@lbl.gov). 


## General Procedures for Version Controlled Changes
STRUDEL uses [version control](https://github.com/resources/articles/software-development/what-is-version-control) and collaborative development tools offered by Github. These resources help us keep track of changes to the code and who made them, discuss ideas, and engage with new contributors more easily. 

If you are making a contribution to STRUDEL, it is likely that you will need to do so via Github. To keep code quality high and consistent, we share important information here about the general procedures for making changes to STRUDEL. This is relevant to making contributions like [proposing or adding a feature](#proposing-or-adding-a-feature), [fixing or filing a bug](#filing-or-fixing-a-bug), [adding a Task Flow](#proposing-or-adding-a-new-task-flow), [revising documentation](#revising-the-docs), or [improving tutorial content](#improving-guides). However, for contributions like [sharing](#sharing-ux-resources-or-principles) or [discussing ideas](#what-is-a-discussion) or [giving examples of STRUDEL use cases](#adding-an-example), the sections on [issues and discussions](#issues-and-discussions) and those specific contribution mechanisms will be more useful to you. Additional relevant background knowledge for making code contributions can be found in [About the repository](#about-the-repository) and [Setting up a local development environment](#setting-up-a-local-development-environment).

**\! Tip:** We highly recommend that you read through the relevant documentation in this section and others before beginning any coding for STRUDEL. There are tips throughout this guide on how to work on relevant problems, when to expect feedback, styling, and more that are important for ensuring your success. 

### Start with a GitHub Issue

If you would like to make a change to strudel-kit, be it a bug fix or a whole new feature, that change should start with a Github issue. Issues, [detailed elsewhere in this guide](#what-is-an-issue), allow us to develop and document a plan for addressing a needed change. Equally important, they help our maintainers know who is doing what work on STRUDEL—a necessity for coordinated efforts.

You may [open an issue](#opening-an-issue) or begin work on an existing issue.  

**\! Tip:** If you would like to help out with an open, existing issue, look for the “help-wanted” tag in the issues list in the strudel-kit repo. These are specially flagged because our maintainers think they would be approachable issues for new contributors (or because we could really use a helping hand with them\!). 

Once you know which issue you are working on, [leave a comment](#commenting-on-an-issue) to say so. 

### Fork and Setup your Dev Environment

To work on an issue, you will want to fork the strudel-kit repository and set up your own development environment. Follow the steps in [Setting up a local development environment](#setting-up-a-local-development-environment) to do so.

Inside your fork, [create a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) for your change. This is an aspect of version control that allows us to keep track of and provide credit for changes. 

If you are adding a new feature, name your branch feature/description-of-feature. For example, the branch might be called feature/update-metadata-task-flow if you wanted to add a Task Flow for updating metadata. If it is a bug fix, name your branch bugfix/description-of-bugfix. For example, the branch might be called bugfix/tutorial-spelling-fix if you wanted to fix a spelling mistake in some tutorial content.

### Code your Changes

Next, code your changes\! If you have questions about where certain code exists or how it is set up, post in the issue thread you already created or selected and one of the maintainers will try to help you. We recommend you make a change to this CONTRIBUTING.md file as well, adding your name in alphabetical order to the [list of contributors](#contributors).

**\! TIP:** Because the STRUDEL Kit and tutorial content is meant to be used as a template for users, it is encouraged that you be liberal in your usage of comments throughout the code. Help newcomers understand exactly what they are supposed to do with your code by leaving comments for them.

### Make a Pull Request to the Main Branch

Once your code is ready, [open a pull request to the \`main\` branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) of strudel-kit and describe your change in detail. Ensure that all [tests](#testing) are passing. One of the core team members will engage with you in the pull request thread and approve the changes or request some additional edits. Once ready, one of the core team members will merge your code into the kit\!

Remember to [read our license](https://github.com/strudel-science/strudel-kit/blob/main/LICENSE) so you understand how code in the kit can be shared and used. This is a public, free, and open source project so any code you contribute will be too.


## About the Repository

### Framework and Languages

The strudel-kit app templates are written in TypeScript using the React web development framework. Below are all of the relevant technologies used in the app:

* [TypeScript](https://www.typescriptlang.org/)  
* [React](https://react.dev/)  
* [Vite](https://vite.dev/)  
* [Material UI](https://mui.com/)  
* [Generouted](https://github.com/oedotme/generouted)  
* [PlotlyJS](https://plotly.com/javascript/)

### Page Routing

This app used Generouted to automatically create routes based on the folders and files in `src/pages`. Read more about how this works in the [Generouted docs](https://github.com/oedotme/generouted?tab=readme-ov-file#conventions).

### Testing

This app uses [Cypress](https://www.cypress.io/) for testing the different Task Flows. Each Task Flow directory contains a `_tests` directory which has at least one test for that Task Flow. Each test is intended to test the general UI flow and functionality of that part of the template.

### Linting and Code Styling

This repository uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to lint and format code in the repository. Any changes you make will run through the linter before being committed and you may have errors and warnings to fix before you can successfully commit code. This ensures that all the code follows similar guidelines. We generally follow the [AirBnB React Style Guide](https://github.com/airbnb/javascript/tree/master/react), but the ESLint warnings on the command line should guide you to how to fix the problem. 

We request that you include lots of comments so that our maintainers, other contributors, and STRUDEL Kit users can work with your code easily too. 

### License

The code in this repository is free and open source under an agreement with the Lawrence Berkeley National Lab. [Read the full license](https://github.com/strudel-science/strudel-kit/blob/main/LICENSE).


## Setting up a Local Development Environment

If you are trying to develop a new UI feature or fix a bug in the code, you will need to set up a local development environment that runs the strudel-taskflows template app.

### Prerequisites

* [Git](https://git-scm.com/downloads)  
* [NodeJS and NPM](https://nodejs.org/en/download/package-manager)  
* Code editor such as [VSCode](https://code.visualstudio.com/download)

### Instructions

Fork the [strudel-kit](https://github.com/strudel-science/strudel-kit) repository from GitHub.

Open up a terminal on your computer and clone your forked repo.

```
git clone git@github.com:your-gh-username/strudel-kit.git
```

Navigate to the newly created `strudel-kit` directory, then go `cd` into the `strudel-taskflows` directory and install the dependencies.

```
npm install
```

Once the install completes successfully, start the application.

```
npm start
```
   
Now you should be able to access the web app at [https://localhost:5175](https://localhost:5175)


## Issues and Discussions

STRUDEL has two means of communication for the community to propose improvements and discuss STRUDEL: issues and discussions. The line between these is blurry but here we will provide some guidelines for you to use if you are uncertain which is right for you. 

If you have something to say or ask but are not confident about where it belongs, just take a guess. It is more important that we hear from you than it is that you reach out through a specific channel. Let us know you were confused so that we can improve things for the community.

This section has general information on opening and commenting on issues and discussions of all types. No matter how you’re communicating within the STRUDEL community, be respectful with your language. We expect all contributors to follow the [Code of Conduct](https://github.com/strudel-science/strudel-kit/blob/5545943ad9d5a1e6cf5d719ee1ad3e7be6fd43cc/CODE_OF_CONDUCT.md). 

### What is an Issue?

An issue is a way to describe a concrete problem or needed improvement to a codebase. Issues are associated with a repository. Once submitted, STRUDEL team members and other contributors can comment on the issue to ask questions, track progress, or otherwise provide updates. 

An issue should be opened when new or revised code or content is needed to align the repository with current expectations for STRUDEL. For example: 

- Something that was working is suddenly broken  
- A new feature is planned and must be implemented  
- Norms or facts suggest that something should be one way but you are experiencing something different (e.g., issues with spelling, functionality, documentation, style, testing, etc.)

If you have an idea that needs refinement before code changes should begin, consider a [discussion thread instead](#what-is-a-discussion).

Because issues are associated with a repository, for them to get attention from the right people most quickly, they should be opened within the correct repository. In this guide, we largely discuss how you might make contributions to the STRUDEL Kit in the strudel-kit repository; if you want to contribute to our website, see the [strudel-web repository](https://github.com/strudel-science/strudel-web). 

**\! Tip:** Resolving issues is a good way to get involved with STRUDEL development and maintenance. You may find some good issues to work on by searching for issues labeled with “help-wanted.” More information on this process is available in the [Adding a feature or fixing a bug](#proposing-or-adding-a-feature) section.

#### Opening an Issue

When opening an issue you should:

1. Log into Github. If you do not have a Github account, you cannot log an issue but you can view existing ones. If you do not wish to create a Github account, please follow the relevant advice below and simply email your issue to [strudel@lbl.gov](mailto:strudel@lbl.gov).   
2. Look to see if your issue has already been logged. You can scroll through open issues or you can search the repository.   
   1. If you find an existing issue that represents your concern, you can leave a [comment on that one](#commenting-on-an-issue) rather than opening a new one.   
   2. If you don’t see a relevant issue, proceed to the next step.   
3. [Open the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-a-repository). Give your issue a descriptive title. A good, descriptive title might be, “Broken link on About page,” whereas a vague title would be, “Page not working.” If this is an issue you would like to work on resolving yourself, say so in the message  body.  

#### Commenting on an Issue

You may have an opinion or information relevant to an existing issue. To share that, you can comment on an issue. To comment:

1. Log into Github. If you do not have a Github account, you cannot comment on an issue but you can view existing ones. If you do not wish to create a Github account, please follow the relevant advice below and simply email your issue to [strudel@lbl.gov](mailto:strudel@lbl.gov).  
2. Navigate to the relevant issue and read through the comments that have already been left.  
3. At the bottom of the page, in the “Add a comment” field, leave whatever comment you wish. This may be saying that you have the same problem or idea, that you have a suggestion, that you have a question, or something else.   
4. Click the green “Comment” button to submit your comment.

### What is a Discussion?

Like issues, discussions are a way that you can share your thoughts and feedback on any component of STRUDEL. These are [a feature of Github](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/about-discussions). However, whereas an issue should be specific and actionable, a discussion can be more general or thought provoking. Discussion threads may also be opened to make an announcement or just to foster community. If a discussion generates an actionable consensus on some topic, that discussion may be [turned into an issue](#turning-a-discussion-into-an-issue).

Our Github organization is set up so that discussions are not specific to repositories, meaning that to find or open a discussion thread you do not need to be in a particular repository, just within the [strudel-science organization](https://github.com/strudel-science). 

#### Opening a Discussion

When opening a discussion thread, you should:

1. Log into Github. If you do not have a Github account, you cannot create a discussion but you can view existing ones. If you do not wish to create a Github account, please follow the relevant advice below and simply email your comment to [strudel@lbl.gov](mailto:strudel@lbl.gov).  
2. Search through the [existing discussions](https://github.com/orgs/strudel-science/discussions) to see if there is already a thread opened on your topic.   
   1. If there is, you can [contribute to that discussion](#contributing-to-a-discussion) instead of opening your own.   
   2. If there is not a relevant discussion thread already, then proceed to the next step.
3. Follow Github’s instructions on [opening a discussion](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-discussion). Give the discussion a descriptive title so that others can easily understand the specific topic. Try to limit the scope so that all things STRUDEL don’t get discussed in a single thread. For example, a good title and topic might be “Feedback on in person workshops,” whereas a vague title and topic might simply be “Feedback.”   

#### Contributing to a Discussion

You can add to an ongoing discussion by leaving a comment on an open Discussion thread. To do so:

1. Log into Github. If you do not have a Github account, you cannot comment on a discussion but you can view existing ones. If you do not wish to create a Github account, please follow the relevant advice below and simply email your comment to [strudel@lbl.gov](mailto:strudel@lbl.gov).  
2. Go to [the Discussions page](https://github.com/orgs/strudel-science/discussions).  To navigate there from the STRUDEL [organization homepage on Github](https://github.com/strudel-science), click on “Discussions” near the top of your screen—this is an option to the right of “Overview” and “Repositories.” This button is also visible from within some, but not all, of the STRUDEL repositories. It does not matter how you navigate to Discussions, you will find the same content regardless.   
3. Search through the list of existing discussion threads and click on the one you’re interested in.   
4. You may leave whatever comment you wish, so long as it abides by our [Code of Conduct](https://github.com/strudel-science/strudel-kit/blob/5545943ad9d5a1e6cf5d719ee1ad3e7be6fd43cc/CODE_OF_CONDUCT.md). Sometimes, the first post on a discussion thread might include suggestions for how to respond. For example, [this thread](https://github.com/orgs/strudel-science/discussions/42) about proposing new Task Flows encourages respondents to answer a set of questions when responding. 

Discussions allow you to leave top level comments by scrolling to the bottom of the page and writing something in the “Add a comment” field. This will allow you to respond directly to the first post in the discussion. 

Alternatively, you can reply to someone else’s response by visiting their comment within a discussion and commenting in the field that has the “Write a reply” prompt. 

Github allows you to get others’ attention by tagging them. You might pull someone into a discussion by typing “@” in the text field and then typing their name or username. For example, you can tag Cody O'Donnell by typing @codytodonnell.

If you want to show support for an idea or draw attention to a topic, you can upvote [comments](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#upvoting-a-comment) and [discussions](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#upvoting-a-discussion).

#### Turning a Discussion into an Issue

Github allows users to create an issue from a discussion thread. Doing so would signal that a discussion has led to an actionable decision that will affect a STRUDEL repository. At present, we recommend that only STRUDEL maintainers take this step. As criteria for when turning a discussion into an issue become more clear over time, we will share these criteria so that others can do the same. If you have suggestions for these criteria or other commentary on who should be able to take what actions, you may want to [open a discussion thread](#opening-a-discussion) or to [revise the docs](#revising-the-docs) yourself. 


## Filing or Fixing a Bug

If there is a problem with the STRUDEL Kit, you can [file a bug](#opening-an-issue) to say so. If you want to fix a bug yourself, [say so in the relevant issue](#commenting-on-an-issue) and follow the same steps as those described in the [General Procedures](#general-procedures-for-version-controlled-changes) section. 


## Improving the Code

Improving, tidying, or refactoring code is another good way to contribute to the project. More info coming soon\!


## Proposing or Adding a Feature

Depending on the type of idea you have and interest in coding the changes yourself, you’ll follow different routes for proposing or adding a feature:

* If you don’t want to implement any changes yourself but want to propose a new feature, we suggest [opening a discussion](#opening-a-discussion).    
* If you want to add a new Task Flow, different to those included in the STRUDEL Kit, [see that section](#proposing-or-adding-a-new-task-flow).   
* If the change you have in mind is any other kind of new capability and you have a clear proposal, you should follow the steps described in the [General Procedures](#general-procedures-for-version-controlled-changes) section. If you open an issue yourself when following those steps, use the [Feature Request issue template](https://github.com/strudel-science/strudel-kit/issues/new?template=feature_request.md).


## Proposing or Adding a New Task Flow

You may be interested in contributing an idea, a design, code, or feedback on a new Task Flow. Here, we talk you through each step. 

### Proposing a Task Flow

If you have an idea for a new Task Flow, the first thing you should do is make a post about it in the [Propose a Task Flow discussion thread](https://github.com/orgs/strudel-science/discussions/42). This helps socialize your ideas immediately and prevent duplicate efforts. The top post in that thread indicates what goes into proposing a Task Flow: the name of the flow, the scientific motivation, and any examples that exist in current software. Examples could be something you have built or not, as long as they help communicate the common pattern you want to encapsulate into a Task Flow template.

Once you have made a post in the thread, other members of the community can [upvote or comment on](#contributing-to-a-discussion) your proposed Task Flow. This helps us vet and iterate on Task Flows while they are in the ideation phase. If there is consensus in the thread that this Task Flow is worth building out, one of the [maintainers](#maintainers) will indicate so in the thread and create an issue for the Task Flow using the New Task Flow issue template. If you want to lead the creation of this Task Flow, you can say so in the body of the issue. This doesn’t necessarily mean that you have to do all the work on the Task Flow, but it means that you are making sure the necessary steps are taken to take the Task Flow from idea to design to code.

### Designing a Task Flow

The next step to creating a new Task Flow is typically going to be designing how that Task Flow should look and function. There are multiple ways you can go about designing a Task Flow and you should choose whichever option that you prefer. No matter how you do it, your design must include visual representations of each of the screens that make up the Task Flow. 

Remember that you are making a generalizable template. This means that the design should not be too domain specific and should be easy to expand upon. For example, a Task Flow that is too specific might be a series of steps that allow users to add metadata according to a domain standard metadata scheme. A more generalizable Task Flow would be something that allowed app developers to enable use of any metadata scheme—not just that domain specific standard.

Whichever approach you use, once finished, you should attach screenshots of your designs to the issue thread in a new comment. If there is a link to a digital version of your designs (such as a Figma file), you should include that too.

Approaches you may use to designing a Task Flow include:

*Creating a Figma File*

[Figma](https://www.figma.com/) is the tool our team has used to design all of the existing Task Flows and is a great option for building your own Task Flow design. We use the MUI for Figma plugin for all the low-level components.

*Creating Sketches*

Pen and paper sketches are another effective way to share your designs. Feel free to use this method and attach photos to the issue.

*Using a Different Program*

There are many other programs you can use to make designs such as [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), [Sketch](https://www.sketch.com/), [Inkscape (free)](https://inkscape.org/), or even PowerPoint or Keynote. Feel free to use any tool that you are comfortable with and share either exported images or screenshots in the associated issue.

### Design Review

After sharing your design for a Task Flow, reach out via email ([strudel@lbl.gov](mailto:strudel@lbl.gov)) so we can set up a design review meeting with you to talk about the designs, scope the Task Flow, and discuss next steps. These will take place over Zoom. 

### Coding a Task Flow

Task Flows are implemented as code in our TypeScript React template app, [strudel-kit](https://github.com/strudel-science/strudel-kit). The templates are intended to implement the basic flow, UI, and certain key generalizable features of the Task Flow. 

**\! Tip:** You will need a working knowledge of JavaScript/TypeScript and React to develop a new Task Flow template. Check out [some of the resources linked on our website](https://strudel.science/design-system/code-library/) if you are just getting started with these tools.

Assuming [you already have an open issue](#start-with-a-github-issue) to work on, the first thing you will need to do to code a new Task Flow is follow the steps in [Setting up a local development environment](#heading=h.6qppe621p4yz) above. After this you will have a local copy of the template app that you can begin developing inside of. (You might notice that you are following the [General Procedures for making changes](#general-procedures-for-version-controlled-changes), described elsewhere in this guide).

Each Task Flow template resides in the `src/pages` directory and has its own directory named after the Task flow in kebab-case. A Task Flow template will consist of page components, inner page components, layout components, and a config. Read more about [the anatomy of a Task Flow](https://strudel.science/strudel-kit/docs/task-flows/overview) in our docs. Your new Task Flow should follow the same general structure as the other Task Flow pages.

For example, if the Task Flow is called Update Metadata, you will create a new directory in `src/pages` called `update-metadata`. Inside `update-metadata` you will make: 

* An `index.tsx` file (this is the first page of your Task Flow)  
* A directory called `_components` for any inner page components that are specific to this Task Flow  
* A directory called `_config` which inside you will add a `taskflow.config.ts` file and a `taskflow.types.ts` file.  
* Files for other pages in the Task Flow. For example, if there are two other pages besides the first page (index.tsx), then you will create two other page component files such as `analyze.tsx` and `visualize.tsx`. This will create the routes /update-metadata/analyze and /update-metadata/visualize.

The app uses a library called [Generouted](https://github.com/oedotme/generouted) to automatically generate page routes based on the files in the \`src/pages\` directory. See their [conventions documentation](https://github.com/oedotme/generouted?tab=readme-ov-file#conventions) for how to make more complex routes.


## Revising the Docs

Improving and maintaining the documentation for STRUDEL Kit is a welcome contribution. [New examples](#adding-an-example), [improved guides and tutorials](#improving-guides), typo fixes, better and more complete explanations are all helpful. 

The strudel-kit docs are built using [Docusaurus](https://docusaurus.io/), a Markdown-based documentation builder. You can find the markdown files for the doc pages in the `docs/docs` directory. You will make changes to the documentation by following the [General Procedures for making changes](#general-procedures-for-version-controlled-changes). 

If you would like to make additions or changes to the documentation, please keep the following in mind:

1. Avoid redundancy, keep it brief. This means you should link to other sections that explain concepts or procedures, rather than rewriting information. Link to dependencies’ documentation rather than rewriting what they already have. Assume that less text is better.  
2. Consider the audience. STRUDEL contributors may be professional research software engineers or they may be undergraduate students who attended a tutorial. When writing the documentation, consider what background knowledge and infrastructure they may already have and what you need to provide.  Examples may be helpful to provide.   
3. The general structure of this contribution guide is to move from high level information to specific examples of ways people can contribute. There isn’t necessarily a “right order” to the content, but we try to group information by topic and include information that applies to all contributions earlier in the docs, rather than later.  
4. Use consistent language and formatting. Follow these tips:  
   1. Use [title case](https://en.wikipedia.org/wiki/Title_case) for section titles.  
   2. Capitalize STRUDEL, STRUDEL Kit, and Task Flows.  
   3. Capitalize General Procedures when referring to [the usual steps](#general-procedures-for-version-controlled-changes) you would follow to make a change to the STRUDEL Kit  
   4. Do not capitalize repositories (e.g. strudel-kit).  
   5. Avoid acronyms and abbreviations. Say “pull request” not “PR.” Say “repository,” not “repo.”  
   6. When describing a step by step process, make each step a paragraph.  

### Improving Guides

There are several guides for working with the STRUDEL Kit in our documentation. If you would like to improve them, follow the [General Procedures for making a change](#general-procedures-for-version-controlled-changes). If you choose to address the issue yourself, you can edit the appropriate `.mdx` file under `docs/docs/guides`. 

If you have feedback about any of the tutorials but don’t have a specific change to the content in mind, we’d still love to hear from you. Make a post in our Discussions page under [Tutorials](https://github.com/orgs/strudel-science/discussions/categories/q-a).


## Adding an Example

A big to-do item for STRUDEL is to compile and share example implementations. We plan to add information to this guide on how you might share images, code, or interactive examples of the STRUDEL Kit put to use. For now, please share your example [in a discussion thread](#opening-a-discussion) under the [Show and Tell category](https://github.com/orgs/strudel-science/discussions/categories/show-and-tell?discussions_q=is%3Aopen+category%3A%22Show+and+tell%22). 


## Sharing UX Resources or Principles

Sharing UX resources is another great way to participate in the community. If you find an article, tool, or other resource that you think is relevant to STRUDEL or the user experience of scientific software, make a post about it in our Discussions page under [Show and Tell](https://github.com/orgs/strudel-science/discussions/categories/show-and-tell). You might also be interested in getting more involved in the broader UX in science community [via US-RSE and its UX working group](https://us-rse.org/wg/ux/).
