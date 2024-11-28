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

    static getEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }

}