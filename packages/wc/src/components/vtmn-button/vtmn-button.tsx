import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vtmn-button',
  shadow: true,
})
export class VtmnButton {
  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
