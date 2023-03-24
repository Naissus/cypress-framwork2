describe('Search for a computer screen', () => {
  it('Visits Amazon.com and searches for a computer screen', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('computer screen{enter}')
    cy.get('.s-result-item').should('have.length.gt', 0)
  })
})
describe('Search for computer chairs within a specific price range', () => {
  it('Visits Amazon.com and searches for books within a specific price range', () => {
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
  it('Visits Amazon.com and logs in with email and password', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('example@email.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('password123')
    cy.get('#signInSubmit').click()
    cy.url().should('include', '/ap/signin')
  })
})
describe('Change language to German', () => {
  it('Visits Amazon.com and changes the language to German', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#icp-nav-flyout').click()
    cy.contains('Deutsch - DE').click()
    cy.get('.a-button-input[type=submit]').click()
    cy.url().should('include', 'https://www.amazon.com/')
  })
})
describe('View the cart', () => {
  it('Visits Amazon.com and views the cart', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-cart-count-container').click()
    cy.url().should('include', '/gp/cart')
  })
})
