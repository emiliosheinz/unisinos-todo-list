/// <reference types="cypress" />

describe('todo list', () => {
  beforeEach(() => {
    cy.visit('https://emiliosheinz.github.io/unisinos-todo-list/')
  })

  it('Verify empty list', () => {
    cy.get('.todo-item').should('not.exist')
    cy.get('.empty-list').should('exist')
  })

  it('Add item', () => {
    cy.get('input').type('Task 1')
    cy.get('button').contains('Criar').click()
    cy.get('.todo-text').should('have.text', 'Task 1')
    cy.get('.badge').first().should('have.text', '1')
    cy.get('.badge').eq(1).should('have.text', '0 de 1')
  })
  
  it('Check item', () => {
    cy.get('input').type('Task 2')
    cy.get('button').contains('Criar').click()
    cy.get('.checkbox-container').click()
    cy.get('.badge').first().should('have.text', '1')
    cy.get('.badge').eq(1).should('have.text', '1 de 1')
  })

  it('Delete item', () => {
    cy.get('input').type('Task 3')
    cy.get('button').contains('Criar').click()
    cy.get('.delete-icon').click()
    cy.get('.empty-list').should('exist')
    cy.get('.badge').first().should('have.text', '0')
    cy.get('.badge').eq(1).should('have.text', '0 de 0')
  })

})
