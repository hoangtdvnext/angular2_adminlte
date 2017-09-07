import { AdminltePage } from './app.po';

describe('adminlte App', () => {
  let page: AdminltePage;

  beforeEach(() => {
    page = new AdminltePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
