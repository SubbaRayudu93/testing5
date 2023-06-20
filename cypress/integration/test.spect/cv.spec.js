//import { LoginPage, loginPage } from "./pages";
import { LoginPage, loginPage  } from "../test_pages/pages";
describe('', () => {
    let userinfo;
    beforeEach('', () => {
        cy.fixture('rayudu.json').then((data) => (userinfo = data));
        // cy.visit('https://opensource-demo.orangehrmlive.com/')

    })
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.currentLoginPage(userinfo.A);
    })
    it('', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // loginPage.currentLoginPage(userinfo.a);
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.dropDown(userinfo.A);
    })
    it.skip('', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // loginPage.currentLoginPage(userinfo.a);
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.dropDown2(userinfo.a);
    })
    it('allcheckboxes', () => {
        cy.visit('https://artoftesting.com/sampleSiteForSelenium')
        loginPage.checkBoxes(userinfo);
        //loginPage.dropDown2(userinfo.a);
    })
})