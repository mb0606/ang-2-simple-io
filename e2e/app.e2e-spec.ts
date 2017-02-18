import { ChatAng2IoPage } from './app.po';

describe('chat-ang2-io App', () => {
  let page: ChatAng2IoPage;

  beforeEach(() => {
    page = new ChatAng2IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
