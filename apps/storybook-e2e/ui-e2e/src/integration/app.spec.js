import { getGreeting } from '../support/app.po';
describe('site', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary'));
  it('should display welcome message', () => {
    getGreeting().contains('Petaloso');
  });
});
