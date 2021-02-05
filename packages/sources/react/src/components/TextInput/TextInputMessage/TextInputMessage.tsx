import * as React from 'react';

export interface TextInputMessageProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * The helper message to display on the bottom of `input` element.
   * @default empty
   **/
  helperText?: string;
  /**
   * If this boolean is true it will show to user that the given content is correct.
   * @default false
   **/
  isError?: boolean;
}

export const TextInputMessage: React.FC<TextInputMessageProps> = ({
  helperText = '',
  isError = false,
}) => {
  if (isError) {
    return <p className="vtmn-txt-input_p-invalid">{helperText}</p>;
  } else {
    return <p className="vtmn-txt-input_p">{helperText}</p>;
  }
};

export default React.memo(TextInputMessage);
