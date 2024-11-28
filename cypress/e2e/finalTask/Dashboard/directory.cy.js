import loginPage from "../../../pom/login/login.cy";

/// <reference types='cypress' />

describe('Testing Directory Menu in Admin Page', ()=>{
    it('directory menu in admin page', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('succesLogin');
        loginPage.typeSubmit().click();
        cy.wait('@succesLogin');

        loginPage.dashboard().should('have.text', 'Dashboard');

        cy.get('span').contains('Directory').click();

        cy.get('[placeholder="Type for hints..."]').type('Peter');
        cy.get('[role="listbox"]').contains('Peter Mac Anderson').click();

        cy.get('.oxd-select-text-input').eq(0).click();
        cy.get('[role="listbox"]').contains('Chief Financial Officer').click();
        
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.get('[role="listbox"]').contains('New York Sales Office').click();
        cy.get('[type="submit"]').click();
        cy.get('p').contains('Peter Mac Anderson');
        cy.get('p').contains('Chief Financial Officer');
        cy.get('p').contains('New York Sales Office');
    })
})