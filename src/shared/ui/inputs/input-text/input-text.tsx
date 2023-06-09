import { forwardRef } from 'react';
import { Base, BaseProps } from '../base/Base';

export const InputText = forwardRef<HTMLInputElement, BaseProps>(
  (props, ref) => {
    return <Base {...props} ref={ref} />;
  },
);
InputText.displayName = `InputText`;
