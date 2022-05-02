# Spring 2022, CSE 112 - Group 4

## The TBDs!

Welcome! We are The TBDs, a group of 8 students enrolled in Spring 2022's CSE 112. To learn more about us, go to our [group wiki page](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki). Below are some helpfull links that we believe help you navigate our repo and it's deployed project:

- Our website can be found [here](https://cse112-sp22-group4.github.io/Electric-Pomato/)
- JSDocs Documentation on our code can be found [here](https://cse-110-group-29.github.io/Electric-Pomato/docs/cse112-sp22-group4/0.8.0/index.html) TODO
- For new devs, please read over our more in-depth onboarding to familiarize yourself with our repo's structure [here](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/onboard.md)

## Getting Started
- Make sure `node` is installed
- `cd` to root directory of local repository `cse112-w22-group4/`
- From console run `npm install` to install dependencies locally, also try `npm ci` if necessary.
> Note: `npm install` will install all dependencies into a directory called `node_modules/` which will not be tracked by git so it has been added to the `.gitignore`, we won't be including this directory in the remote repo.

## Running the app locally
- Run `npm run dev` and our bundler (parcel) will build the source directory and serve the app through `localhost:1234`
- Any changes made while running the app will be handled by parcel as well.

## Airbnb Linter Setup Instructions (VS Code)
- Download [ESLint VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension.
- Run the linter locally, `npm run lint`.

## Running Tests With Jest
- Make sure repo is up-to-date, `npm ci`.
- Run unit tests that are found in `source/__tests__/` by running jest, `npm run test`.
- To get the code coverage report, please run: `npm run coverage`.

## Branches
- To make sure your code is synced with the repo, and up-to-date, run `git fetch --all`.
- To remove old/deleted branches from your local machine, run `git fetch --prune`.
- To make a new branch and check it out, run `git checkout -b <branch_name>`.

## Contributing

To start contributing, first look over our [onboarding](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/onboard.md) doc to familiarize yourself with our repo. Then make sure to check our wikis on [creating issues](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/How-to-Post-an-Issue), and [working on issues](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/How-to-Work-on-an-Issue).

## Contributors

A list of our group:

- @AllenZou123
- @amansourian
- @anhatche
- @ayoung19
- @DonaldWolfson
- @justlee0606
- @liamstone1814
- @PitEG
- @truotere
- @HarrisSteven
