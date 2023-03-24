describe('Search for a computer screen', () => {
  it('Visits Amazon and searches for a computer screen', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('computer screen{enter}')
    cy.get('.s-result-item').should('have.length.gt', 0)
  })
})
describe('Search for computer chair within a specific price range', () => {
  it('Visits Amazon and searches for computer chair within a specific price range', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('computer chair')
    cy.get('#twotabsearchtextbox').type('{enter}')
    cy.get('#low-price').type('100')
    cy.get('#high-price').type('200')
    cy.get('.a-button-input[type=submit]').click()
    cy.get('.s-result-item').should('have.length.gt', 0)
  })
})
describe('Log in with email and password', () => {
  it('Visits Amazon and logs in with email and password', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('example@email.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('password123')
    cy.get('#signInSubmit').click()
    cy.url().should('include', '/ap/signin')
  })
})
describe('Amazon Music and Podcasts', () => {
  it('should navigate to Podcasts via the hamburger menu', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('Amazon Music').click();
    cy.get('.hmenu-item').contains('Podcasts').click();
    cy.url().should('contain', 'https://www.amazon.com/music');
  });
});
describe('View the cart', () => {
  it('Visits Amazon and views the cart', () => {
    cy.visit('https://www.amazon.com', {timeout: 5000})
    cy.get('#nav-cart').click()
    cy.get('#nav-cart-count-container', { timeout: 10000 }).should('be.visible')
    cy.url().should('include', '/gp/cart/view.html')
  })
})
