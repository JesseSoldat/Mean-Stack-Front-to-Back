import { MeanStackFrontBackPage } from './app.po';

describe('mean-stack-front-back App', function() {
  let page: MeanStackFrontBackPage;

  beforeEach(() => {
    page = new MeanStackFrontBackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
