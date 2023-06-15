import { E164Number } from 'libphonenumber-js/types';
import { forwardRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Base, BaseProps } from '../base/Base';

import { useClasses } from './lib/use-classes';
import { CountrySelectComponent } from './ui/country-select-component/country-select-component';

export type InputPhoneProps = Omit<BaseProps, 'value' | 'onChange'> & {
  value: E164Number | string;
  onChange: (value: E164Number | string) => void;
};

export const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>(
  ({ className, ...props }, ref) => {
    const { cnRoot, cnField } = useClasses({ className });

    return (
      <PhoneInput
        className={cnRoot}
        inputComponent={Base}
        numberInputProps={
          {
            className: cnField,
            halfRadius: 'right',
            style: props.style,
          } as BaseProps
        }
        // countrySelectComponent={CountrySelectComponent}
        withCountryCallingCode
        defaultCountry="US"
        international
        ref={ref as any}
        {...props}
      />
    );
  },
);
InputPhone.displayName = 'InputPhone';
