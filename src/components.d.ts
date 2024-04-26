/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DscHguiApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface DscHguiEditor {
        "apiBase": string;
        "entryId": string;
        "patientId": string;
    }
    interface DscHguiMenu {
    }
}
export interface DscHguiEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDscHguiEditorElement;
}
export interface DscHguiMenuCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDscHguiMenuElement;
}
declare global {
    interface HTMLDscHguiAppElement extends Components.DscHguiApp, HTMLStencilElement {
    }
    var HTMLDscHguiAppElement: {
        prototype: HTMLDscHguiAppElement;
        new (): HTMLDscHguiAppElement;
    };
    interface HTMLDscHguiEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLDscHguiEditorElement extends Components.DscHguiEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDscHguiEditorElementEventMap>(type: K, listener: (this: HTMLDscHguiEditorElement, ev: DscHguiEditorCustomEvent<HTMLDscHguiEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDscHguiEditorElementEventMap>(type: K, listener: (this: HTMLDscHguiEditorElement, ev: DscHguiEditorCustomEvent<HTMLDscHguiEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDscHguiEditorElement: {
        prototype: HTMLDscHguiEditorElement;
        new (): HTMLDscHguiEditorElement;
    };
    interface HTMLDscHguiMenuElementEventMap {
        "item-click": string;
    }
    interface HTMLDscHguiMenuElement extends Components.DscHguiMenu, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDscHguiMenuElementEventMap>(type: K, listener: (this: HTMLDscHguiMenuElement, ev: DscHguiMenuCustomEvent<HTMLDscHguiMenuElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDscHguiMenuElementEventMap>(type: K, listener: (this: HTMLDscHguiMenuElement, ev: DscHguiMenuCustomEvent<HTMLDscHguiMenuElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDscHguiMenuElement: {
        prototype: HTMLDscHguiMenuElement;
        new (): HTMLDscHguiMenuElement;
    };
    interface HTMLElementTagNameMap {
        "dsc-hgui-app": HTMLDscHguiAppElement;
        "dsc-hgui-editor": HTMLDscHguiEditorElement;
        "dsc-hgui-menu": HTMLDscHguiMenuElement;
    }
}
declare namespace LocalJSX {
    interface DscHguiApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface DscHguiEditor {
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: DscHguiEditorCustomEvent<string>) => void;
        "patientId"?: string;
    }
    interface DscHguiMenu {
        "onItem-click"?: (event: DscHguiMenuCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "dsc-hgui-app": DscHguiApp;
        "dsc-hgui-editor": DscHguiEditor;
        "dsc-hgui-menu": DscHguiMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dsc-hgui-app": LocalJSX.DscHguiApp & JSXBase.HTMLAttributes<HTMLDscHguiAppElement>;
            "dsc-hgui-editor": LocalJSX.DscHguiEditor & JSXBase.HTMLAttributes<HTMLDscHguiEditorElement>;
            "dsc-hgui-menu": LocalJSX.DscHguiMenu & JSXBase.HTMLAttributes<HTMLDscHguiMenuElement>;
        }
    }
}
