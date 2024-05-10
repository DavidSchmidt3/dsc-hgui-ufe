import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { GuidanceEntry, HospitalGuidanceListApiFactory } from '../../api/dsc-hgui-webapi';
import { uuidv4 } from '../../utils/utils';

@Component({
  tag: 'dsc-hgui-editor',
  styleUrl: 'dsc-hgui-editor.css',
  shadow: true,
})
export class DscHguiEditor {
  @Prop() entryId: string;
  @Prop() patientId: string;
  @Prop() ambulanceId: string;
  @Prop() apiBase: string;

  @Event({ eventName: "editor-closed" }) editorClosed: EventEmitter<string>;

  @State() errorMessage: string;
  @State() isValid: boolean;
  @State() entry: GuidanceEntry;

  private formElement: HTMLFormElement;

  private handleInputEvent(ev: InputEvent): string {
    const target = ev.target as HTMLInputElement;
    return target.value
  }

  private async updateEntry() {
    for (let i = 0; i < this.formElement.children.length; i++) {
      const element = this.formElement.children[i]
      if ("reportValidity" in element) {
        const valid = (element as HTMLInputElement).reportValidity();
        if (!valid) {
          return;
        }
      }
    }

    try {
      this.entry.createdAt = new Date().toISOString();

      const api = HospitalGuidanceListApiFactory(undefined, this.apiBase);
      const response
        = this.entryId === "new"
          ? await api.createHospitalGuidance(this.ambulanceId, uuidv4(), this.entry)
          : await api.updateHospitalGuidance(this.ambulanceId, this.entry.id, this.entry);
      if (response.status < 299) {
        this.editorClosed.emit("store")
      } else {
        this.errorMessage = `Cannot store entry: ${response.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Cannot store entry: ${err.message || "unknown"}`
    }
  }

  private async getGuidanceEntry(): Promise<any> {
    if (this.entryId === "new") {
      this.entry = {
        id: uuidv4(),
        patientName: "",
        title: "",
        ambulanceId: this.ambulanceId,
        createdAt: "",
        description: "",
        severity: "low",
        phoneNumber: "",
        email: "",
        response: ""
      }
      return this.entry;
    }
    if (!this.entryId) {
      return undefined
    }
    try {
      const response = await HospitalGuidanceListApiFactory(undefined, this.apiBase)
        .getHospitalGuidance(this.ambulanceId, this.entryId)

      if (response.status < 299) {
        this.entry = response.data;
      } else {
        this.errorMessage = `Cannot retrieve the order: ${response.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Chyba pri ziskavani zaznamu: ${err.message ?? ""}`
    }
    return undefined;
  }

  async componentWillLoad() {
    await this.getGuidanceEntry();
  }

  render() {
    if (this.errorMessage) {
      return (
        <Host>
          <div class="error">{this.errorMessage}</div>
        </Host>
      )
    }

    return (
      <Host>
        <form ref={el => this.formElement = el} class="form">
          <h2>{this.entryId === "new" ? "Nová žiadosť o poradenstvo" : "Úprava žiadosti o poradenstvo"}</h2>

          <md-filled-text-field
            maxlength="255"
            type="text"
            label="Meno pacienta"
            required value={this.entry?.patientName}
            oninput={(ev: InputEvent) => {
              if (this.entry) { this.entry.patientName = this.handleInputEvent(ev) }
            }}>
          </md-filled-text-field>

          <md-filled-text-field type="text" label="Názov problému" maxlength="255"
            required value={this.entry?.title}
            oninput={(ev: InputEvent) => {
              if (this.entry) { this.entry.title = this.handleInputEvent(ev) }
            }}>
          </md-filled-text-field>

          <md-filled-text-field type="textarea" label="Popis problému"
            required value={this.entry?.description}
            oninput={(ev: InputEvent) => {
              if (this.entry) { this.entry.description = this.handleInputEvent(ev) }
            }}>
          </md-filled-text-field>

          <md-filled-select label="Závažnosť problému" value={this.entry?.severity}  required>
            <md-select-option value="low">Nízka</md-select-option>
            <md-select-option value="medium">Stredná</md-select-option>
            <md-select-option value="high">Vysoká</md-select-option>
          </md-filled-select>

          <md-filled-text-field
            type="text"
            label="Telefónne číslo"
            maxlength="13"
            value={this.entry?.phoneNumber}
            oninput={(ev: InputEvent) => {
              if (this.entry) { this.entry.phoneNumber = this.handleInputEvent(ev) }
            }}>
          </md-filled-text-field>

          <md-filled-text-field
            type="text"
            label="Email"
            value={this.entry?.email}
            oninput={(ev: InputEvent) => {
              if (this.entry) { this.entry.email = this.handleInputEvent(ev) }
            }}>
          </md-filled-text-field>

          <md-filled-text-field
            type="textarea"
            label="Odpoveď od lekára"
            disabled={this.entryId === "new"}
            required value={this.entry?.response}
            oninput={(ev: InputEvent) => {
              if (this.entry) { this.entry.response = this.handleInputEvent(ev) }
            }}>
          </md-filled-text-field>
        </form>

        <div class="actions">
          <md-filled-button id="confirm"
            onClick={() => this.updateEntry()}>
            <md-icon slot="icon">save</md-icon>
            Uložiť
          </md-filled-button>
          <md-filled-button id="cancel"
            onClick={() => this.editorClosed.emit("cancel")}>
            <md-icon slot="icon">cancel</md-icon>
            Zrušiť
          </md-filled-button>
        </div>
      </Host>
    );
  }

}
