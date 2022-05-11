# May 7th 2022, Code Quality Workflow ADR
> (Last Modified: May 7th 2021, by Alan Wang)

Resources to get started:

- [Github Action](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/.github/workflows/lint.yml)
- [Codacy Analysis CLI Github Action](https://github.com/marketplace/actions/codacy-analysis-cli)

## Status: accepted

## Deciders: Alan, Mark

## Context and Problem Statement

How should we conduct code quality checking in our pipeline? 

## Things to consider

1. Which framework should we use for code quality checking? 
2. When should we conduct code quality checking in our pipeline? 

## Decision Outcome

1. We will use Codacy for code quality checking.
   - Codacy seems to be a popular code quality framework, was suggested by our TA.
   - Alan has some experience with Codacy.
   - Codacy setup is minimal, we only need to add the Codacy Analysis CLI Github action to our pipeline.
2. Code quality checks will be conducted when a developer makes a new push to a feature branch, after linting.  