export default class getElement{
    static getParagraph(){
        return cy.get('p');
    }

    static submit(){
        return cy.get('[type="submit"]');
    }

    static geth6(){
        return cy.get('h6');
    }

    static getUsername(){
        return cy.get('[name="username"]');
    }

    static getPassword(){
        return cy.get('[name="password"]');
    }

    static getSpan(){
        return cy.get('span');
    }
}