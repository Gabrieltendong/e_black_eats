import Page from "./Page";

class HomePage extends Page{

    static BTN_ACCEPT_COOKIE = "#sp-cc-accept";
    static TAB_ALL = ".hm-icon-label";
    static MENU_BEST_SALE = "div#hmenu-content > ul:nth-child(1) > li:nth-child(2)";
    static NAV_ACCOUNT = "#nav-link-accountList";
    static BTN_SIGNIN = "#nav-flyout-ya-signin";
    static INPUT_EMAIL = "#ap_email"
    static INPUT_PASSWORD = "#ap_password"

    static visit(){
        cy.visit('/');
    }

    static handleCookie(){
        cy.get(BTN_ACCEPT_COOKIE).click();
    }

    static clickOnTabAll(){
        this.clickOn(TAB_ALL);
    }

    static clickOnTabBestSale(){
        this.clickOn(MENU_BEST_SALE);
    }

    static getUrl(){
        return cy.url();
    }

    static clickOnBtnLogin(){
        cy.get(NAV_ACCOUNT).trigger('mouseover');
        this.clickOn(BTN_SIGNIN);
    }

    static setEmail(email){
        cy.get(INPUT_EMAIL).type(`${email}{enter}`);
    }

    static setPassword(password){
        cy.get(INPUT_PASSWORD).type(`${password}{enter}`);
    }

}

export default HomePage;