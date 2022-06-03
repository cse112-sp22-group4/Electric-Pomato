/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
const startTimer = () => {
  cy.getTimerContentDocument('.timer-image')
    .find('.timer-image').click();
};

describe('Login start Pomo flow', () => {
  const MS_IN_WORK_SESSION = 25 * 60 * 1000;
  const MS_IN_SHORT_BREAK = 5 * 60 * 1000;
  before(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  // Restore local storage
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  // Store local storage
  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  // Enter user name and press enter
  it('Enter name check for new page', () => {
    cy.get('.start-input').type('Name{enter}');
    cy.url().should('include', '/app.html');
  });

  // Ensure the app.html page has the right title
  it('Check app title', () => {
    // Check for info-modal on first login
    cy.get('.card:nth-child(1) .card-title').should('have.text', 'Plan');

    // Close the modal
    cy.get('#info-close').click();

    // Check for title
    cy.get('.app-title').should('have.text', "Name's Session");
  });

  // Add tasks using both keyboard shortcut and clicking
  it('Test add task operations', () => {
    // Task 1 with one tomato
    cy.get('.task-list').type('Task 1{enter}');

    // Check the tomato-slider is updated
    cy.get('tomato-slider input')
      .should('have.value', '1');
    cy.get('object[id=0]')
      .invoke('attr', 'data')
      .should('contain', 'tomGreen');
    cy.get('object[id=1]')
      .invoke('attr', 'data')
      .should('contain', 'tomWhite');

    // Task 2 with 3 tomatos
    cy.get('.task-list').type('Task 2');
    cy.get('editable-task-list-input tomato-slider').click('center');
    cy.get('.task-list').type('{enter}');

    // Check the tomato-slider is updated
    cy.get('editable-task-list-body > div:nth-child(2) tomato-slider input')
      .should('have.value', '3');
    cy.get('editable-task-list-body > div:nth-child(2) object[id=2]')
      .invoke('attr', 'data')
      .should('contain', 'tomGreen');

    // Start the day
    cy.get('editable-task-list > div.g-0.row > div.col-lg-2.d-lg-flex.d-none > button').click();
  });

  // Get to short break
  it('Start timer and get to short break', () => {
    // Check the title is updated
    cy.get('.app-title').should('have.text', 'Pomodoro');
    cy.get('.app-subtitle').should('have.text', 'Focus: Task 1');

    // Tick down to break
    cy.clock();
    startTimer();
    cy.tick(MS_IN_WORK_SESSION);

    // Get rid of expected pomos remaining popup
    cy.get('#notif-right').click();
    // Check title is updated
    cy.get('.app-title').should('have.text', 'Short Break');
    cy.get('.app-subtitle').should('have.text', 'Current Task: Task 1');

    // Tick down to another session
    startTimer();
    cy.tick(MS_IN_SHORT_BREAK);
  });

  it('Get halfway to new pomo and check localstorage', () => {
    cy.clock();
    startTimer();
    cy.tick(MS_IN_WORK_SESSION / 2);

    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click().should(() => {
      // Expect that a pomo and a half was recorded
      const taskList = JSON.parse(localStorage.getItem('TaskList'));
      const actualPomos = taskList.completed[0].actual;
      const workTime = taskList.completed[0].time;

      expect(actualPomos).to.eq(2);
      expect(workTime).to.eq(((60 * 25) / 2) + (60 * 25));
    });

    // Tick down remaining time
    cy.tick(MS_IN_WORK_SESSION / 2);
  });

  it('Tick to long break', () => {
    cy.clock();
    startTimer();
    cy.tick(MS_IN_SHORT_BREAK);

    // Wait for new svg to load in
    cy.wait(500);

    startTimer();
    cy.tick(MS_IN_WORK_SESSION);
    cy.wait(500);
    startTimer();
    cy.tick(MS_IN_SHORT_BREAK);
    cy.wait(500);
    startTimer();
    cy.tick(MS_IN_WORK_SESSION);
    cy.wait(500);
    startTimer();
    cy.tick(MS_IN_SHORT_BREAK);
    cy.wait(500);

    // Get rid of expected pomos remaining popup
    cy.get('#notif-right').click();
    cy.get('.app-title').should('have.text', 'Long Break');
    cy.get('.app-subtitle').should('have.text', 'Final Task: Task 2');
  });

  it('End the session and check the history', () => {
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left').click().should(() => {
      // Expect that a pomo and a half was recorded
      const history = JSON.parse(localStorage.getItem('History'));
      const session = history.sessions[0];

      // Check date
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const fullDate = `${month}/${day}/${year}`;
      expect(session.date).to.eq(fullDate);

      // Check the tasklist
      const task1 = session.tasklist[0];
      const task2 = session.tasklist[1];

      expect(task1.name).to.eq('Task 1');
      expect(task1.expected).to.eq(1);
      expect(task1.actual).to.eq(2);
      expect(task1.time).to.eq(((60 * 25) / 2) + (60 * 25));

      expect(task2.name).to.eq('Task 2');
      expect(task2.expected).to.eq(3);
      expect(task2.actual).to.eq(3);
      expect(task2.time).to.eq(((60 * 25) * 2) + ((60 * 25) / 2));
    });
    // Check for renav
    cy.url().should('include', '/index.html');
  });
});
