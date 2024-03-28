import { Component, Host, h } from '@stencil/core';
declare global {
  interface Window { navigation: any; }
}

@Component({
  tag: 'dsc-hgui-app',
  styleUrl: 'dsc-hgui-app.css',
  shadow: true,
})
export class DscHguiApp {

  render() {

    return (
      <Host>
        <div>Ahoj</div>
      </Host>
    );
  }

}
