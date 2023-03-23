describe('Amazon website tests', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/');
  });

  it('Loads Amazon homepage', () => {
    cy.url().should('contain', 'amazon.com');
  });

  it('Displays Amazon logo', () => {
    cy.get('#nav-logo-sprites').should('exist');
  });

  it('Displays Amazon search bar', () => {
    cy.get('#twotabsearchtextbox').should('exist');
  });

  it('Displays Amazon footer', () => {
    cy.get('#navFooter').should('exist');
  });

  it('Displays Amazon language dropdown', () => {
    cy.get('#icp-nav-flyout').should('exist');
  });
});
