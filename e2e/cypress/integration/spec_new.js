it('another test case', () => {

    cy.visit('/#/voltage-profiles')
    cy.url().should('be.eq', 'https://ems.energyflux.rs/#/voltage-profiles')
   
})