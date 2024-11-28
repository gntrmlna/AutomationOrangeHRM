import loginPage from "../../../pom/login/login.cy";
import dashboardPage from "../../../pom/dashboard/dashboard.cy";
import API from "../../../pom/API/hitAPI.cy";
import getElement from "../../../pom/Element/getElement.cy";
/// <reference types='cypress' />

describe('Testing Directory Menu in Admin Page', ()=>{
    it('directory menu in admin page', ()=>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        getElement.getUsername().type('Admin');
        getElement.getPassword().type('admin123');

        API.hitApiLogin().as('succesLogin');
        getElement.submit().click();
        cy.wait('@succesLogin');

        getElement.geth6().contains('Dashboard').should('have.text', 'Dashboard');

        API.hitApiLoadEmployee().as('directoryPage');
        dashboardPage.getDirectory().click();
        cy.wait('@directoryPage');

        dashboardPage.getEmployeeName().type('Peter');
        dashboardPage.listBox().contains('Peter Mac Anderson').click();

        dashboardPage.selectBox().eq(0).click();
        dashboardPage.listBox().contains('Chief Financial Officer').click();
        
        dashboardPage.selectBox().eq(1).click();
        dashboardPage.listBox().contains('New York Sales Office').click();
        
        API.hitApiEmployee().as("foundEmployee");
        getElement.submit().click();
        cy.wait('@foundEmployee');

        getElement.getParagraph().contains('Peter Mac Anderson');
        getElement.getParagraph().contains('Chief Financial Officer');
        getElement.getParagraph().contains('New York Sales Office');
    })
})