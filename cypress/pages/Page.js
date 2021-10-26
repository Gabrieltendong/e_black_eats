
class Page {

    static clickOn(element){
        cy.get(element).click();
    }

}

export default Page;