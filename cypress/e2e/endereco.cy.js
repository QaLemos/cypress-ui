/// <reference types="cypress" /> 
import EnderecoPage from '../support/page-objects/endereco.page.js'
const dadosEndereco = require('../fixtures/enderecos.json')

describe('Funcionalidade Endereços - Faturamente e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Eduardo', 'Lemos', 'LemosTech', 'Brasil', 'R Camboim', '333'
        , 'Gravataí', 'Rio Grande Do Sul', '95050080', '51991700101', 'ed.lemos@live.com')
        
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso');
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso - usando massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email)
        
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso');
    });
});