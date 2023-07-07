import { senario1 } from "../test_pages/senario1";
describe("", () => {
    let userinfo
    beforeEach('', () => {
        cy.fixture('rayudu.json').then((data) => (userinfo = data));
        // cy.visit('https://opensource-demo.orangehrmlive.com/')

    })
    it("", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title('include',"orangeHrm");
       // cy.get('.oxd-topbar-body-nav-tab-item').eq(1).click()
        // const real = cy.get('.oxd-topbar-body-nav-tab-item').eq(1)
        // const element =  cy.get('a[role="menuitem"]')
        // const option = 'Job Titles'
        senario1.attachedFile(userinfo.A)

    })
    it.only("click for js allert", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       // cy.contains('Click for JS Alert').click();
       cy.get('[onclick="jsAlert()"]').click();
    })
})