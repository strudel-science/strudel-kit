describe('The Contribute Data Task Flow', () => {
  beforeEach(() => {
    cy.visit('#/contribute-data');
  });

  it('successfully loads', () => {
    cy.get('h1').contains('Register');
  });

  it('publishes a new dataset', () => {
    cy.get('button[data-testid="ctd-submit-button"]').click();
    cy.get('button[data-testid="ctd-new-button"]').click();
    cy.get('h2').first().contains('Metadata');
    cy.get('h2').eq(1).contains('Dataset Files');
    cy.get('button[data-testid="ctd-save-button"]').click();
    cy.get('.MuiAlert-colorSuccess');
    cy.get('h2').should('have.length', 2);
    cy.get('button[data-testid="ctd-checks-button"]').click();
    cy.wait(6000);
    cy.get('button[data-testid="ctd-publish-button"]').click();
    cy.get('button[data-testid="ctd-new-button"]');
  });

  it('edits and cancels a dataset', () => {
    cy.get('button[data-testid="ctd-submit-button"]').click();
    cy.get('button[data-testid="ctd-new-button"]').click();
    cy.get('button[data-testid="ctd-save-button"]').click();
    cy.get('button[data-testid="ctd-edit-button"]').click();
    cy.get('button[data-testid="ctd-cancel-button"]').click();
    cy.get('button[data-testid="ctd-new-button"]');
  });
});
