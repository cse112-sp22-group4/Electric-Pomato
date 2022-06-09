# May 28th 2022, High Fidelity Design for FrontEnd ADR
> (Last Modified: 1 June 2022, by Liam Stone)

Resources to get started:

- [Current Design Idea](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Previous ideas that have already been implemented](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/adrs/052022-sprint2-ADR.md)
- Ask anyone from design team about this.

## Status: accepted

## Deciders: Liam, Mark, Alan, Xingyu, Meshach, Christopher, Luke, and Steven

## Context and Problem Statement

How can we enhance the features and mechanics already in place and add in new features and mechanics to improve the website? These decisions are what has since been talked about/accepted since our last ADR edit

## Decision Drivers

- Simplicity and intuitiveness.
- Francesco Chirillo's Pomodoro Technique philosophy.
- Task and time management.
- Userneeds
- Requests from Professor and TA

## Decision Outcome (bolded options indicate the features we decided to implement)

  - Use a cross platforming tool such as electron
    - This would've helped with bugs we were facing at the time, but we ultimately solved any problems that electron might fix
    - We also were facing a major time shortage along with other tasks to finish at the time
  - Use a tutorial service for new users
    - We looked into various tutorial tools, but given the time constraint we decided to use photos along with explinations of the photos
    - This still looks visually appealing while fitting into our time constraint
    - We were facing a problem of changing the timer states without running the timer so we decided this was the easier option while still looking good
  - __Add a UI enhancement to have the icon on the screen showing how many Pomos are left for a given task__	
  - __Keyboard shortcut__
    - allow user to edit how many pomos they expect a task to take using ctl+arrow keys
  - __Background notifications finally working__			
  - __Timer page has cypress testing block__
  - __Audio notifications__				
  - __Finalizing instruction cards__	
    - We added pictures to the info portion. this was the stand in we decided on instead of the tutorial	
  - UI Changes
    - __hover for edit name icon__
      - Users thought it was abstract to guess what the pencil meant and wanted a hover icon to tell them they can edit the name
    - __Start my day → start my session__
      - Users thought it was weird everyone on our website talks about sessions, but we use day in two locations
      - For consistency we changed it to session
    - __Info page popup when user enters name__
      - First time users don't know how to use the page and might not be able to find the info icon right away
      - This allows first time users immediate access to the info needed for using our application	 			
    - __Task bar title updates with timer value/favicon changes__
      - When a user changes to another tab (during break or while working) they won't have to go back to the website to know how much time is left
      - Now timer is available in the tab. Easier for user	
    - __Task title only shows first 20 characters__
      - Some task names might be very long and we want to limit as many distractions on the main page as possible
      - This also allows for the timer to be as large as possible on the main page and be the main focus
 
