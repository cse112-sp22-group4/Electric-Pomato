/**
 * @file Holds the code the general functionality of the TaskList.
 * @author Andy Young
 * @author Annika Hatcher
 * @author Arman Mansourian
 * Date: 03/07/2021
 */

import * as backend from '../backend.js';

/**
 * Creates the TaskList class and define its helper functions.
 */
class TaskList {
  /**
   * Constructor for the TaskList object.
   */
  constructor() {
    // Checks localStorage for TaskList item.
    const stored = JSON.parse(backend.get('TaskList'));

    if (stored == null) {
      // If null, initialize variables to default value and save to localStorage.
      this.reset();
    } else {
      // Otherwise, initialize variables to stored data.
      this.todo = stored.todo;
      this.completed = stored.completed;
    }
  }

  /**
   * Reset instance variables to default empty value and save to localStorage.
   */
  reset() {
    this.todo = [];
    this.completed = [];
    this.save();
  }

  /**
   * Save the instance variables to localStorage.
   */
  save() {
    // Writes a stringified object with instance variables of TaskList to localStorage.
    backend.set('TaskList', JSON.stringify({ todo: this.todo, completed: this.completed }));
  }

  /**
   * Add new task to todo with given name and expected pomodoros.
   * @param {string} name - Name of task.
   * @param {number} expected - Expected number of pomodoros.
   */
  createTask(name, expected) {
    // Put inputs into a task object with initial actual value of 0.
    const task = {
      name,
      expected,
      actual: 0,
      time: 0,
    };

    // Push task into todo list.
    this.todo.push(task);
    this.save();
  }

  /**
   * Remove task from todo at given index.
   * @param {number} index - Index of task to remove.
   */
  deleteTask(index) {
    this.todo.splice(index, 1);
    this.save();
  }

  /**
   * Update the task at the given index with the given name and expected pomodoros.
   * @param {number} index - Index of task to update.
   * @param {string} name - Updated name of task.
   * @param {number} expected - Updated expected number of pomodoros.
   */
  updateTask(index, name, expected) {
    const todoListSize = Object.keys(this.todo).length;
    if (index >= todoListSize) {
      return;
    }
    this.todo[index].name = name;
    this.todo[index].expected = expected;
    this.save();
  }

  /**
   * Add a pomodoro to the current task.
   */
  addPomo() {
    this.todo[0].actual += 1;
    this.save();
  }

  /**
   * Update task time and todo/completed after finishing a task.
   * @param {boolean} doUpdateTime - True to update the time for the current task.
   */
  finishTask(doUpdateTime) {
    if (doUpdateTime) {
      this.updateTime();
    }
    const current = this.todo[0];

    this.completed.push(current);
    this.deleteTask(0);
  }

  /**
   * Keep track of when a task it started.
   */
  startTask() {
    this.startTime = Date.now();
  }

  /**
   * Add the elapsed time to the current task and increment pomos if it's at least half a session.
   */
  updateTime() {
    const endTime = Date.now();
    const workTime = (endTime - this.startTime) / 1000;
    const workSessionDuration = backend.get('WorkSessionDuration') * 60;
    this.todo[0].time += workTime;
    const secondsOnTask = this.todo[0].time;
    const pomosOnTask = Math.round(secondsOnTask / workSessionDuration);
    this.todo[0].actual = pomosOnTask;
    this.save();
  }
}

export default TaskList;
