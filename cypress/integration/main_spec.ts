describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.document.activeElement.blur();
    });
  });

  context('When page is initially opened', () => {
    it('should load an user', () => {
      cy.get('[data-testid="search-input"]').type('vuejs');
      cy.get('[data-testid="search-button"]').click();

      cy.get('[data-testid="user-card"]').should('exist');
    });
  });
});
