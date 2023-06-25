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
        senario1.attachedFile(userinfo.A)

    })
})