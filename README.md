# Spring 2022, CSE 112 - Group 4

## The TBDs!

Welcome! We are The TBDs, a group of 8 students enrolled in Spring 2022's CSE 112. To learn more about us, go to our [group wiki page](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki). Below are some helpfull links that we believe help you navigate our repo and it's deployed project:

- [Our website](https://cse112-sp22-group4.github.io/Electric-Pomato/)
- [JSDocs Documentation](https://cse112-sp22-group4.github.io/Electric-Pomato/docs/cse112-spr22-group4/0.8.0/index.html)
- [Onboarding Process](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/onboard.md) for new members.

![image](https://user-images.githubusercontent.com/50246963/171939844-da0fb03e-c243-46ca-846e-b1e9505a75b0.png)


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
- Our formating for making branches is to have [folder]/[changes] where folder means what are you changing (Enhancements, Bugs, Documentaion, ect.) and the changes can be what ever task you were assigned to finish

![image](https://user-images.githubusercontent.com/50246963/171940370-4958d164-8065-44e5-85b3-cd7754cf124c.png)


## Contributing

To start contributing, first look over our [onboarding](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/onboard.md) doc to familiarize yourself with our repo. Then make sure to check our wikis on [creating issues](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki/How-to-Post-an-Issue-on-Github), and [working on issues](https://github.com/cse112-sp22-group4/Electric-Pomato/wiki/How-to-Work-on-an-Issue). Good place to start is with the [peer reviews](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/admin/misc/Notes%20from%20Peer%20Reviews.pdf)

## Contributors

A list of our current group:

- @liamstone1814
- @markbussard
- @HarrisSteven
- @alanlwang1
- @LJMNZS
- @46chris
- @xingyuzzzhu
- @meshachadoe

A list of our previous group:

- @AllenZou123
- @amansourian
- @anhatche
- @ayoung19
- @DonaldWolfson
- @justlee0606
- @PitEG
- @truotere
- @HarrisSteven
