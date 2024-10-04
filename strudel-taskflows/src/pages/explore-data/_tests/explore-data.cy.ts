describe('The Explore Data Task Flow', () => {
  beforeEach(() => {
    cy.visit('/explore-data');
  });

  it('successfully loads', () => {
    cy.contains('Explore Data')
  });

  // it('filters by disposition', () => {
  //   cy.get('span').contains('CONFIRMED').click();
  //   cy.wait(5000);
  //   cy.contains('1–25 of 2743');
  // });

  // it('opens the preview panel', () => {
  //   cy.wait(5000);
  //   cy.get('div[role="gridcell"]').first().click();
  //   cy.contains('Property Group 1');
  // });
});