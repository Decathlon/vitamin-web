import { VtmnDropdown, VtmnDropdownItem } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';

export default {
  title: 'Components / Actions / VtmnDropdown',
  component: VtmnDropdown,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnDropdown, VtmnDropdownItem },
  setup() {
    return { args };
  },
  template: `
      <VtmnDropdown v-bind="args">
        <VtmnDropdownItem
          id="dropdown-0-opt-1"
          name="dropdown-0"
          value="item 1"
        >
          Dropdown Item 1
        </VtmnDropdownItem>
        <VtmnDropdownItem
          id="dropdown-0-opt-2"
          name="dropdown-0"
          value="item 2"
          icon="user-line"
        >
          Dropdown Item 2
        </VtmnDropdownItem>
        <VtmnDropdownItem
          id="dropdown-0-opt-3"
          name="dropdown-0"
          value="item 3"
          divider="true"
        >
          Dropdown Item 3
          <template v-slot:endText>End Text</template>
        </VtmnDropdownItem>
        <VtmnDropdownItem
          id="dropdown-0-opt-4"
          name="dropdown-0"
          value="item 4"
        >
          Dropdown Item 4
        </VtmnDropdownItem>
      </VtmnDropdown>
    `,
});

export const Overview = Template.bind({});
Overview.args = {};
