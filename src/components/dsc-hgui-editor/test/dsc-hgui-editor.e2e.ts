import { newE2EPage } from '@stencil/core/testing';

describe('dsc-hgui-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsc-hgui-editor></dsc-hgui-editor>');

    const element = await page.find('dsc-hgui-editor');
    expect(element).toHaveClass('hydrated');
  });
});
