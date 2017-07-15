import { BlogApplicationPage } from './app.po';

describe('blog-application App', () => {
  let page: BlogApplicationPage;

  beforeEach(() => {
    page = new BlogApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
