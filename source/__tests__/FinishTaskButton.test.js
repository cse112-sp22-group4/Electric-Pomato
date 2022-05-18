import FinishTaskButton from '../js/components/FinishTaskButton.js';

describe('FinishTaskButton testing', () => {
  let jestFunc; // jest mock function
  let ftb; // FinishTaskButton object
  beforeEach(() => {
    document.body.innerHTML = `
    <template id="view-title-template">
      <h2 class="subtitle text-center"></h2>
    </template>
    <template id="prompt-template">
    <div class="one-line">
    <h2 class="text-white">Did you complete your task?</h2>
    <input type="checkbox" id="break-checkbox" style="display: none;">
    <label for="break-checkbox" class="check">
    <svg width="18px" height="18px" viewBox="0 0 18 18">
        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
        <polyline points="1 9 7 14 15 4"></polyline>
    </svg>
    </label>
    </div>
    </template>
    `;

    jestFunc = jest.fn();
    ftb = new FinishTaskButton(jestFunc);
  });

  test('Simple Construction', () => {
    expect(ftb.getChecked()).toBe(false);
  });

  /* Deprecated, test in end to end
  test('Checking Checkbox', () => {
    // check checkbox
    ftb.querySelector('button').click();
    expect(ftb.getChecked()).toBe(true);
  });
  */

  test('Checking updateButton() with 2 tasks in localStorage', () => {
    const taskList = { todo: [{ name: 'a', expected: 1, actual: 0 }, { name: 'b', expected: 1, actual: 0 }], completed: [] };
    localStorage.setItem('TaskList', JSON.stringify(taskList));
    ftb.updateButton();
    expect(ftb.querySelector('button').textContent).toBe('Finish Task');
    expect(ftb.getChecked()).toBe(false);
    expect(ftb.length).toBe(taskList.todo.length);
  });

  test('Checking updateButton() with 1 task in localStorage', () => {
    const taskList = { todo: [{ name: 'a', expected: 1, actual: 0 }], completed: [] };
    localStorage.setItem('TaskList', JSON.stringify(taskList));
    ftb.updateButton();
    expect(ftb.querySelector('button').textContent).toBe('Finish Final Task');
    expect(ftb.getChecked()).toBe(false);
    expect(ftb.length).toBe(taskList.todo.length);
  });
});
