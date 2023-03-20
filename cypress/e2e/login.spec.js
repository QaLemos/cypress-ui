/// <reference types="cypress" /> 

context('Funcionalidade de login', () => {
    
    it('Login realizado com sucesso', () => {
        
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebanc@teste.com')
        cy.get('#password').type('teste@teste.com')
    
    });
});