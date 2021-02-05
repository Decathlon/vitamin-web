import React from 'react';
import fc from 'fast-check';
import { shallow } from 'enzyme';
import { TextInputMessage } from './TextInputMessage';
import { expectWrapperToContain } from '../../../../tests/utils';
import { nonEmptyString } from '../../../../tests/arbitrary';

const helperMessage = (message: string): JSX.Element => (
  <p className="vtmn-txt-input_p">{message}</p>
);
const helperErrorMessage = (message: string): JSX.Element => (
  <p className="vtmn-txt-input_p-invalid">{message}</p>
);

describe('TextInputMessage rendering', () => {
  it('should render an empty TextInputMessage passing nothing', () => {
    const input = <TextInputMessage />;
    expect(shallow(input).contains(helperMessage(''))).toBeTruthy();
    expect(shallow(input).find('.vtmn-txt-input_p-invalid')).toHaveLength(0);
  });
  it('should render a TextInputMessage with the provided helperText', () => {
    fc.assert(
      fc.property(nonEmptyString, (message) => {
        const input = <TextInputMessage helperText={message} />;
        expect(shallow(input).contains(helperMessage(message))).toBeTruthy();
        expect(shallow(input).find('.vtmn-txt-input_p-invalid')).toHaveLength(
          0,
        );
      }),
    );
  });
});
