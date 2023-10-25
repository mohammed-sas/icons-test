import { newE2EPage } from '@stencil/core/testing';

describe('fc-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-icon name="http"></fc-icon>');

    const element = await page.find('fc-icon');
    expect(element).toHaveClass('hydrated');
  });
});
