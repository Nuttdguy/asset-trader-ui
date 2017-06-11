import { AssetTraderUiPage } from './app.po';

describe('asset-trader-ui App', () => {
  let page: AssetTraderUiPage;

  beforeEach(() => {
    page = new AssetTraderUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
