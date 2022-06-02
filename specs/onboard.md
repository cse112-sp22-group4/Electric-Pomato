# Onboarding For New and Future Developers

Welcome! This page aims to help you familiarize yourself with our repo, and where to find and place things.

## Introduction, What is this project?

This project is the result of a 10 week UCSD class, CSE 112, during Spring 2022. The eight of us were grouped together and asked to create a Pomodoro Timer application while also learning the ins and outs of Agile practices. As such, the organization of our repo might be hard to navigate for those not familiar with our assignments or the Agile practice itself. But, the TLDR of this is repo is that is produces a website that uses the Pomodoro Technique to help the user organize and focus on their tasks.

## Where is the code?

Our code is stored in the [`source`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/source) directory. Inside of this directory are a variety of directories that are described below:

- [`__tests__`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/source/__tests__): This directory stores our unit tests which are run through Jest. The code coverage can be found in the [`coverage`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/coverage) directory in the root.
- [`docs`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/production/docs/cse112-spr22-group4/0.8.0): This directory is generated JSDocs documentation on our code. These files are created by our GitHub Actions, so don't touch them since they will be regenerated on each run. [JSdocs Generated Website](https://cse112-sp22-group4.github.io/Electric-Pomato/docs/cse112-spr22-group4/0.8.0/index.html)
- [`img`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/source/img): This directory stores any image assets that are used by our website.
- [`js`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/source/js): This directory stores all of our JavaScript classes, and scripts. If you're unsure about what each file does, please look over our JSDocs documentation, or the inline comments in the files.
- [`scss`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/source/scss): This directory stores our Sass scripts for styling.

The `.html` files within [`source`](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/source) are our individual webpages. Each file relates to a seperate section of our website:

- [`app.html`](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/source/app.html): This is where all the fun is. This file is used to display our timer, and task lists. Essentially its the main feature of our project.
- [`index.html`](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/source/index.html): This is the homepage of our project. This page holds documentation on how to use our website, and lets the user create a new session.

## Who decided to do that?

If you're unsure or confused on some of the design choices of our project, please read over our [ADR's](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/adrs). Each ADR discusses the choices considered, and the reasons that certain choices were made. This should give some insight into the choices we've made and why. If you wish to look over our meetings (which often have decision making inside of them), check out our [meeting notes](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/admin/meetings) to review some of our discussions. For our ADRs check [first group discussion](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/adrs/051022-frontend-decisions.md), [second sprint](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/adrs/sprint2-ADR.md), and [third and final sprint](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/adrs/sprint3-adr.md)

If you're curious about the design process itself, check out our [brainstorming](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/specs/brainstorm) directory which stores old renditions and ideas for our project. You can also check our some of our [rough drafts](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/specs/interface/rough). For some more of our [finalized frontend designs](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/Documentation/ADRs/specs/interface/highfidelity/high_fidelity_interface_design.pdf), and our finalized backend designs can be found [here](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/specs/interface/wireframe). If you want to see decisions discussed and accepted you can view our [ADRs](https://github.com/cse112-sp22-group4/Electric-Pomato/tree/main/specs/adrs)

## Resources to get started

Additionally, we have a few resources to help you get started. To set up the workflow of this repository locally, check our the main [README](https://github.com/cse112-sp22-group4/Electric-Pomato#readme) file of our repository. They include a couple of [Wiki](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki) pages to help you get used to the workflow of Github and our project. These pages include links to our [group page](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki/Group-Wiki), [how to post an issue on Github](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki/How-to-Post-an-Issue-on-Github), [how to work on an issue](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki/How-to-Work-on-an-Issue), and the [CI/CD pipeline](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki/CI-CD-Pipeline).   
