export class LoginPage{
    currentLoginPage(userinfo){
        cy.get('[name="username"]').type(userinfo.username);
        cy.get('[name="username"]').invoke('text')
        .then((data)=>{
            const actualValue = data;
            
        })

        
        cy.get('[type="password"]').type(userinfo.password);
        cy.get('[type="submit"]').click();
        //cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(0).click();
        cy.contains('Admin').should('be.visible').click();
        cy.contains('Admin').invoke('text')
        .then((data1)=>{
            const expectedValue = data1;
            expect('actualValue').to.deep.equal('expectedValue');
        })

       // expect(actualValue).to.deep.equal(expectedValue);
       // cy.get('[class="oxd-select-text-input"]').eq(0).click();
      // cy.contains('Admin').should('be.visible').click();




    }
    dropDown(userinfo){
        cy.wait(4000);
        cy.get('[name="username"]').type(userinfo.username);
        cy.get('[type="password"]').type(userinfo.password);
        cy.get('[type="submit"]').click();
        cy.contains('Admin').click();
        cy.get('.oxd-topbar-body-nav-tab-item').eq(1).click()
        cy.get('a[role="menuitem"]').each(function($ele,index,list){
            
            if ($ele.text() ==="Job Titles"){
                cy.log('Element find');
                cy.wrap($ele).click();
                cy.wait(4000);
                //cy.title().should('include','OrangeHrm')
            }
            else{
                cy.log('Return the natural login','$ele.text()')
            }
            cy.go(-1);
           
        })

    }
    checkBoxes(userinfo){
        // Get all checkboxes on the page
        const checkboxes = cy.get('input[type="checkbox"]');

// Click all checkboxes
checkboxes.each((checkbox) => {
    cy.window().scrollTo("bottom", { duration: 1000 }) // Errors, 'window' does not yield DOM element



  cy.wrap(checkbox).click();
});


    }
        
}
export const loginPage = new LoginPage();