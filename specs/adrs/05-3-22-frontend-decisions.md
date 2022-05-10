# May 4th 2022, High Fidelity Design for FrontEnd ADR
> (Last Modified: 4 May 2022, by Liam Stone)

Resources to get started:

- [Presentation]()Not available yet 
- [Current Design Idea](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Previous Brainstormed Ideas](https://github.com/cse112-sp22-group4/Electric-Pomato/blob/liamstone1814-patch-1/specs/brainstorm/Brainstorm_%20Design_Ideas.pdf)
- [Design Team Meeting](TODO) TODO
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

1. User interface planned changes.
    - __Redesign homepage to remove instructions/better make use of space Add menu bar with icons for instructions, settings, stats/report, and home
Settings button - opens settings pop-up modal with options for:__
        - Pomo Timer duration
        - Short Break duration
        - Long Break duration
        - Settings button will recommend default length for pomo sessions and short/long breaks to stay truthful to the Pomodoro technique (25 min session, 5 min short break, 15 min long break) 
    - Instructions button - opens instructions pop-up modal with previous 3 cards
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
    - __Add finish task button to task page__
        -The Finish task button will prompt the user to confirm if they want to move on
    - __Finish task button will change to end session button if user is on final task__
    - __Change prompt at end of session to only allow user to go back to homepage__

2. Enhancements to previous project and bug fixes.
    - __Landing page instructions were not rendering properly on different sized viewports__
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

3. Miscellaneous features.
    - __Update the website title with the current timer value if the timer is running__
    - __Add audio notifications for timer that can be controlled from settings__

4. Functionality.
    - __Begin button for the timer: to clarify, we were debating on whether the timer should start immediately after adding completing the task list at the beginning of the day or prompt the user to start when they're ready. We decided to do the latter. That is, to add a button prompting the user so the application doesn't start untowardly.__
    - Exit application button during the break timer: the user can just close the application any time. Additionally, it just adds more clutter.
    - Hide timer and supplant it with a hoverable "bar:" this might make the application a lot less intuitive and understandable for the user.
    - __"I finished early!" button: the user needs to be able to indicate if they finish their task early so they don't get stuck on the same task even if they've completed it.__
    - __"I need more time!" button: the design team wants to the change the button if the number of actual Pomodoros exceeds that of the user's estimated Pomodoros because of the following philosophy behind the Pomodoro Technique: you should start getting a feel for how much time each task should take as you employ this technique, which should help you with planning. This small time pressure should help encourage the aforementioned idea.
        - Update: Teresa brought up that both buttons ("I need another Pomodoro" and "I finished") should be implemented; these buttons should have a toggle function that enables the user to swap between these two buttons. Clicking on "I finished!" changes the screen to the "Next Task" screen while clicking on "I need another Pomodoro" should change the screen to the "Current Task" screen.
    - __Prompt the user to input more tasks if they completed all their tasks for the day: ~~perhaps the user may want to do more tasks in a single day, and this doesn't add much complexity.~~
        - ~~Update: after getting feedback from the development team, they think that implementing this is wishful thinking.~~
        - Update 2: we changed our minds again. The application should show the prompt after the user completes the last task. The timer will still count down while the prompt is shown on the screen; however, if the timer fully elapses, then it should automatically take the user to the Records Sheet screen.
5. User information storage.
    - __Users might want to view their progress during a break. The report page also is clunky/has some browser navigation bugs__
        - Solution: Remove the report page
        - Add a report pop-up modal that users can access by clicking on a menu icon. Have the modal automatically pop-up once the user finishes their session and returns to the homepage
