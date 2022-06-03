// Function to get the timer element
const startTimer = () => {
  cy.getContentDocument('.timer-image')
  .find('.timer-image').click();
}

describe('End to end task tests', () => {
  beforeEach(() => {
    cy.visit('/');

    // Log in
    cy.get('.start-input').type('Thomas{enter}');

    // Close the info popup
    cy.get('#info-close')
      .click();
  });

  it('Check that tasks get moved to completed when finished', () => {
    // Add 5 tasks
    cy.get('.task-list').last().type('Task 1{enter}');
    cy.get('.task-list').last().type('Task 2{enter}');
    cy.get('.task-list').last().type('Task 3{enter}');
    cy.get('.task-list').last().type('Task 4{enter}');
    cy.get('.task-list').last().type('Task 5{enter}');
    const numTasks = 5;
    let numTasksCompleted = 0;

    // Start the day
    cy.get('#start-day')
      .click();

    // Start the timer
    startTimer();
    // getTimerImage().click();

    // Expect all the tasks to be in the view-only task list with the correct values
    for(let i = 1; i <= numTasks; i++) {
      cy.get('#todo-task-num-' + i).should('have.text', i);
      cy.get('#todo-task-name-' + i).should('have.text', 'Task ' + i);
      cy.get('#todo-task-expected-' + i).should('have.text', 1);
      cy.get('#todo-task-actual-' + i).should('have.text', 0);
    }

    // Finish one task
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left')
      .click();
    numTasksCompleted += 1;

    // Expect the task to move to the completed section
    cy.get('#completed-task-name-1').should('have.text', 'Task 1');

    // Finish two more tasks
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left')
      .click();
    cy.get('finish-task-button').first()
      .click();
    cy.get('#notif-left')
      .click();
    numTasksCompleted += 2;

    // Again check that all the tasks are in the correct place
    for(let i = 1; i <= numTasksCompleted; i++) {
      cy.get('#completed-task-num-' + i).should('have.text', i);
      cy.get('#completed-task-name-' + i).should('have.text', 'Task ' + i);
      cy.get('#completed-task-expected-' + i).should('have.text', 1);
      cy.get('#completed-task-actual-' + i).should('have.text', 0);
    }
    for(let i = numTasksCompleted + 1; i <= numTasks - numTasksCompleted; i++) {
      cy.get('#todo-task-num-' + i).should('have.text', i);
      cy.get('#todo-task-name-' + i).should('have.text', 'Task ' + i);
      cy.get('#todo-task-expected-' + i).should('have.text', 1);
      cy.get('#todo-task-actual-' + i).should('have.text', 0);
    }
  });
  
  it('Check that tasks are added to and removed from the editable task list', () => {
    // Add a few tasks
    let numTasks = 0;

    // Set 3 expected pomos for the first task
    cy.get('.slider-tomato').eq(2)
      .click({force: true});
    cy.get('.task-list').last().type('Task 1{enter}');
    numTasks += 1;

    // Expect that the first task appears in the list
    cy.get('#task-num-1').should('have.value', numTasks);
    cy.get('#task-name-1').should('have.value', 'Task 1');
    cy.get('#task-pomos-1').should('have.value', 3);

    // Set 4 expected pomos for the second task
    cy.get('.slider-tomato').eq(8)
      .click({force: true});
    cy.get('.task-list').last().type('Task 2{enter}');
    numTasks += 1;

    // Expect that the second task appears in the list
    cy.get('#task-num-2').should('have.value', numTasks);
    cy.get('#task-name-2').should('have.value', 'Task 2');
    cy.get('#task-pomos-2').should('have.value', 4);

    // Expect that there are now two tasks added
    cy.get('editable-task-list-body').children().should('have.length', numTasks);

    // Edit the first task
    cy.get('.edit-icon').eq(0)
      .click();

    // Change the expected pomos to 5
    cy.get('.slider-tomato').eq(4)
      .click({force: true});
    // Edit the name of the task
    cy.get('.edit-mode').find('div').eq(2).last().type(' EDITED{enter}');
    // Expect the name and pomos to update
    cy.get('#task-name-1').should('have.value', 'Task 1 EDITED');
    cy.get('#task-pomos-1').should('have.value', 5);

    // Delete the second task
    cy.get('.remove-icon').eq(1)
      .click();
    numTasks -= 1;

    // Expect that there is one task
    cy.get('editable-task-list-body').children().should('have.length', numTasks);
  });
})
