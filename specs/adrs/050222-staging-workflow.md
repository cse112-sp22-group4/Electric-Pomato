# May 2nd 2022, Staging Workflow ADR
> (Last Modified: May 2nd 2021, by Alan Wang)

Resources to get started:

- [Github Action](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/.github/workflows/staging.yml)
- [Firebase Deploy Github Action](https://github.com/marketplace/actions/deploy-to-firebase-hosting)
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)

## Status: accepted

## Deciders: Alan, Mark

## Context and Problem Statement

How should we deploy a staging version of the code for end-to-end testing/manual testing?
How should we conduct end-to-end testing? 

## Things to consider

1. Should we dedicate a specific branch for staging or use a different method?
2. Where should we deploy the staging version? 
3. What framework should we use for end-to-end testing? 
4. When will end-to-end/manual tests be ran? 

## Decision Outcome

1. We will use Firebase's preview channels to deploy staged versions of the code
   - Instead of a singular staging branch, preview channels host a separate deployment for each pull request.
   - Preview channels allow for multiple features to be deployed and tested at once.
   - Preview channels allow for easy viewing by developers for manual testing.
   - Preview channel setup is minimal, we only need to setup a Firebase project for our code and add the Firebase Deploy Github action to our pipeline.
2. End-to-end/manual tests will be ran on the preview channel on every new pull request to main that involves the source code.
3. We will use Cypress for end-to-end testing 
   - Steven has some experience with Cypress and mentioned that he had a good experience with it.
   - Cypress is more suited for end-to-end tests than Puppeteer.
   - Documentation for Cypress is more complete, making it easier to learn.
   - Previous group also mentioned using Cypress for end-to-end tests.    