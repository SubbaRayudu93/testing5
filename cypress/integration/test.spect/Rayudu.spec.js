import { logout1 } from "../test_pages/LogIn&LogOut.page";

describe("", () => {

    describe('Login and Logout', () => {
        const loginData = [
            { username: 'student', password: 'incorrectPassword ' },
            { username: 'incorrectUser ', password: 'Password123' },
            { username: 'incorrectUser ', password: 'incorrectPassword ' },
            { username: ' ', password: 'Password123' },
            { username: 'student', password: ' ' },
            { username: ' ', password: ' ' },
            // Add more login data as needed
        ];

        beforeEach(() => {
            cy.visit('https://practicetestautomation.com/practice-test-login/');
        });
        it('ValidPasword & validUsername',() =>{
            logout1.loginOfWithUserNamePassword()
            logout1.validUserNameAndValidPassword()
            logout1.logOutPage();

        })


        Cypress._.each(loginData, (data, index) => {

            it(`Test ${index + 1}: inValidLogin & inValidPassword`, () => {
                // Login
                cy.get('#username').type(data.username);
                cy.get('#password').type(data.password);
                cy.get('[id="submit"]').click();
                cy.title('include', '/logged-in-successfully/');
                cy.url().then((url) => {
                    if (url.includes('/dashboard')) {
                        logout1.validUserNameAndValidPassword()
                        logout1.logOutPage()
                    } else {
                        logout1.inValidUserNameAndInValidPassword();
                    }
                });
                cy.wait(3000);

                logout1.logOutPage();

                // logout1.attachedFile5(data)

                // logout1.retry2(data);
                //cy.get('.post-title').should('have.text','Logged In Successfully');
                // cy.get('body').then(($body) => {
                //     if ($body.text().includes('Welcome, student')) {
                //       // Successful login
                //       expect(true).to.be.true; // Assertion to verify successful login
                //     } else {
                //       // Failed login
                //       expect.fail('Login failed.'); // Assertion to fail the test
                //     }
                //   });



                //cy.contains('Log out').click();
                // cy.get('.post-title').should('have.text','Logged In Successfully');
                // cy.contains('Log out').click();
                // logout1.attachedFile5();
                // cy.get('#error').should('be.visible');
                // cy.get('#error').invoke('text').then(data => {
                //     expect(data).to.be.equals(data)
                // })
                // //.wait(5000);

                // Assertion: Verify login success
                // cy.get('.welcome-message').should('contain', 'Welcome'); // Replace with your welcome message selector

                // // Logout
                // cy.get('.logout-button').click(); // Replace with your logout button selector

                // // Assertion: Verify logout success
                // cy.get('.login-button').should('exist'); // Replace with your login button selector
            });
        });
    });

})
