describe('The Compare Data Task Flow', () => {
  beforeEach(() => {
    cy.visit('#/compare-data');
  });

  it('successfully loads', () => {
    cy.get('h1').contains('Compare Data');
  });

  it('selects two rows and compares them', () => {
    cy.get('.MuiCheckbox-root').eq(1).click();
    cy.get('button[data-testid="cpd-compare-button"]').should('be.disabled');
    cy.get('.MuiCheckbox-root').eq(2).click();
    cy.get('button[data-testid="cpd-compare-button"]')
      .contains('Compare Scenarios (2)', { matchCase: false })
      .click();
    cy.get('.MuiDataGrid-columnHeader').should('have.length', 3);
  });

  it('opens the new item page and closes it', () => {
    cy.get('button[data-testid="cpd-new-button"]').click();
    cy.get('button[data-testid="cpd-cancel-button"]');
    cy.get('button[data-testid="cpd-save-button"]').click();
    cy.get('button[data-testid="cpd-compare-button"]');
  });
});
