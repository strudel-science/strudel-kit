describe('The Search Data Repositories Task Flow', () => {
  beforeEach(() => {
    cy.visit('#/search-data-repositories');
  });

  it('successfully loads', () => {
    cy.contains('Search Data Repositories');
  });

  it('filters by checkbox', () => {
    cy.get('span').contains('Floods').click();
    cy.wait(3000);
    cy.get('div[data-testid="sdr-data-list-card"]').should('have.length', 3);
  });

  it('opens the preview panel', () => {
    cy.wait(3000);
    cy.get('div[data-testid="sdr-data-list-card"]').first().click();
    cy.contains('Data from Decadal Change');
  });
});
