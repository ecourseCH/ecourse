import { EcoursePage } from './app.po';

describe('ecourse App', () => {
  let page: EcoursePage;

  beforeEach(() => {
    page = new EcoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
