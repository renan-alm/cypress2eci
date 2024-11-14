import 'cypress-drag-drop';

Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject, fileName, options = {}) => {
  cy.fixture(fileName).then((content) => {
    const el = subject[0];
    const testFile = new File([content], fileName);
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(testFile);
    el.files = dataTransfer.files;
    cy.wrap(subject).trigger('drop', {
      dataTransfer,
      ...options,
    });
  });
});

