import { newSpecPage } from '@stencil/core/testing';
import { DscHguiMenu } from '../dsc-hgui-menu';

describe('dsc-hgui-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DscHguiMenu],
      html: `<dsc-hgui-menu></dsc-hgui-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <dsc-hgui-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsc-hgui-menu>
    `);
  });
});
