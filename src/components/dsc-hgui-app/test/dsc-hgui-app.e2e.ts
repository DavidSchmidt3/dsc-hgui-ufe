import { newE2EPage } from '@stencil/core/testing';

describe('dsc-hgui-dsc-hgui-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-hgui-dsc-hgui-app></dsc-hgui-dsc-hgui-app>');

    const element = await page.find('dsc-hgui-dsc-hgui-app');
    expect(element).toHaveClass('hydrated');
  });
});
