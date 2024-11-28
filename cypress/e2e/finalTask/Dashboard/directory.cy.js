import loginPage from "../../../pom/login/login.cy";
import dashboardPage from "../../../pom/dashboard/dashboard.cy";
/// <reference types='cypress' />

describe('Testing Directory Menu in Admin Page', ()=>{
    it('directory menu in admin page', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        dashboardPage.hitApiLogin().as('succesLogin');
        loginPage.typeSubmit().click();
        cy.wait('@succesLogin');

        loginPage.dashboard().should('have.text', 'Dashboard');

        dashboardPage.hitApiMessages().as('directoryPage');
        dashboardPage.getDirectory().click();
        cy.wait('@directoryPage');

        dashboardPage.getEmployeeName().type('Peter');
        dashboardPage.listBox().contains('Peter Mac Anderson').click();

        dashboardPage.selectBox().eq(0).click();
        dashboardPage.listBox().contains('Chief Financial Officer').click();
        
        dashboardPage.selectBox().eq(1).click();
        dashboardPage.listBox().contains('New York Sales Office').click();
        
        dashboardPage.hitApiEmployee().as("foundEmployee");
        dashboardPage.submit().click();
        cy.wait('@foundEmployee');

        dashboardPage.getParagraph().contains('Peter Mac Anderson');
        dashboardPage.getParagraph().contains('Chief Financial Officer');
        dashboardPage.getParagraph().contains('New York Sales Office');
    })
})