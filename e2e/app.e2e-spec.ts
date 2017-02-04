import { NgCameoPage } from './app.po';

describe('ng-cameo App', function() {
  let page: NgCameoPage;

  beforeEach(() => {
    page = new NgCameoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
