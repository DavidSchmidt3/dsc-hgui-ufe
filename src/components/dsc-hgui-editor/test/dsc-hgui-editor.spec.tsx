import { newSpecPage } from '@stencil/core/testing';
import { DscHguiEditor } from '../dsc-hgui-editor';

describe('dsc-hgui-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DscHguiEditor],
      html: `<dsc-hgui-editor></dsc-hgui-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <dsc-hgui-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsc-hgui-editor>
    `);
  });
});
