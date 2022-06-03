import RemainingPomos from '../js/components/RemainingPomos.js';

describe('RemainingPomos testing', () => {
  let remainingPomos;
  beforeEach(() => {
    remainingPomos = new RemainingPomos();
  });

  test('Simple RemainingPomos construction', () => {
    const taskList = {
      todo: [{ name: 'a', expected: 1, actual: 0 }, { name: 'b', expected: 1, actual: 0 }],
      completed: [],
    };
    localStorage.setItem('TaskList', JSON.stringify(taskList));
    localStorage.setItem('Icon', 'bomb');

    remainingPomos = new RemainingPomos();
    expect(remainingPomos.querySelector('.icon-container').childNodes).not.toBeNull();
  });

  test('Check setPomos() with 5 planned pomos', () => {
    const taskList = {
      todo: [{ name: 'a', expected: 5, actual: 0 }, { name: 'b', expected: 1, actual: 0 }],
      completed: [],
    };
    remainingPomos.setPomos(taskList);
    expect(remainingPomos.querySelector('.icon-container').children.length).toEqual(5);
  });

  test('Check updateCompletedPomos() with 4 completed and 4 planned pomos', () => {
    const taskList = {
      todo: [{ name: 'a', expected: 4, actual: 4 }, { name: 'b', expected: 1, actual: 0 }],
      completed: [],
    };
    remainingPomos.setPomos(taskList);
    remainingPomos.updateCompletedPomos(taskList);
    remainingPomos.querySelectorAll('.remaining-pomos-icon').forEach((object) => {
      expect(object.classList.contains('completed')).toBe(true);
    });
  });

  test('Check hide remaining pomos', () => {
    remainingPomos.hiddenMode();
    expect(remainingPomos.querySelector('.remaining-pomos-container').classList.contains('invisible')).toBe(true);
  });

  test('Check resetPomos()', () => {
    remainingPomos.resetPomos();
    expect(remainingPomos.querySelector('.icon-container').innerHTML).toBe('');
  });
});
