/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

const startTimer = () => {
  cy.getTimerContentDocument('.timer-image')
  .find('.timer-image').click();
}

describe('Task Time and Actual Pomo Tests', () => {
  const MS_IN_WORK_SESSION = 25 * 60 * 1000;

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();

    // Log in
    cy.get('.start-input').type('Thomas{enter}');

    // Close the info popup
    cy.get('#info-close')
      .click();

    // Add a few tasks
    cy.get('.task-list').last().type('Task 1{enter}');
    cy.get('.task-list').last().type('Task 2{enter}');
    cy.get('.task-list').last().type('Task 3{enter}');

    // Start the day
    cy.get('#start-day')
      .click();
  });

  it('Check that a task worked on for a majority of a pomo counts towards the actual pomos', () => {
    cy.clock();

    startTimer();
    cy.tick(MS_IN_WORK_SESSION / 2);

    // Finish the task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click().should(() => {
    // Expect that a pomo was recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const actualPomos = taskList.completed[0].actual;
      const workTime = taskList.completed[0].time;
      expect(actualPomos).to.eq(1);

      // Advance the timer to half of the work session
      expect(workTime).to.eq((60 * 25) / 2);
    });
  });

  it('Check that a task worked on for a minority of a pomo does not count towards the actual pomos', () => {
    cy.clock();

    // Start the timer
    startTimer();

    // Advance the timer to a third of the work session
    cy.tick(MS_IN_WORK_SESSION / 3);

    // Finish the task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click().should(() => {
      // Expect that a pomo wasn't recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const actualPomos = taskList.completed[0].actual;
      const workTime = taskList.completed[0].time;
      expect(actualPomos).to.eq(0);
      expect(workTime).to.eq((60 * 25) / 3);
    });

    // Finish the pomo session
    cy.tick((2 * MS_IN_WORK_SESSION) / 3);

    // When popup asks if we want to finish the task, finish it
    cy.get('#notif-right').click().should(() => {
      // Expect that a pomo was recorded for the second task
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const actualPomos = taskList.todo[0].actual;
      const workTime = taskList.todo[0].time;
      expect(actualPomos).to.eq(1);
      expect(workTime).to.eq((2 * 60 * 25) / 3);
    });
  });
});