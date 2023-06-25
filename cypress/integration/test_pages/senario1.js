class Senario1 {
    attachedFile(userinfo) {
        cy.get('[name="username"]').type(userinfo.username);
        cy.get('[type="password"]').type(userinfo.password);
        cy.get('[type="submit"]').click();
        cy.contains('Admin').click();
        cy.get('.oxd-topbar-body-nav-tab-item').eq(1).click()
        cy.get('a[role="menuitem"]').each(function ($ele, index, list) {

            if ($ele.text() === "Job Titles") {
                cy.log('Element find');
                cy.wrap($ele).click();
                cy.wait(4000);
                //cy.title().should('include','OrangeHrm')
            }
            else {
                cy.log('Return the natural login', '$ele.text()')
            }
            // cy.go(-1);
            //cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
            


        })
        cy.contains("Add").click({ force: true })
        //cy.wait(5000);
        cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('asdf');
        cy.get('[placeholder="Type description here"]').type('ajdkdfjdih');

    }

}
export const senario1 = new Senario1()