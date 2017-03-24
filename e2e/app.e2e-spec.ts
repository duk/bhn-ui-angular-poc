import { BhnUiAngularPocPage } from './app.po';

describe('bhn-ui-angular-poc App', () => {
  let page: BhnUiAngularPocPage;

  beforeEach(() => {
    page = new BhnUiAngularPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
