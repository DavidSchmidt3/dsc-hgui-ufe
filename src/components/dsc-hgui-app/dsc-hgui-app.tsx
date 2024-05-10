import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'dsc-hgui-app',
  styleUrl: 'dsc-hgui-app.css',
  shadow: true,
})
export class DscHguiApp {
  @State() private relativePath = "";

  @Prop() basePath: string = "";
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length)
      } else {
        this.relativePath = ""
      }
    }

    window.navigation?.addEventListener("navigate", (ev: Event) => {
      if ((ev as any).canIntercept) { (ev as any).intercept(); }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname)
  }


  render() {
    let element = 'menu';
    let entryId = 'new';
    let isPatient = false;

    if (this.relativePath.startsWith("entry/")) {
      element = "editor";
      entryId = this.relativePath.split("/")[1]
      isPatient = this.relativePath.split("/")[2] === 'patientEdit' || this.relativePath.split("/")[2] === undefined;
    }

    if (this.relativePath.startsWith("list")) {
      element = "list";
    }

    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute)
    }

    const getComponent = () => {
      switch (element) {
        case "menu":
          return <dsc-hgui-menu onitem-click={(ev: CustomEvent<string>) => navigate(ev.detail)}></dsc-hgui-menu>
        case "editor":
          return <dsc-hgui-editor ambulance-id={this.ambulanceId} onEditor-closed={() => navigate('./menu')} entryId={entryId} isPatient={isPatient} apiBase={this.apiBase}></dsc-hgui-editor>
        case "list":
          return <dsc-hgui-list onReturn={() => navigate('./menu')} onEdit={(ev: CustomEvent<String>) => navigate('./entry/' + ev.detail)} ambulance-id={this.ambulanceId} apiBase={this.apiBase}></dsc-hgui-list>
          default:
          return <div>Unknown element: {element}</div>
      }
    }

    return (
      <Host>
        <h1>Dávid Schmidt - Poradenstvo pre pacientov</h1>
        <div class="content">
          {getComponent()}
        </div>
      </Host>
    );
  }
}
