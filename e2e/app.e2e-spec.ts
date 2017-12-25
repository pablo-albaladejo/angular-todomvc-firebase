import { AngularTodomvcFirebasePage } from './app.po';

describe('angular-todomvc-firebase App', () => {
  let page: AngularTodomvcFirebasePage;

  beforeEach(() => {
    page = new AngularTodomvcFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
