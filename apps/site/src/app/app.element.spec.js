import { AppElement } from './app.element';
describe('AppElement', () => {
  let app;
  beforeEach(() => {
    app = new AppElement();
  });
  it('should create successfully', () => {
    expect(app).toBeTruthy();
  });
  it('should have a greeting', () => {
    app.connectedCallback();
    expect(app.querySelector('h1').innerHTML).toContain('Welcome site');
  });
});
