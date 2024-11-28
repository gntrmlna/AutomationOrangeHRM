/// <reference types='cypress' />

import loginPage from "../../../pom/login/login.cy";

describe('Testing Login Page', ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
    })
    it('Pengguna dapat login menggunakan data valid - TC_001', ()=>{
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('succesLogin');
        loginPage.typeSubmit().click();
        cy.wait('@succesLogin');

        loginPage.dashboard().should('have.text','Dashboard');
    })
    it('Pengguna tidak dapat login mengunakan data invalid - TC_002', ()=>{
        loginPage.inputUsername().type('cobacoba');
        loginPage.inputPassword().type('cobajuga');
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('invalidData');
        loginPage.typeSubmit().click();
        cy.wait('@invalidData');
        loginPage.invalidCredentials().should('have.text', 'Invalid credentials');
    })
    it('Case sensitive password - TC_003', ()=>{
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('Admin123');

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('caseSensitive');
        loginPage.typeSubmit().click();
        cy.wait('@caseSensitive');

        loginPage.invalidCredentials().should('have.text', 'Invalid credentials');
    })
    it('Pengguna tidak dapat login jika username dan password tidak diisi - TC_004', ()=>{
        loginPage.inputUsername().should('have.value', '');
        loginPage.inputPassword().should('have.value', '');
        loginPage.typeSubmit().click();
        loginPage.requiredText().should('have.text', 'Required');
    })
    it('Pengguna tidak dapat login jika password tidak diisi - TC_005', ()=>{
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().should('have.value', '');
        loginPage.typeSubmit().click();
        loginPage.requiredText().should('have.text', 'Required');
    })

    it('Pengguna tidak dapat login jika username salah dan password kosong - TC_006', ()=>{
        loginPage.inputUsername().type('coba');
        loginPage.inputPassword().should('have.value', '');
        loginPage.typeSubmit().click();
        loginPage.requiredText().should('have.text', 'Required');
    })
})