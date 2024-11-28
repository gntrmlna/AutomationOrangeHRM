import loginPage from "../../../pom/login/login.cy";

/// <reference types='cypress' />

describe('Testing Forgot Password Page', ()=>{
    it('testing forgot password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('forgotPassword');
        cy.get('p').contains('Forgot Your Password?').click();
        cy.wait('@forgotPassword');
        cy.get('h6').contains('Reset Password');
        cy.get('[name="username"]').type('gntrmf');

        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('successForgotPassword');
        cy.get('[type="submit"]').click();
        cy.wait('@successForgotPassword');
        cy.get('h6').contains('Reset Password link sent successfully');

        
    })
})