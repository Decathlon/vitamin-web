import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-progressbar',
  styleUrl: 'vtmn-progressbar.pcss',
})
export class VtmnProgressbar implements ComponentInterface {
  /**
   * The variant of the progressbar.
   * @type {string}
   * @default 'default'
   */
  @Prop() variant: 'default' | 'linear' | 'circular' = 'default';

  /**
   * The label of the linear progressbar.
   * @type {string}
   * @default 'Loading'
   */
  @Prop({ attribute: 'labeltext' }) labelText: string = 'Loading';

  /**
   * The size of the progressbar.
   * @type {string}
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * The minimum value of the progressbar.
   * @type {number}
   * @default 0
   */
  @Prop({ attribute: 'minvalue' }) minValue: number = 0;

  /**
   * The maximum value of the progressbar.
   * @type {number}
   * @default 100
   */
  @Prop({ attribute: 'maxvalue' }) maxValue: number = 100;

  /**
   * The current value of the progressbar.
   * @type {number}
   * @default 50
   */
  @Prop({ attribute: 'currentvalue' }) currentValue: number = 50;

  /**
   * The size of the progressbar.
   * @type {boolean}
   * @default 'false'
   */
  @Prop() indeterminate: boolean = false;

  render() {
    return (
      <div
        class="vtmn-progressbar_container"
        role="progressbar"
        aria-label="progress bar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="60"
      >
        <span class="vtmn-progressbar_label" data-value="60">
          Loading
        </span>
        <svg>
          <line
            class="vtmn-progressbar_indicator"
            x1="0"
            x2="60%"
            y1="50%"
            y2="50%"
          />
        </svg>
      </div>
    );
  }
}
