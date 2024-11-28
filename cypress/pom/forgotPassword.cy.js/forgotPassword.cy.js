export default class forgotPassword{
    static getForgotPassword(){
        return cy.get('[class="orangehrm-login-forgot"]');
    }

    static cancel(){
        return cy.get('[type="button"]')
    }
}