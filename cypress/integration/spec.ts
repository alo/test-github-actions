it('loads examples', () => {
  cy.visit('http://localhost:4200');
  cy.contains('test-github-actions-fail');
});
