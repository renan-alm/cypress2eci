/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://eci.github.com/')
  })

  it('displays two todo items by default', () => {
    // Your test code here
  });

  it('eci-test', function() {
    // cy.intercept('POST', '**/startImport').as('startImport');
    cy.intercept('POST', '**/uploads/migrations/**/archive').as('uploadArchive');

    cy.get('.form-control').clear('');
    cy.get('.form-control').type('TOKEN_GOES_HERE');
    cy.contains('Next').click();
    cy.get('.form-select').select('O_kgDOCsj22A');
    cy.get('.next').click();
    cy.get('.dropzone').drag('migration.tar.gz', { force: true });
    cy.get('.next').click({ timeout: 1000000 });
    // cy.wait('@startImport', { timeout: 1000000 }).then((interception) => {
    //   expect(interception.response.body.data.startImport.migration.state).to.eq('WAITING');
    // });
    cy.wait('@uploadArchive', { timeout: 1000000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    cy.wait(5000); // Adjust the wait time as needed
    cy.get('.next').click({ timeout: 1000000 });
    
  });
})
