# May 20th 2022, High Fidelity Design for FrontEnd ADR
> (Last Modified: 1 June 2022, by Liam Stone)

Resources to get started:

- [Current Design Idea](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Previous ideas that have already been implemented](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/adrs/051022-frontend-decisions.md)
- Ask anyone from design team about this.

## Status: accepted

## Deciders: Liam, Mark, Alan, Xingyu, Meshach, Christopher, Luke, and Steven

## Context and Problem Statement

How can we enhance the features and mechanics already in place and add in new features and mechanics to improve the website? These decisions are what has since been talked about/accepted since our last ADR

## Decision Drivers

- Simplicity and intuitiveness
- Francesco Chirillo's Pomodoro Technique philosophy
- Userneeds
- Requests from TA

## Decision Outcome (bolded options indicate the features we decided to implement)

 - __Mobile integration__
  - Our mobile site is not nearly as nice as the website on windows or mac
  - We decided to edit this as best as we could
 - End to end testing/unit testing
  - This was ultimatly scrapped from this sprint due to time constraints
 - __Finish Task Button__
  - If a user was mid pomo but finished a task we didn't want them to have to wait x amount of time before starting their next task
  - This edit allows users to move to next task without stopping their workload
 - Onboarding Documentation Edits
  - This was ultimatly scrapped from this sprint due to time constraints 
 - __Timer’s Throttle bug__
  - When user is on an older browser or working with multiple tabs open the timer slows down and doesn't show the exact time
  - We want the timer to always work properly even if the UI is catching up (we don't want a 25 minute pomo to last 35 minutes)
 - Background Notifications
  - Not finished
  - There were many bugs and it didn't work on windows
 - __100% HTML Valid/cleaning up code quality warnings__
  - We got the code quality checks to work and implemented as part of the CI/CD pipeline
  - 100% HTML validity is harder to complete. Previous team used bootstrap which lead to many Divs instead of proper labeling
  - We are trying to get as close to 100% HTML valid as we can before the timeline
 - Keyboard shortcuts
  - Small bug. Edits multiple tomatoes instead of just the task we want to edit
