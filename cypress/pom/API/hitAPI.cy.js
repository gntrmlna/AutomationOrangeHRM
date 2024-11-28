export default class API{
    static hitApiLogin(){
        return cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts');
    }

    static hitApiMessages(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages');
    }

    static hitApiEmployee(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2');
    }

    static hitApiLoadEmployee(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0');
    }
}