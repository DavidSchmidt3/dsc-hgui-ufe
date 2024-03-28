import { newE2EPage } from '@stencil/core/testing';

describe('dsc-hgui-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-hgui-app></dsc-hgui-app>');

    const element = await page.find('dsc-hgui-app');
    expect(element).toHaveClass('hydrated');
  });
});
