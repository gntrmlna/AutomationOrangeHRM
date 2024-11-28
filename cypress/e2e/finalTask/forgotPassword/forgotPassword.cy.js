import forgotPassword from "../../../pom/forgotPassword.cy.js/forgotPassword.cy";
import loginPage from "../../../pom/login/login.cy";
import API from "../../../pom/API/hitAPI.cy";
import getElement from "../../../pom/Element/getElement.cy";

/// <reference types='cypress' />

describe('Testing Forgot Password Page', ()=>{
    beforeEach(()=>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
    })
    it('Submit with valid data', ()=>{

        API.hitApiMessages().as('forgotPassword');
        forgotPassword.getForgotPassword().click();
        cy.wait('@forgotPassword');

        getElement.geth6().contains('Reset Password');
        getElement.getUsername().type('gntrmf');

        API.hitApiMessages().as('successForgotPassword');
        getElement.submit().click();
        cy.wait('@successForgotPassword');

        getElement.geth6().contains('Reset Password link sent successfully');

    })

    it('Submit with empty username', ()=>{
        API.hitApiMessages().as('forgotPassword');
        forgotPassword.getForgotPassword().click();
        cy.wait('@forgotPassword');

        getElement.geth6().contains('Reset Password');
        getElement.getUsername().should('have.value', '');
        getElement.submit().click();
        getElement.getSpan().contains('Required').should('have.text', 'Required');
    })

    it('Canceling', ()=>{
        API.hitApiMessages().as('forgotPassword');
        forgotPassword.getForgotPassword().click();
        cy.wait('@forgotPassword');

        getElement.geth6().contains('Reset Password');
        getElement.cancel().click();
        loginPage.verifyLoginPage().should('have.text','Login');
    })

})