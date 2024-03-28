import { newSpecPage } from '@stencil/core/testing';
import { DscHguiApp } from '../dsc-hgui-app';

describe('dsc-hgui-dsc-hgui-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [DscHguiApp],
      html: `<dsc-hgui-dsc-hgui-app base-path="/"></dsc-hgui-dsc-hgui-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("dsc-hgui-dsc-hgui-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/dsc-hgui/`,
      components: [DscHguiApp],
      html: `<dsc-hgui-dsc-hgui-app base-path="/dsc-hgui/"></dsc-hgui-dsc-hgui-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("dsc-hgui-dsc-hgui-list");
  });
});
