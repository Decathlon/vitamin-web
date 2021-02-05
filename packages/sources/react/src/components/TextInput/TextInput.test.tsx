import React from 'react';
import fc from 'fast-check';
import { shallow, ShallowWrapper } from 'enzyme';
import { TextInput } from './TextInput';
import { nonEmptyString } from '../../../tests/arbitrary';
import {
  expectWrapperToContain,
  expectWrapperToFind,
} from '../../../tests/utils';
import { TextInputMessage } from './TextInputMessage/Index';

const expectedTextArea = (id: string, disabled?: boolean): JSX.Element => (
  <textarea id={id} disabled={disabled} />
);
const label = (id: string, label: string): JSX.Element => (
  <label htmlFor={id}>{label}</label>
);
const inputType = (id: string, disabled?: boolean): JSX.Element => (
  <input id={id} disabled={disabled} />
);

describe('TextInput rendering', () => {
  it('should render a TextInput with label and id only', () => {
    fc.assert(
      fc.property(nonEmptyString, nonEmptyString, (inputId, inputLabel) => {
        const input: JSX.Element = (
          <TextInput id={inputId} label={inputLabel} />
        );
        expectWrapperToContain(shallow(input), [
          label(inputId, inputLabel),
          inputType(inputId),
        ]);
      }),
    );
  });
  it('should render a disabled TextInput', () => {
    fc.assert(
      fc.property(nonEmptyString, nonEmptyString, (inputId, inputLabel) => {
        const input: JSX.Element = (
          <TextInput id={inputId} label={inputLabel} disabled={true} />
        );
        const expectedElements: JSX.Element[] = [
          label(inputId, inputLabel),
          inputType(inputId, true),
        ];
        expectWrapperToContain(shallow(input), expectedElements);
      }),
    );
  });
  it('should render an invalid TextInput', () => {
    fc.assert(
      fc.property(
        nonEmptyString,
        nonEmptyString,
        nonEmptyString,
        (inputId, inputLabel) => {
          const input: JSX.Element = (
            <TextInput id={inputId} label={inputLabel} isError={true} />
          );
          const expectedElements: JSX.Element[] = [
            label(inputId, inputLabel),
            inputType(inputId),
          ];
          const wrapper: ShallowWrapper = shallow(input);
          expectWrapperToFind(wrapper, [
            '.vtmn-txt-input_container',
            '.vtmn-txt-input_container-invalid',
          ]);
          expectWrapperToContain(wrapper, expectedElements);
        },
      ),
    );
  });
});
