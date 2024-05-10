import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { GuidanceEntry, HospitalGuidanceListApiFactory } from '../../api/dsc-hgui-webapi';

@Component({
  tag: 'dsc-hgui-list',
  styleUrl: 'dsc-hgui-list.css',
  shadow: true,
})
export class DscHguiList {
  @Prop() ambulanceId: string;
  @Prop() apiBase: string;

  @Event({ eventName: "return" }) return: EventEmitter<string>;
  @Event({ eventName: "edit" }) edit: EventEmitter<string>;

  @State() errorMessage: string;
  @State() isValid: boolean;
  @State() entry: GuidanceEntry;

  @State() entries: GuidanceEntry[] = [];

  private async getGuidanceEntries(): Promise<GuidanceEntry[]> {
    try {
      const api = HospitalGuidanceListApiFactory(undefined, this.apiBase);
      const response = await api.getHospitalGuidanceList(this.ambulanceId);
      if (response.status < 299) {
        return response.data;
      } else {
        this.errorMessage = `Cannot fetch entries: ${response.statusText}`
      }
    }
    catch (err: any) {
      this.errorMessage = `Cannot fetch entries: ${err.message || "unknown"}`
    }
  }

  async componentWillLoad() {
    this.entries = await this.getGuidanceEntries() ?? [];
  }

  private async deleteEntry(id: string) {
    try {
      const api = HospitalGuidanceListApiFactory(undefined, this.apiBase);
      const response = await api.deleteHospitalGuidance(this.ambulanceId, id);
      if (response.status < 299) {
        this.entries = await this.getGuidanceEntries() ?? [];
      } else {
        this.errorMessage = `Cannot delete entry: ${response.statusText}`
      }
    }
    catch (err: any) {
      this.errorMessage = `Cannot delete entry: ${err.message || "unknown"}`
    }
  }

  private formatDate(iso: string) {
    if (!iso) return '';
    return new Date(Date.parse(iso)).toLocaleDateString()
  }

  render() {
    return (
      <Host>
        {this.errorMessage ? <div class="error">{this.errorMessage}</div> :
          <md-list>
            <md-list-item>
              <div slot="headline">Zoznamy poradenstva</div>
            </md-list-item>
            {this.entries.map(entry =>
              <md-list-item key={entry.id}>
                <div slot="headline">{entry.title}</div>
                <div slot="supporting-text">{this.formatDate(entry.createdAt)}</div>
                <div slot="supporting-text">{entry.patientName}</div>
                <md-outlined-button class="edit-button"
                  slot="end" onClick={() => this.edit.emit(entry.id)}>
                  <md-icon>Edit</md-icon>
                </md-outlined-button>
                <md-outlined-button slot="end" onClick={() => this.deleteEntry(entry.id)}>Delete</md-outlined-button>
              </md-list-item>
            )}
          </md-list>
        }
        <md-filled-tonal-button onClick={() => this.return.emit("return")}>Späť</md-filled-tonal-button>
      </Host>
    );
  }
}
