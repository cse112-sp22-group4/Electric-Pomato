import StartButtons from '../js/components/StartButtons.js';
import TaskList from '../js/classes/TaskList.js';

describe('StartButtons tests', () => {
  test('Constructor When TaskList is empty', () => {
    const startButtons = new StartButtons();
    // start buttons generate one child start container
    expect(startButtons.childElementCount).toBe(1);
    expect(startButtons.firstChild.nodeName).toBe('BUTTON');
    // expect(startButtons.firstChild.childElementCount).toBe(1);
  });

  test('Constructor When TaskList is not empty', () => {
    // make a non empty task list and save to local storage
    const taskList = new TaskList();
    taskList.createTask('first task', 1);
    taskList.save();

    // create buttons
    const startButtons = new StartButtons();

    // start buttons generate two child buttons
    expect(startButtons.childElementCount).toBe(2);

    // right child button has another child element
    // expect(startButtons.lastChild.childElementCount).toBe(1);
  });

  test('Clicking Resume Session when session started', () => {
    // make a non empty task list and save to local storage
    const taskList = new TaskList();
    taskList.createTask('first task', 1);
    taskList.save();
    localStorage.setItem('Timer', false);
    localStorage.setItem('CurrentPomos', 2);
    localStorage.setItem('Started', true);

    // create buttons
    const startButtons = new StartButtons();

    // Click on resume session anchor
    startButtons.lastChild.click();

    // Timer state reset to Pomodoro
    expect(localStorage.getItem('Timer')).toEqual('true');

    // CurrentPomos reset to 0
    expect(Number(localStorage.getItem('CurrentPomos'))).toBe(0);
  });
});
