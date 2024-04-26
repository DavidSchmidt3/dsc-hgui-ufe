import { Component, Event, EventEmitter, Host, h } from '@stencil/core';


@Component({
  tag: 'dsc-hgui-menu',
  styleUrl: 'dsc-hgui-menu.css',
  shadow: true,
})

// Inspired by: https://github.com/milung/ufe-controller/blob/master/web-ui/src/components/ufe-application-cards/ufe-application-cards.css
export class DscHguiMenu {
  @Event({ eventName: "item-click" }) itemClicked: EventEmitter<string>

  items = [
    {
      title: "Nová požiadavka o poradenstvo",
      details: "Možnosť pre pacientov získať poradenstvo od lekára.",
      path: "./entry/new"
    },
    {
      title: "Zobraziť zoznam požiadaviek",
      details: "Zoznam všetkých požiadaviek na poradenstvo.",
      path: "./list/"
    }
  ]

  render() {
    return (
      <Host>
        {this.items.map(card =>
          <div class="card"><div class="card-wrapper">
            <div class="title-section">
              <div class="title">{card.title}</div>
            </div>
            <div class="text">{card.details}</div>
            <div class="fill-1"></div>
            <div class="actions">
              <md-filled-button
                disabled={card.path === null}
              onClick={() => this.itemClicked.emit(card.path)}>
                Otvoriť
                </md-filled-button>
            </div>
          </div>
          </div>
        )}
      </Host>
    );
  }

}
