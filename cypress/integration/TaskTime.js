describe('Task Time and Actual Pomo Tests', () => {
  const MS_IN_WORK_SESSION = 25 * 60 * 1000;
  const MS_IN_SHORT_BREAK = 5 * 60 * 1000;

  beforeEach(() => {
    cy.clock();
    cy.visit('/');
    cy.clearLocalStorage();

    // Log in
    cy.get('.start-input').type('Thomas{enter}');

    // Add a few tasks
    cy.get('.task-list').last().type('Task 1{enter}');
    cy.get('.task-list').last().type('Task 2{enter}');
    cy.get('.task-list').last().type('Task 3{enter}');

    // Start the day
    cy.get('#start-day')
      .click();
  });

  it('Check that a task worked on for a majority of a pomo counts towards the actual pomos', () => {
    // Start the timer
    cy.get('.timer-container')
      .click();

    // Advance the timer to half of the work session
    cy.tick(MS_IN_WORK_SESSION / 2);

    // Finish the task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click().should(() => {
      // Expect that a pomo was recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const acatualPomos = taskList.completed[0].actual;
      const workTime = taskList.completed[0].time;
      expect(acatualPomos).to.eq(1);
      expect(workTime).to.eq(60 * 25 / 2);
    });
  });

  it('Check that a task worked on for a minority of a pomo does not count towards the actual pomos', () => {
    // Start the timer
    cy.get('.timer-container')
      .click();

    // Advance the timer to a third of the work session
    cy.tick(MS_IN_WORK_SESSION / 3);

    // Finish the task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click().should(() => {
      // Expect that a pomo wasn't recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const acatualPomos = taskList.completed[0].actual;
      const workTime = taskList.completed[0].time;
      expect(acatualPomos).to.eq(0);
      expect(workTime).to.eq(60 * 25 / 3);
    });

    // Finish the pomo session
    cy.tick(2 * MS_IN_WORK_SESSION / 3);

    // When popup asks if we want to finish the task, don't finish it
    cy.get('#notif-right').click().should(() => {
      // Expect that a pomo was recorded for the second task
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const acatualPomos = taskList.todo[0].actual;
      const workTime = taskList.todo[0].time;
      expect(acatualPomos).to.eq(1);
      expect(workTime).to.eq(2 * 60 * 25 / 3);
    });
  });

  it('Check that a notification asks to finish the task when expectedPomos === actualPomos', () => {
    // Start the timer
    cy.get('.timer-container')
      .click();

    // Advance the timer to the end of the work session
    cy.tick(MS_IN_WORK_SESSION);

    // When popup asks if we want to finish the task, finish it
    cy.get('#notif-left').click({ timeout: 9000 }).should(() => {
      // Expect that a pomo was recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const currentPomos = taskList.completed[0].actual;
      const workTime = taskList.completed[0].time;
      expect(currentPomos).to.eq(1);
      expect(workTime).to.eq(60 * 25);
    });
  });

  it('Check that a task worked on for a minority of two sessions counts towards a pomo', () => {
    // Start the timer
    cy.get('.timer-container')
      .click();

    // Advance the timer to two-thirds of the work session
    cy.tick(2 * MS_IN_WORK_SESSION / 3);

    // Finish the task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click()

    // Finish the pomo session
    cy.tick(MS_IN_WORK_SESSION / 3);

    // Go through the break session
    cy.get('.timer-container')
      .click();
    cy.tick(MS_IN_SHORT_BREAK);

    // Start the second pomo session
    cy.get('.timer-container')
      .click();

    // Advance another third of a session
    cy.tick(MS_IN_WORK_SESSION / 3);

    // Finish the task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click({ timeout: 9000 }).should(() => {
      // Expect that a pomo was recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const currentPomos = taskList.completed[1].actual;
      const workTime = taskList.completed[1].time;
      expect(taskList.completed.length).to.eq(2);
      expect(currentPomos).to.eq(1);
      expect(workTime).to.eq(2 * 60 * 25 / 3);
    });
  });
});