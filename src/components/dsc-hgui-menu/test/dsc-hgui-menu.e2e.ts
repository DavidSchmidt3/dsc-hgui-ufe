import { newE2EPage } from '@stencil/core/testing';

describe('dsc-hgui-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-hgui-menu></dsc-hgui-menu>');

    const element = await page.find('dsc-hgui-menu');
    expect(element).toHaveClass('hydrated');
  });
});
