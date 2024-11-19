import { E164Number } from 'libphonenumber-js/types';
import { forwardRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Base, BaseProps } from '../base/Base';
import SvgGlobeIcon from '@/shared/icons/Globe';
import { useClasses } from './lib/use-classes';

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
        // defaultCountry="US"
        international
        internationalIcon={SvgGlobeIcon}
        ref={ref as any}
        {...props}
      />
    );
  },
);
InputPhone.displayName = 'InputPhone';
