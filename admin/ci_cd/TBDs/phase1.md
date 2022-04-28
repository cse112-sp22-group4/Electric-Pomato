## Pipeline diagram
![Pipeline diagram]()

## Overview
  
### 1. Edit/Push to Feature Branch
The first step in our pipeline occurs when new code is pushed to a feature branch (`[feature type]/[feature name]`). These branches are where new features for our web app are first created by developers. ESLint Style/Linting checks and Jest unit tests occur on these branches. 

### 2. ESLint Style/Linting checks 
The next step in our pipeline is to run the ESLint tool for linting and code style enforcement.

This step is implemented using Github Actions and is defined in the workflow at `.github/workflows/lint.yml`. This workflow runs the linter configured with the Airbnb style guide on the code. This step in our pipeline is currently functional and will continue to work as we add new feature branches. 

### 3. Automated Jest unit tests
After the code goes through the linter, we then run our automated unit tests on the code using Jest. 

This step is implemented using Github Actions and is defined in the workflow at `.github/workflows/jest.yml`. This workflow runs the command `npm run test` which runs our unit tests (located in the `source/__tests__` folder) on the source code. This step in our pipeline is currently functional and will continue to work as we add new source code and tests. 

### 4. Pull Request to main
Once the feature is ready and has passed through the linter and Jest unit tests, the developer can then make a new pull request to the `main` branch.

### 5. Compile SCSS and deploy test website
After the pull request is made, the next step is to deploy a preliminary version of the website with the new feature for end-to-end/manual testing. 
Idea: Use Firebase hosting Github action to deploy a preview webpage for every PR?
If manual testing not required, could also just compile SCSS on cypress docker and then run end to end tests locally on that docker  

### 6. End-to-end tests  
Once the test website is deployed, the next step is to run our automated end-to-end tests on the website using Cypress. 

### 7. Manual testing/review 
After the code passes end-to-end tests, the pull request is reviewed and the new feature can be manually tested on the test website. 

### 8. Merge pull request to main  
After the new feature code passes both the end-to-end and manual tests, the pull request can be merged to the `main` branch. 

### 9. Generate JSDocs 
Once the code is successfully merged, the next step in our pipeline involves automatically generating documentation from the code. 

### 10. Deployment
The final step in our pipeline is deployment, which occurs when the code has arrived on the main branch and JSDocs are generated.  
checkout docs and code to production and then deploy production using Github Pages

## Demo video
A video demo of our phase 1 pipeline can be found [here]()