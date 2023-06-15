

describe('login action', () => {
   beforeEach(() => {
      cy.visit("http://localhost:5173/login")
   })


   it('should display login card correctly', () => {
      cy.get('[e2e-id="login-email"]').should('be.visible')
      cy.get('[e2e-id="login-password"]').should('be.visible')
      cy.get('[e2e-id="login-submit"]').should('be.visible')
   })

   it('should allow the user to type their credentials', () => {
      const invalidEmail = 'test@example.com';
      const invalidPassword = '12345';

      cy.get('[e2e-id="login-email"]').type(invalidEmail).should('have.value', invalidEmail);
      cy.get('[e2e-id="login-password"]').type(invalidPassword).should('have.value', invalidPassword);
   })

   it('should clear password value and stay on the same page for invalid credentials', () => {
      const invalidEmail = 'test@example.com';
      const invalidPassword = 'wrongpassword';

      cy.get('[e2e-id="login-email"]').type(invalidEmail);
      cy.get('[e2e-id="login-password"]').type(invalidPassword);
      cy.get('[e2e-id="login-submit"]').click();

      cy.url().should('eq', 'http://localhost:5173/login');
      cy.get('[e2e-id="login-password"]').should('have.value', '');
   });

   it('should redirect to admin dashboard for valid credentials', () => {

   })
})