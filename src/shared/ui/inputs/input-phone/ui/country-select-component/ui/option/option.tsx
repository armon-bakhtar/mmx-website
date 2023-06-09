import { CountryCode } from '@/shared/types/phone';
import flags from 'react-phone-number-input/flags';
import { components, GroupBase, OptionProps } from 'react-select';
import { OptionType } from '../../country-select-component';

import { useClasses } from './lib/use-classes';

export const Option = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  className,
  children,
  ...props
}: OptionProps<Option, IsMulti, Group>) => {
  const { cnRoot, cnFlag } = useClasses({ className });

  const Flag = flags[(props.data as OptionType<CountryCode>).value];

  return (
    <components.Option className={cnRoot} {...props}>
      <div className={cnFlag}>{Flag && <Flag title="" />}</div>
      {children}
    </components.Option>
  );
};
