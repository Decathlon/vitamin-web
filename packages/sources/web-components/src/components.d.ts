/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { VitamixId } from "@vtmn/icons/dist/vitamix/font/vitamix";
export namespace Components {
    interface VtmnBadge {
        /**
          * The value in the badge
          * @type {number}
          * @defaultValue 0
         */
        "value"?: number;
        /**
          * The variant of the badge.
          * @type {string}
          * @defaultValue 'default'
         */
        "variant"?: 'default' | 'brand' | 'reversed' | 'accent';
    }
    interface VtmnButton {
        /**
          * Icon to display when it is a button with icon only
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "iconAlone": VitamixId;
        /**
          * Icon to display on the left hand side of button
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "iconLeft": VitamixId;
        /**
          * Icon to display on the right hand side of button
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "iconRight": VitamixId;
        /**
          * The size of the button.
          * @defaultValue 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @defaultValue 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghost-reversed'
    | 'conversion';
    }
    interface VtmnCheckbox {
        /**
          * The checked state of the checkbox.
          * @defaultValue false
         */
        "checked": boolean;
        /**
          * The disabled state of the checkbox.
          * @defaultValue false
         */
        "disabled": boolean;
        /**
          * The id of the checkbox and its label.
         */
        "identifier": string;
        /**
          * The text of the checkbox.
         */
        "labelText": string;
        /**
          * The name of the checkbox.
         */
        "name": string;
        /**
          * The value of the checkbox.
         */
        "value": string;
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @defaultValue '#'
         */
        "href": string;
        /**
          * Is the link has an icon or not
          * @defaultValue undefined
         */
        "iconAlong": boolean;
        /**
          * The size of the link.
          * @defaultValue undefined
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Is the link standalone or not
          * @defaultValue undefined
         */
        "standalone": boolean;
        /**
          * The target of the link
          * @defaultValue null
         */
        "target": string;
    }
    interface VtmnLoader {
        /**
          * The size of the loader.
          * @type {string}
          * @defaultValue 'medium'
         */
        "size": 'small' | 'medium' | 'large';
    }
    interface VtmnRadioButton {
        /**
          * The checked state of the radio.
          * @defaultValue false
         */
        "checked": boolean;
        /**
          * The disabled state of the radio.
          * @defaultValue false
         */
        "disabled": boolean;
        /**
          * The id of the radio and its label.
         */
        "identifier": string;
        /**
          * The text of the radio.
         */
        "labelText": string;
        /**
          * The name of the radio.
         */
        "name": string;
        /**
          * The value of the radio.
         */
        "value": string;
    }
    interface VtmnTextInput {
        /**
          * The disabled state of the text-input.
          * @type {boolean}
          * @defaultValue false
         */
        "disabled"?: boolean;
        /**
          * The helper text of the text input.
          * @type {string}
          * @defaultValue 'Helper text goes here'
         */
        "helperText"?: string;
        /**
          * The icon to be displayed
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "icon"?: string;
        /**
          * The id of the text input.
          * @type {string}
          * @defaultValue undefined
         */
        "identifier": string;
        /**
          * The placeholder of the text input.
          * @type {string}
          * @defaultValue 'My placeholder'
         */
        "placeholder"?: string;
        /**
          * The valid variant state of the text-input.
          * @type {string}
          * @defaultValue 'default'
         */
        "state"?: 'default' | 'valid' | 'error';
        /**
          * Is the text-input multiline or not.
          * @type {boolean}
          * @defaultValue false
         */
        "textarea"?: boolean;
    }
    interface VtmnToggle {
        /**
          * The checked state of the toggle.
          * @defaultValue false
         */
        "checked": boolean;
        /**
          * The disabled state of the toggle.
          * @defaultValue false
         */
        "disabled": boolean;
        /**
          * The id of the toggle and its label.
         */
        "identifier": string;
        /**
          * The text of the toggle.
         */
        "labelText": string;
        /**
          * The size of the toggle.
         */
        "size": 'small' | 'medium';
    }
}
declare global {
    interface HTMLVtmnBadgeElement extends Components.VtmnBadge, HTMLStencilElement {
    }
    var HTMLVtmnBadgeElement: {
        prototype: HTMLVtmnBadgeElement;
        new (): HTMLVtmnBadgeElement;
    };
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnCheckboxElement extends Components.VtmnCheckbox, HTMLStencilElement {
    }
    var HTMLVtmnCheckboxElement: {
        prototype: HTMLVtmnCheckboxElement;
        new (): HTMLVtmnCheckboxElement;
    };
    interface HTMLVtmnLinkElement extends Components.VtmnLink, HTMLStencilElement {
    }
    var HTMLVtmnLinkElement: {
        prototype: HTMLVtmnLinkElement;
        new (): HTMLVtmnLinkElement;
    };
    interface HTMLVtmnLoaderElement extends Components.VtmnLoader, HTMLStencilElement {
    }
    var HTMLVtmnLoaderElement: {
        prototype: HTMLVtmnLoaderElement;
        new (): HTMLVtmnLoaderElement;
    };
    interface HTMLVtmnRadioButtonElement extends Components.VtmnRadioButton, HTMLStencilElement {
    }
    var HTMLVtmnRadioButtonElement: {
        prototype: HTMLVtmnRadioButtonElement;
        new (): HTMLVtmnRadioButtonElement;
    };
    interface HTMLVtmnTextInputElement extends Components.VtmnTextInput, HTMLStencilElement {
    }
    var HTMLVtmnTextInputElement: {
        prototype: HTMLVtmnTextInputElement;
        new (): HTMLVtmnTextInputElement;
    };
    interface HTMLVtmnToggleElement extends Components.VtmnToggle, HTMLStencilElement {
    }
    var HTMLVtmnToggleElement: {
        prototype: HTMLVtmnToggleElement;
        new (): HTMLVtmnToggleElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-badge": HTMLVtmnBadgeElement;
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-checkbox": HTMLVtmnCheckboxElement;
        "vtmn-link": HTMLVtmnLinkElement;
        "vtmn-loader": HTMLVtmnLoaderElement;
        "vtmn-radio-button": HTMLVtmnRadioButtonElement;
        "vtmn-text-input": HTMLVtmnTextInputElement;
        "vtmn-toggle": HTMLVtmnToggleElement;
    }
}
declare namespace LocalJSX {
    interface VtmnBadge {
        /**
          * The value in the badge
          * @type {number}
          * @defaultValue 0
         */
        "value"?: number;
        /**
          * The variant of the badge.
          * @type {string}
          * @defaultValue 'default'
         */
        "variant"?: 'default' | 'brand' | 'reversed' | 'accent';
    }
    interface VtmnButton {
        /**
          * Icon to display when it is a button with icon only
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "iconAlone"?: VitamixId;
        /**
          * Icon to display on the left hand side of button
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "iconLeft"?: VitamixId;
        /**
          * Icon to display on the right hand side of button
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "iconRight"?: VitamixId;
        /**
          * The size of the button.
          * @defaultValue 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @defaultValue 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghost-reversed'
    | 'conversion';
    }
    interface VtmnCheckbox {
        /**
          * The checked state of the checkbox.
          * @defaultValue false
         */
        "checked"?: boolean;
        /**
          * The disabled state of the checkbox.
          * @defaultValue false
         */
        "disabled"?: boolean;
        /**
          * The id of the checkbox and its label.
         */
        "identifier": string;
        /**
          * The text of the checkbox.
         */
        "labelText"?: string;
        /**
          * The name of the checkbox.
         */
        "name"?: string;
        /**
          * The value of the checkbox.
         */
        "value"?: string;
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @defaultValue '#'
         */
        "href"?: string;
        /**
          * Is the link has an icon or not
          * @defaultValue undefined
         */
        "iconAlong"?: boolean;
        /**
          * The size of the link.
          * @defaultValue undefined
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Is the link standalone or not
          * @defaultValue undefined
         */
        "standalone"?: boolean;
        /**
          * The target of the link
          * @defaultValue null
         */
        "target"?: string;
    }
    interface VtmnLoader {
        /**
          * The size of the loader.
          * @type {string}
          * @defaultValue 'medium'
         */
        "size"?: 'small' | 'medium' | 'large';
    }
    interface VtmnRadioButton {
        /**
          * The checked state of the radio.
          * @defaultValue false
         */
        "checked"?: boolean;
        /**
          * The disabled state of the radio.
          * @defaultValue false
         */
        "disabled"?: boolean;
        /**
          * The id of the radio and its label.
         */
        "identifier": string;
        /**
          * The text of the radio.
         */
        "labelText"?: string;
        /**
          * The name of the radio.
         */
        "name"?: string;
        /**
          * The value of the radio.
         */
        "value"?: string;
    }
    interface VtmnTextInput {
        /**
          * The disabled state of the text-input.
          * @type {boolean}
          * @defaultValue false
         */
        "disabled"?: boolean;
        /**
          * The helper text of the text input.
          * @type {string}
          * @defaultValue 'Helper text goes here'
         */
        "helperText"?: string;
        /**
          * The icon to be displayed
          * @type {VitamixId}
          * @defaultValue undefined
         */
        "icon"?: string;
        /**
          * The id of the text input.
          * @type {string}
          * @defaultValue undefined
         */
        "identifier": string;
        /**
          * The placeholder of the text input.
          * @type {string}
          * @defaultValue 'My placeholder'
         */
        "placeholder"?: string;
        /**
          * The valid variant state of the text-input.
          * @type {string}
          * @defaultValue 'default'
         */
        "state"?: 'default' | 'valid' | 'error';
        /**
          * Is the text-input multiline or not.
          * @type {boolean}
          * @defaultValue false
         */
        "textarea"?: boolean;
    }
    interface VtmnToggle {
        /**
          * The checked state of the toggle.
          * @defaultValue false
         */
        "checked"?: boolean;
        /**
          * The disabled state of the toggle.
          * @defaultValue false
         */
        "disabled"?: boolean;
        /**
          * The id of the toggle and its label.
         */
        "identifier": string;
        /**
          * The text of the toggle.
         */
        "labelText"?: string;
        /**
          * The size of the toggle.
         */
        "size"?: 'small' | 'medium';
    }
    interface IntrinsicElements {
        "vtmn-badge": VtmnBadge;
        "vtmn-button": VtmnButton;
        "vtmn-checkbox": VtmnCheckbox;
        "vtmn-link": VtmnLink;
        "vtmn-loader": VtmnLoader;
        "vtmn-radio-button": VtmnRadioButton;
        "vtmn-text-input": VtmnTextInput;
        "vtmn-toggle": VtmnToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-badge": LocalJSX.VtmnBadge & JSXBase.HTMLAttributes<HTMLVtmnBadgeElement>;
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-checkbox": LocalJSX.VtmnCheckbox & JSXBase.HTMLAttributes<HTMLVtmnCheckboxElement>;
            "vtmn-link": LocalJSX.VtmnLink & JSXBase.HTMLAttributes<HTMLVtmnLinkElement>;
            "vtmn-loader": LocalJSX.VtmnLoader & JSXBase.HTMLAttributes<HTMLVtmnLoaderElement>;
            "vtmn-radio-button": LocalJSX.VtmnRadioButton & JSXBase.HTMLAttributes<HTMLVtmnRadioButtonElement>;
            "vtmn-text-input": LocalJSX.VtmnTextInput & JSXBase.HTMLAttributes<HTMLVtmnTextInputElement>;
            "vtmn-toggle": LocalJSX.VtmnToggle & JSXBase.HTMLAttributes<HTMLVtmnToggleElement>;
        }
    }
}
