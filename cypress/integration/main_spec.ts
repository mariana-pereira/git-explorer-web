describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.document.activeElement.blur();
    });
  });

  context('When search for an user', () => {
    it('should load an user', () => {
      cy.get('[data-testid="search-input"]').type('vuejs');
      cy.get('[data-testid="search-button"]').click();

      cy.get('[data-testid="user-card"]').should('exist');
    });
  });

  context('When click user github button', () => {
    it('should open users github profile', () => {
      cy.get('[data-testid="search-input"]').type('vuejs');
      cy.get('[data-testid="search-button"]').click();

      cy.get('[data-testid="user-card"]').should('exist');
      cy.get('[data-testid="user-github"]').click();
    });
  });

  context('When click on a repository', () => {
    it('should load repository data', () => {
      cy.get('[data-testid="search-input"]').type('vuejs');
      cy.get('[data-testid="search-button"]').click();

      cy.get('[data-testid="user-card"]').should('exist');
      cy.get('[data-testid="repo-list"] > li').first().click();

      cy.url().should('contain', '/repository/');
    });
  });

  context('When click repository github button', () => {
    it('should open repository on github page', () => {
      cy.get('[data-testid="search-input"]').type('vuejs');
      cy.get('[data-testid="search-button"]').click();

      cy.get('[data-testid="user-card"]').should('exist');
      cy.get('[data-testid="repo-list"] > li').first().click();

      cy.url().should('contain', '/repository/');
      cy.get('[data-testid="repo-github"]').click();
    });
  });
});
