describe('Testing search', () => {
    const tdd = 'TDD';

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Page loading', () => {
        
        cy.get('input').first().should('have.class', 'hidden');
    })

    it('Typing in the input field', () => {
        cy.get('#sePractice').children('input').focus().type(tdd).should('have.value', tdd);
    })
    
    it('Number of result records', () => {
        cy.get('#sePractice').children('input').focus().type(tdd).
        get('#benefitDropdown').children('input').focus().type('Improve Performance\nImprove Security\n');
        cy.get('#searchButton').click();
        // cy.get('table').find('tr', { timeout: 10000 }).its('length').should('be.gte', 5)
        cy.get('table').find('.row')
        .then(row => {
          const rowCount = Cypress.$(row).length;
          expect(rowCount).to.be.at.least(8);
        });
    })
})