export default class dashboardPage {
    static getDirectory(){
        return cy.get('span').contains('Directory');
    }

    static selectBox(){
        return cy.get('.oxd-select-text-input');
    }

    static listBox(){
        return cy.get('[role="listbox"]');
    }

    static getParagraph(){
        return cy.get('p');
    }

    static submit(){
        return cy.get('[type="submit"]');
    }

    static getEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }

    static hitApiLogin(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts');
    }

    static hitApiEmployee(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2');
    }

    static hitApiMessages(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0');
    }
}