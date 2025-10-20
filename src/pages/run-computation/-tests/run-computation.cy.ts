describe('The Run Computation Task Flow', () => {
  beforeEach(() => {
    cy.visit('#/run-computation');
  });

  it('successfully loads', () => {
    cy.get('h1').contains('Scenario List');
  });

  it('runs a new computation', () => {
    cy.get('button[data-testid="rnc-new-button"]').click();
    cy.get('button[data-testid="rnc-create-button"]').click();
    cy.get('.MuiStepLabel-label').first().should('have.class', 'Mui-active');
    cy.get('.MuiStepLabel-label').eq(1).should('have.class', 'Mui-disabled');
    cy.get('.MuiStepLabel-label').eq(2).should('have.class', 'Mui-disabled');
    cy.get('button[data-testid="rnc-settings-next-button"]').click();
    cy.get('button[data-testid="rnc-run-button"]').click();
    cy.get('h2').contains('Running');
    cy.get('.MuiStepLabel-label').first().should('have.class', 'Mui-completed');
    cy.get('.MuiStepLabel-label').eq(1).should('have.class', 'Mui-active');
    cy.get('.MuiStepLabel-label').eq(2).should('have.class', 'Mui-disabled');
    cy.wait(5000);
    cy.get('button[data-testid="rnc-results-button"]').click();
    cy.get('.MuiStepLabel-label').first().should('have.class', 'Mui-completed');
    cy.get('.MuiStepLabel-label').eq(1).should('have.class', 'Mui-completed');
    cy.get('.MuiStepLabel-label').eq(2).should('have.class', 'Mui-active');
    cy.get('.js-plotly-plot').should('have.length', 2);
  });

  it('goes back to the scenario list', () => {
    cy.get('button[data-testid="rnc-new-button"]').click();
    cy.get('button[data-testid="rnc-create-button"]').click();
    cy.get('.MuiStepLabel-label').first().should('have.class', 'Mui-active');
    cy.get('.MuiStepLabel-label').eq(1).should('have.class', 'Mui-disabled');
    cy.get('.MuiStepLabel-label').eq(2).should('have.class', 'Mui-disabled');
    cy.get('a[data-testid="rnc-list-link"]').click();
    cy.get('button[data-testid="rnc-new-button"]');
  });
});
