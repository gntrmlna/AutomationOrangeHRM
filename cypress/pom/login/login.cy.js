export default class loginPage{
    static visitPage(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }

}