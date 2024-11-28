export default class loginPage{
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static inputPassword(){
        return cy.get('[name="password"]');
    }

    static typeSubmit(){
        return cy.get('[type="submit"]');
    }

    static dashboard(){
        return cy.get('h6').contains('Dashboard');
    }

    static invalidCredentials(){
        return cy.get('p').contains('Invalid credentials');
    }

    static requiredText(){
        return cy.get('span').contains('Required');
    }
}