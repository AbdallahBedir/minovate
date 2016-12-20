import { MinovatePage } from './app.po';

describe('minovate App', function() {
  let page: MinovatePage;

  beforeEach(() => {
    page = new MinovatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
