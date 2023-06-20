

describe("",() =>{
    
    it("",() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('rayudu.json').then((data)=>{
            cy.login(data);
            //cy.log(data)
        })

    })
    it("",() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('rayudu.json').then((data)=>{
            cy.login(data);
    });

        
    })
})
