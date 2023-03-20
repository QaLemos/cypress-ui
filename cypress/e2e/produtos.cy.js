/// <reference types="cypress" /> 

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produtos da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()    
    });

    it('Deve adicionar um produto ao carrinho', () => {

        cy.get('[class="product-block grid"]')
            .eq('0').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3);
        cy.get('.woocommerce-message').should('contain', '3 × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });
    
});