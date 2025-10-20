describe('The Monitor Activities Task Flow', () => {
  beforeEach(() => {
    cy.visit('#/monitor-activities');
  });

  it('successfully loads', () => {
    cy.get('h1').contains('Experiments');
  });

  it('drills into a row and shows details', () => {
    cy.get('.MuiDataGrid-columnHeader').should('have.length', 4);
    cy.get('.MuiDataGrid-row').eq(1).click();
    cy.get('button[data-testid="mna-back-button"]');
    cy.get('.MuiDataGrid-columnHeader').should('have.length', 3);
    cy.get('h2').contains('Notes');
    cy.get('.js-plotly-plot');
  });

  it('drills into a row and goes back', () => {
    cy.get('.MuiDataGrid-row').eq(1).click();
    cy.get('button[data-testid="mna-back-button"]').click();
    cy.get('.MuiDataGrid-columnHeader').should('have.length', 4);
  });
});
