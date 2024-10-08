# Contributing to STRUDEL

Hi and thank you for being part of the STRUDEL community! This guide will describe the several ways you can contribute to STRUDEL including but not limited to the design, development kit, and website. This guide is a work in progress so check back soon for more information about the many ways you can contribute to STRUDEL.

## Code of Conduct

We are currently developing our own code of conduct however in the interim, we will be following the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) to ensure our community is inclusive, welcoming, and effective.

## Adding a feature or fixing a bug in strudel-kit

If you would like to propose a change to strudel-kit, be it a bug fix or a whole new feature, the first thing you should do is [open an issue](https://github.com/strudel-science/strudel-kit/issues) in the strudel-kit repo. Here we will have a discussion about the issue and how it should be addressed. If the change is something you would like to take on yourself, please indicate this in the issue thread.

If you would like to develop and contribute a change yourself, the next thing to do is fork the [strudel-kit](https://github.com/strudel-science/strudel-kit) repo. Next, follow the steps in the specific package you are making a change to to create a local instance of the package. For example, if you are developing a change to a task flow template or the baseapp, you would go into the `strudel-taskflows` directory and install the dependencies with `npm install` and run the app locally with `npm start`. If you are making a change to the docs, you would do the same but in the `docs` directory.

Next, code your change! We currently do not have automatic linting turned on so please follow the style used in the templates the best you can. We are largely following the [AirBnB React Style Guide](https://github.com/airbnb/javascript/tree/master/react) in `strudel-taskflows`. Because the code is meant to be used as a template for users, it is okay to be liberal in your usage of comments throughout the code. 

Once your code is ready, open a pull request to the `main` branch of strudel-kit and describe your change in detail. Ensure that all tests are passing. One of the core team members will engage with you in the PR thread and approve the changes or request some changes. Once ready, one of the core team members will merge your code into the kit!

### Connect with the Team

If you have any trouble, we are happy to work more closely with you. If you would like to schedule a time to meet with the STRUDEL team directly, send an email to strudel@lbl.gov.

## Adding a new Task Flow

We encourage community members to propose and develop whole Task Flows and incorporate them into the STRUDEL system. As far as contributing the code for the new Task Flow, all the same guidelines as described above apply. However, for a Task Flow, you will also need to include sketches or mockups when you open an issue proposing the Task Flow. It's okay if these are not fleshed out. We can work together to design and scope the Task Flow.