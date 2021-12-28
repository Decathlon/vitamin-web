import { VtmnDivider } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnDivider.csf';

export default {
  title: 'Components/VtmnDivider',
  component: VtmnDivider,
  parameters,
} as Meta;

/**
 * Overview Template
 */

const OverviewTemplate: Story = (args) => (
  <div className="vtmn-grid vtmn-grid-cols-2 vtmn-content-center vtmn-gap-8 vtmn-text-center  vtmn-typo_text-2">
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        facilis dicta accusantium! Quidem, voluptatem placeat.
      </p>
      <VtmnDivider className="vtmn-my-4" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        facilis dicta accusantium! Quidem, voluptatem placeat.
      </p>
    </div>

    <div className="vtmn-flex">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed
        voluptatum, velit dicta iusto assumenda.
      </p>
      <VtmnDivider orientation="vertical" className="vtmn-mx-4" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed
        voluptatum, velit dicta iusto assumenda.
      </p>
    </div>

    <div>
      <p></p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      facilis dicta accusantium! Quidem, voluptatem placeat.
      <VtmnDivider className="vtmn-my-4">{args.children}</VtmnDivider>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      facilis dicta accusantium! Quidem, voluptatem placeat.
    </div>

    <div className="vtmn-flex">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed
        voluptatum, velit dicta iusto assumenda.
      </p>
      <VtmnDivider orientation="vertical" className="vtmn-mx-4">
        {args.children}
      </VtmnDivider>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed
        voluptatum, velit dicta iusto assumenda.
      </p>
    </div>
  </div>
);

export const Overview = OverviewTemplate.bind({});

Overview.args = {
  children: 'My Label',
};

/**
 * Horizontal Template
 */

const HorizontalTemplate: Story = (args) => (
  <div className="vtmn-flex vtmn-space-x-8 vtmn-text-center vtmn-items-center vtmn-typo_text-2">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <VtmnDivider className="vtmn-my-4" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>

    <div>
      <VtmnDivider className="vtmn-my-4">Default</VtmnDivider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <VtmnDivider className="vtmn-my-4" text="start">
        Start
      </VtmnDivider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <VtmnDivider className="vtmn-my-4">Center</VtmnDivider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <VtmnDivider className="vtmn-my-4" text="end">
        End
      </VtmnDivider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
);

export const Horizontal = HorizontalTemplate.bind({});

/**
 * Vertical Template
 */

const VerticalTemplate: Story = (args) => (
  <div className="vtmn-flex vtmn-flex-col vtmn-items-center vtmn-space-y-8 vtmn-text-center vtmn-typo_text-2">
    <div className="vtmn-flex vtmn-w-1/2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        adipisci? Aspernatur laboriosam ducimus sapiente incidunt?
      </p>
      <VtmnDivider className="vtmn-mx-4" orientation="vertical" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        adipisci? Aspernatur laboriosam ducimus sapiente incidunt?
      </p>
    </div>

    <div className="vtmn-flex vtmn-w-8 vtmn-justify-center">
      <VtmnDivider className="vtmn-mx-4" orientation="vertical">
        Default
      </VtmnDivider>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
        consequuntur inventore aperiam hic voluptates asperiores minima cumque
        quos ab cupiditate.
      </p>

      <VtmnDivider className="vtmn-mx-4" orientation="vertical" text="start">
        Start
      </VtmnDivider>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
        consequuntur inventore aperiam hic voluptates asperiores minima cumque
        quos ab cupiditate.
      </p>

      <VtmnDivider className="vtmn-mx-4" orientation="vertical" text="center">
        Center
      </VtmnDivider>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        officia dolorem, voluptatibus obcaecati explicabo cum doloremque dolorum
        nulla ipsa consequuntur?
      </p>

      <VtmnDivider className="vtmn-mx-4" orientation="vertical" text="end">
        End
      </VtmnDivider>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem
        architecto cum assumenda ad possimus modi harum voluptas earum in?
      </p>
    </div>
  </div>
);

export const Vertical = VerticalTemplate.bind({});
