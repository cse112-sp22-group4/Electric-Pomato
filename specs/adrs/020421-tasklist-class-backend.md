# Feb. 4th 2021, TaskList Class for BackEnd ADR

Resources to get started:

- [Script](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/TaskListUI.js)
- [Dev Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/020421-dev.md)

## Status: accepted

## Deciders: Andy, Annika, Teresa

## Context and Problem Statement

How should we design the TaskList object? Additionally, the development team wants to think of how this object will behave in different situations.

## Things to consider

1.	Should we allow the user to modify the task list? If so, how should the user edit a task on the list?
2.	How should we store information from the task list?
3.	What should be stored in each Task object?
4.	How should we handle initialization of the task list?
5.	How should we handle modifications to the task list?
6.	How should the split the work amoung our members?
7.	How should we divide the functionality of the editable TaskList in terms of JavaScript files?
8.	Consider one or more TaskList objects.
9.	How do we deal with the user refreshing the page?
10.	Is it much easier to work with the task list if it’s converted to a Session object?
11.	How should we handle the interactivity of the task list?
12.	Should we rebuild or re-render the task list every time it's updated?

## Decision Outcomes

1.	The ability for the user to edit the task list is a reasonable and achievable addition for the amount of time we have in the quarter. UPDATE: the TaskList object on the timer page is no longer editable. See #7 for more information.
    - Don’t have a separate button to edit a task on the list because it might be annoying. Instead, allow the user to click on the input itself to edit the task.
    - ~~For now, don’t add the option to reset the task list or remove tasks from the list during the day. A warning should pop up saying that their task list is final once they’ve finished adding tasks.~~ Update: the inability to remove a task is probably an annoying impediment to the user. It’s also not unviable to implement such a thing. Adding a reset task feature is still superfluous, though.
    - Use onclick in JavaScript instead of the input keyword in HTML. Andy says the advantage for using onclick is that we will have access to it in the Javascript file and some scoping blocks.
    - What is an unconscionable request for the development team to add, however, is the ability to shift tasks around in the task list -- we don't want to inundate the development team with too many features.
2. The development team has decided to use LocalStorage for storing information on the task list.
    - LocalStorage is germane to the task list because nothing important is being stored. Some members are worried about using LocalStorage because it's not secure, but it shouldn't be a concern because of the aforementioned reason. Andy points out that this is perfect because it’s also bigger than SessionStorage and Cookie storage. 
    - For this project, we’re not storing user accounts, which means we aren’t using servers in the backend. Thus, there’s no need to use more than just LocalStorage.
3. We will pretty much store the same things that are mentioned in the design team’s design, which are the names of the tasks, expected number of Pomodoros, and actual number of Pomodoros.
    - Update: a Task object needs to also keep track of a task ID, remaining time for the timer, a Boolean variable to keep track of whether the task has been completed, and variable(s) to keep track of whether we’re on a long break or a short break. 
4. A TaskList object should be initialized by itself and extend LocalStorage.
    - It should initialize with no arguments, check LocalStorage to see if there are saved tasks, and initialize each of those tasks as instance variables. Otherwise, the TaskList object will just initialize empty.
5. Whenever the user modifies the task list, it should save the contents to LocalStorage immediately.
    - It allows the TaskList object to act as a data store with its own methods to abstract LocalStorage.
6. The members of the development team that will work on the task list classes are Andy, Annika, and Teresa
    - Andy: work on the source code for TaskList and TaskListUI and discuss as many edge cases as possible with Enrique and Annika for them to handle.
    - Annika: perform exploratory coding in the TaskList.js script and work on edge cases for both the TaskList and TaskListUI classes.
    - Teresa: stylize the TaskList code.
    - Enrique: Not part of the group that’s implementing the code for the task list, but he will be writing unit tests for the TaskList class.
7. The TaskList component of our application will contain three parts (files): EditableTaskList.js, EditableTaskListBody.js, EditableTaskListInput.js.
    - EditableTaskList.js: serves at the wrapper container for the body and input files below.
    - EditableTaskListBody.js: acts as the container for the tasks that were added - is able to edit, save, cancel, and remove tasks.
    - EditableTaskListInput.js: acts as the container for the bottom input section of the task list. This was previously AddRow.
9. There should be two different task lists: one that's view-only and one that's editable.
    - The view-only task list should be the task list that simply displays upcoming and completed tasks to the user.
    - The editable task should only appear once the user clicks on the pencil icon to edit.
    -  UPDATE: after re-evaluating the decision drivers in our High Fidelity Design ADR, the development team chose to only enable the editable task list during the initial start TaskList page (before pressing "Start My Day"). Once again, we want to keep the logic of the overall application straightforward and intuitive for the user. Moreover, permitting the user to create more tasks after completing the initial task list defeats the purpose of the "Start My Day."
        -  The motivation for making such a change stems from Francesco's deliniation of his Pomodoro Technique philosophy. The user must put full focus on realizing their task at hand during every Pomodoro session. Thus, to motivate the end user to get into such a mindset, it's better to disable the editing feature during the session.
        - The pop-up task list only has a viewable version.
        - During the "Final Task" break, the user will no longer be queried to add any more tasks.
        - The scope of a "session" will now represent an entire day. The only way to change the task list is to start over from the landing page.
10. Refreshing or exiting the page should just void the Pomodoro.
11. ~~The development team decided that it’s much better to convert the TaskList object to a Session object.~~ Update: it’s better to keep these two objects separate. The session script will act as the middle man between the Timer and the TaskList object. This is because the session script is only communicating with UI components.
    - ~~One reason is because the TaskList object is already doing LocalStorage read and writes.~~
    - ~~It’s better to keep all the LocalStorage manipulation in one place because it makes the job of the main script easier – all it has to do is run new Session() and call the methods to do its logic.~~
12. The pop-up task list should be a button with its own standalone logic. Teresa or Annika will implement this part of the task list.
13. ~~We should update the task list by rebuilding. That is, we should procedurally inject HTML code into the task list via innerHTML every time something changes, even if it's a small change.~~ Update: Don't rely on rebuilding the task list every time something changes. Instead, we should just re-render the task list.
    - Rebuilding the task list was rather inefficient -- it completely destroys and recreates the HTML elements; not to mention that it also removes event listeners, making it hard to manage references. Additionally, Andy says a problem they've had is that the TaskList object is an instance variable, which means it won't be able to handle edits as the user is pulling up the task list on the web application.
    - Thus, by going with a component based approach and cloning the template for each row, we can store references to each row and keep track of the state easily.
    - Additionally, this prevents the need to re-render the HTML portion of the task list after each change.
    - One thing to keep in mind, however, is that we should also create a separate TaskList object for the session script so it has its own list that can be rendered safely.