describe('The Explore Data Task Flow', () => {
  beforeEach(() => {
    cy.visit('/explore-data');
  });

  it('successfully loads', () => {
    cy.contains('Explore Data');
  });

  it('filters by checkbox', () => {
    cy.get('span').contains('Astrometry').click();
    cy.wait(3000);
    cy.contains('of 1');
  });

  it('opens the preview panel', () => {
    cy.wait(3000);
    cy.get('div[role="gridcell"]').first().click();
    cy.contains('Property Group 1');
  });
});
