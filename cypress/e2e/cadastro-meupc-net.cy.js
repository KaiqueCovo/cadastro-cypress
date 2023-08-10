describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://meupc.net/')

    cy.wait(1000)
    cy.get('.navbar-burger').click()

    cy
      .get('ul.menu-list')
      .children('li')
      .children('a[href="https://meupc.net/cadastro"]')
      .click()

    cy.get('input[name="nome"]').type('Kaique teste')
    cy.get('input[name="email"]').type('johndoe@example')
    
    // cy.get('input[data-type="password"]').text('123123')
  })
})