# May 10th 2022, High Fidelity Design for FrontEnd ADR
> (Last Modified: 10 May 2022, by Liam Stone)

Resources to get started:

- [Presentation](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/specs/interface/highfidelity/high_fidelity_design.pdf)
- [Current Design Idea](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Previous ideas that have already been implemented](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/liamstone1814-patch-1/specs/brainstorm/Brainstorm_%20Design_Ideas.pdf)
- [Design Team Meeting. Almost same as this ADR, but shows slightly more](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/main/admin/meetings/Frontend%20Meeting.pdf)
- Ask anyone from design team about this.

## Status: accepted

## Deciders: Liam, Mark, Alan, and Steven

## Context and Problem Statement

How can we enhance the features and mechanics already in place and add in new features and mechanics to improve the website?

## Decision Drivers

- Simplicity and intuitiveness.
- Francesco Chirillo's Pomodoro Technique philosophy.
- Task and time management.
- Easier to use for the User.
- Stay true to previous implementation

## Decision Outcome (bolded options indicate the features we decided to implement)

1. Enhancements to previous project and bug fixes.
    - __the landing page instructions were not rendering properly on different sized viewports__
        - Solution: Remove instructions from the landing page
        - Add an instructions pop-up modal that users can access by clicking on a menu icon. Have the modal automatically pop-up once the user enters their name and enters the task list view.
    - __Current web page doesn’t work if the internet disconnects while using the website__
        - Solution: Make the webpage PWA compatible so timer will still run even if disconnected from the internet
    - __Notifications only worked if you were on the web page or you were on a Mac__
        - Improve background notifications so that if a user is off the webpage (for instance during a break) the timer will alert them when finished.
    - __Users can’t move on to the next task if they finished a task in the middle of a session__
        - Solution: Add a “finish task” button that allows users to finish the current task in the middle of a Pomo session
    - __The current webpage does not work with keyboard controls__
        - Solution: Add keyboard controls so users can operate the website using only a keyboard 
    - __The Electric Pomato logo lead back to the homepage which was not clear to users__
        - Solution: Remove the functionality from the logo
        - Add a dedicated homepage button that prompts the user if they’re in the middle of a session	
    - __Certain disabilities have no access to our webpage (EX: blind people)__
        - Solution Make webpage 100% HTML valid to be compatible with screen readers 
    - __Bug: New task list item content is reset after editing a new task item__

2. User interface planned changes.
    - __We want to redesign homepage to remove instructions/better make use of space. We plan to add a menu bar with icons for instructions, settings, stats/report, and home
Settings button - opens settings pop-up modal with options for:__
        - Pomo Timer duration
        - Short Break duration
        - Long Break duration
        - Settings button will recommend default length for pomo sessions and short/long breaks to stay truthful to the Pomodoro technique (25 min session, 5 min short break, 15 min long break) 
    - __Instructions button__ - opens instructions pop-up modal with previous 3 cards
    - Arrange cards vertically to maintain the same appearance on different sized viewports
    - Automatically pop-up modal when user enters name for the first time
Stats button - opens stats report modal with chart from done.html
    - Automatically pop-up modal when user ends a session
    - Home button - go to homepage
    - Prompt user if user clicks on home button in the middle of a session
    - Menu bar will be hidden when a user visits the webpage for the first time to reduce clutter 
    - __Title changes__
        - Move title to center of webpage to make room for menu bar, allow user to more easily focus on current task
        - Change title to display whether a user is on a short or long break
        - When a user starts the break timer, title will display “Short/Long Break” and the current/next task title 
        - If the user is currently waiting for/on a task, task title will be “Current Task:”
        - If the user is about to move on to the next task, task title will be “Next Task:”
        - If the user is currently waiting for/on the final task, task title will be “Final Task:”
    - __We plan to add a finish task button to task page__
        -The Finish task button will prompt the user to confirm if they want to move on
    - __Finish task button will change to end session button if user is on final task__
    - __Change prompt at end of session to only allow user to go back to homepage__

3. Miscellaneous features.
    - __Update the website title with the current timer value if the timer is running__
    - __Add audio notifications for timer that can be controlled from settings__

4. User information storage.
    - __Users might want to view their progress during a break. The report page also is clunky/has some browser navigation bugs__
        - Solution: Remove the report page
        - Add a report pop-up modal that users can access by clicking on a menu icon. Have the modal automatically pop-up once the user finishes their session and returns to the homepage
