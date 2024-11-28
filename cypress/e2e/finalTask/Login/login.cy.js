import loginPage from "../../../pom/login/login.cy";
import API from "../../../pom/API/hitAPI.cy";
import getElement from "../../../pom/Element/getElement.cy";

/// <reference types='cypress' />

describe('Testing Login Page', ()=>{
    beforeEach(()=>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
    })
    it('Pengguna dapat login menggunakan data valid - TC_001', ()=>{
        getElement.getUsername().type('Admin');
        getElement.getPassword().type('admin123');

        API.hitApiLogin().as('succesLogin');
        getElement.submit().click();
        cy.wait('@succesLogin');

        getElement.geth6().contains('Dashboard').should('have.text','Dashboard');
    })
    it('Pengguna tidak dapat login mengunakan data invalid - TC_002', ()=>{
        getElement.getUsername().type('cobacoba');
        getElement.getPassword().type('cobajuga');
        API.hitApiMessages().as('invalidData');
        getElement.submit().click();
        cy.wait('@invalidData');
        getElement.getParagraph().contains('Invalid credentials').should('have.text', 'Invalid credentials');
    })
    it('Case sensitive password - TC_003', ()=>{
        getElement.getUsername().type('Admin');
        getElement.getPassword().type('Admin123');

        API.hitApiMessages().as('caseSensitive');
        getElement.submit().click();
        cy.wait('@caseSensitive');

        getElement.getParagraph().contains('Invalid credentials').should('have.text', 'Invalid credentials');
    })
    it('Pengguna tidak dapat login jika username dan password tidak diisi - TC_004', ()=>{
        getElement.getUsername().should('have.value', '');
        getElement.getPassword().should('have.value', '');
        getElement.submit().click();
        getElement.getSpan().contains('Required').should('have.text', 'Required');
    })
    it('Pengguna tidak dapat login jika password tidak diisi - TC_005', ()=>{
        getElement.getUsername().type('Admin');
        getElement.getPassword().should('have.value', '');
        getElement.submit().click();
        getElement.getSpan().contains('Required').should('have.text', 'Required');
    })

    it('Pengguna tidak dapat login jika username salah dan password kosong - TC_006', ()=>{
        getElement.getUsername().type('coba');
        getElement.getPassword().should('have.value', '');
        getElement.submit().click();
        getElement.getSpan().contains('Required').should('have.text', 'Required');
    })
})