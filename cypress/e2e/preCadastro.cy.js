/// <reference types="cypress" /> 
const { faker } = require('@faker-js/faker');

describe('Funcionalidade de pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {

        let nomeFaker = faker.name.firstName()
        let sobreNomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        let senhaFaker = faker.internet.password()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker);
        cy.get('#account_last_name').type(sobreNomeFaker);
        cy.get('.woocommerce-Button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso');        
    });

    it('Deve cadastrar com command.js', () => {
        let nomeFaker2 = faker.name.firstName()
        let sobreNomeFaker2 = faker.name.lastName()
        let emailFaker2 = faker.internet.email(nomeFaker2)
        let senhaFaker2 = faker.internet.password()

        cy.preCadastro(emailFaker2, senhaFaker2, nomeFaker2, sobreNomeFaker2)
        
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso');
    });
});