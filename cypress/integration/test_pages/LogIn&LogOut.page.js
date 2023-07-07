class logOut {
  attachedFile5(data) {
    // Example test in Cypress

    // Test case

    // Visit a webpage


    // Check if a certain element exists
    // cy.get('.post-title').then(($element) => {
    if ('.post-title') {
      // Element exists, perform some actions
      cy.get('.post-title').should('have.text', 'Logged In Successfully');
      // cy.contains('Log out').click();
      // cy.get('#error').should('be.visible');
      // cy.get('#error').invoke('text').then(data => {
      //  expect(data).to.be.equals(data)
      // })
      // Continue with other assertions or actions
    } else if ('#error') {
      // Element does not exist, perform alternative actions or assertions
      //cy.get('[class="show"]').should('have.text','Your username is invalid!');
      cy.get('#error').should('be.visible');
      cy.get('#error').invoke('text').then(data => {
        expect(data).to.be.equals(data)
      })
      // cy.get('.post-title').should('have.text','Logged In Successfully');
      // cy.contains('Log out').click();
      // // cy.contains('Log out').click();
      cy.wait(5000)
      // Continue with other assertions or actions
    }



  }
  attachedFile6(data) {
    // Example test in Cypress

    // Test case


    // Check if a certain element exists
    cy.get('.post-title').then(($element) => {
      if ($element.length > 0) {
        // Element exists, perform some actions
        // cy.get('.some-element').click()
        // Continue with other assertions or actions
        cy.get('.post-title').should('have.text', 'Logged In Successfully');
        cy.contains('Log out').click();
      } else {
        // Element does not exist, perform alternative actions or assertions

        // Check another condition
        cy.get('#error').then(($anotherElement) => {
          if ($anotherElement.length > 0) {
            cy.get('#error').should('be.visible');
            cy.get('#error').invoke('text').then(data => {
              expect(data).to.be.equals(data)
            })
            // Another element exists, perform some actions
            //cy.get('.another-element').click()
            // Continue with other assertions or actions
          } else {
            // Another element does not exist, perform further alternative actions or assertions
            cy.get('.fallback-element').click()
            // Continue with other assertions or actions
          }
        })
      }
    })



  }
  attachedFile7(data) {


    cy.contains('Submit').then(($anotherElement) => {

      if ($anotherElement.length > 0) {
        cy.get('.post-title').should('have.text', 'Logged In Successfully');
        cy.contains('Log out').click();

      }
      else {
        cy.get('#error').should('be.visible');
        cy.get('#error').invoke('text').then(data => {
          expect(data).to.be.equals(data)
        })

      }
    })

  }
  attach(data) {
    cy.get('.post-title').then((welcomeMessage) => {
      if (welcomeMessage.text().includes('Logged In Successfully')) {
        // Successful login assertion
        expect(welcomeMessage.text()).to.contain('Logged In Successfully') // Replace "Your Name" with the expected welcome message
      } else {
        // Failed login assertion
        cy.get('#error').should('be.visible');
        cy.get('#error').invoke('text').then(data => {
          expect(data).to.be.equals(data)
        })
      }
    })
  }
  raju(data) {
    if ('the login is successfully executed') {

      cy.get('.post-title').should('have.text', 'Logged In Successfully');

    } else {
      cy.get('#error').should('be.visible');
      cy.get('#error').invoke('text').then(data => {
        expect(data).to.be.equals(data)
      })


    }
  }
  inValidUserNameAndInValidPassword() {
    const codeOfError = cy.get('[id="error"]');
    codeOfError
      .should('be.visible')
    codeOfError
      .invoke('text').then(data => {
        expect(data).to.be.equals(data)
      });
  }
  validUserNameAndValidPassword() {

    const validation = cy.get('[class="post-title"]')
    validation
      .should('be.visible')
      .and('have.text', 'Logged In Successfully');


  }
  logOutPage() {
    const logout = cy.contains('Log out');
    logout
      .click();


  }
  loginOfWithUserNamePassword() {
    const userName = cy.get('#username')
    userName
      .type('student');
    const password = cy.get('#password')
    password
      .type('Password123');
    cy.get('[id="submit"]').click();
  }




}



export const logout1 = new logOut();