// Function to start the timer
const startTimer = () => {
  cy.getTimerContentDocument('.timer-image')
  .find('.timer-image').click();
}

const getTimerText = () => {
  return cy.getTimerContentDocument('.timer-text')
  .find('.timer-text');
}

describe('End to end settings tests', () => {
  beforeEach(() => {
    cy.visit('/');

    // Log in
    cy.get('.start-input').type('Thomas{enter}');

    // Close the info popup
    cy.get('#info-close')
      .click();

    // Add a few tasks
    cy.get('.task-list').last().type('Task 1{enter}');
    cy.get('.task-list').last().type('Task 2{enter}');
    cy.get('.task-list').last().type('Task 3{enter}');
    cy.get('.task-list').last().type('Task 4{enter}');
    cy.get('.task-list').last().type('Task 5{enter}');
    cy.get('.task-list').last().type('Task 6{enter}');

    // Start the day
    cy.get('#start-day')
      .click();
  });

  it('Check changing the timer durations in settings', () => {
    cy.clock();
    // Click the settings button
    cy.get('.fa-wrench')
      .click();

    const POMO_DURATION = '20';
    const SHORT_BREAK_DURATION = '3'
    const LONG_BREAK_DURATION = '15';
    // Change pomo duration to 20min
    cy.get('#pomo-duration-select').select(POMO_DURATION);

    // Change short break duration to 3min
    cy.get('#short-duration-select').select(SHORT_BREAK_DURATION);

    // Change long break duration to 15min
    cy.get('#long-duration-select').select(LONG_BREAK_DURATION);

    // Save the settings
    cy.get('#settings-save')
      .click();

    // Go through 4 work sessions
    for(let i = 1; i < 5; i++) {
      // Start the pomo
      startTimer();

      // Expect the timer counts down from 20 mins for the work sesion
      getTimerText().should('contain.text', '19 :');

      // Move to the end of the work session
      cy.tick(20 * 60 * 1000);

      // Move to next task
      cy.get('#notif-left')
        .click();

      // Start the break
      startTimer();
      if(i === 4) {
        // Expect the timer counts down from 15 mins for the long break
        getTimerText().should('contain.text', '14 :');
      }
      else {
        // Expect that the timer counts down from 3:00 for the short break
        getTimerText().should('contain.text', '2 :');
      }
      // Move to the end of the short break
      cy.tick(3 * 60 * 1000);
      cy.wait(500);
    }
  });

  it('Check changing the themes in settings ', () => {
    // Go to the home page
    cy.get('.fa-home')
      .click();
    cy.get('#notif-left')
      .click();

    // Expect the icon to be a tomato
    cy.getIconContentDocument('.green-tomato')
    .find('.green-tomato').should('be.visible');

    // Expect default theme
    cy.get('.theme-default').should('be.visible')

    // Click the settings button
    cy.get('.fa-wrench')
      .click();

    // Change to dark theme
    cy.get('#themes-select').select('Dark');

    // Change to bomb icon
    cy.get('#icon-select').select('Bomb');

    // Save the settings
    cy.get('#settings-save')
      .click();

    // Expect the icon to change to a bomb
    cy.getIconContentDocument('.bomb-pomo')
      .find('.bomb-pomo').should('be.visible');

    // Expect dark theme
    cy.get('.theme-dark').should('be.visible')
  });
})
