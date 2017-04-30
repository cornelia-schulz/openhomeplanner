import { OpenHomePlannerPage } from './app.po';

describe('open-home-planner App', () => {
  let page: OpenHomePlannerPage;

  beforeEach(() => {
    page = new OpenHomePlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
