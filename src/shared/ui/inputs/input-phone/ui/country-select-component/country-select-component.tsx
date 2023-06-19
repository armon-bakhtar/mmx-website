import { useClientSize } from '@/shared/hooks/use-client-size';
import { useOnClickOutside } from '@/shared/hooks/use-onclick-outside';
import { usePositionAreas } from '@/shared/hooks/use-position-areas';
import { useToggle } from '@/shared/hooks/use-toggle';
import { CommonTypes, Maybe } from '@/shared/types/common';
import { CountryCode } from '@/shared/types/phone';
import { FC, useMemo, useRef } from 'react';
import { getCountryCallingCode } from 'react-phone-number-input';
import Select from 'react-select';
import { selectStyles } from './lib/select-styles';
import { useClasses } from './lib/use-classes';
import { Option } from './ui/option/option';

export interface OptionType<T = string> {
  label: string;
  value: T;
}
// TODO: add correct react-select types on component
export interface CountrySelectComponentProps
  extends CommonTypes,
    Record<string, any> {
  options: OptionType<CountryCode>[];
}

export const ADDITIONAL_HEIGHTS = {
  header: 72,
  footer: 88,
};

export const CountrySelectComponent: FC<CountrySelectComponentProps> = ({
  className,
  placeholder = 'Country selection',
  backspaceRemovesValue = false,
  controlShouldRenderValue = false,
  hideSelectedOptions = false,
  isClearable = false,
  tabSelectsValue = false,
  menuIsOpen = true,
  options,
  onChange,
  ...props
}) => {
  const { isActive, toggle, close } = useToggle();

  const rootRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(rootRef, close);

  const { getIsBreakpoint } = useClientSize();
  const isTabletMax = getIsBreakpoint('$tablet', 'max');

  const { staticRef, relocatableRef, hasTopArea, hasBottomArea } =
    usePositionAreas<HTMLButtonElement>({
      extraTopHeight: ADDITIONAL_HEIGHTS.header,
      extraBottomHeight: isTabletMax ? ADDITIONAL_HEIGHTS.footer : 0,
    });

  const { cnRoot, cnButton, cnBox } = useClasses({
    className,
    isActive,
    isTop: hasTopArea,
    isBottom: hasBottomArea,
  });

  const reformedOptions = useMemo(
    () =>
      options?.map(({ label, value }: OptionType<CountryCode>) => {
        const labelWithCode = value
          ? `(+${value && getCountryCallingCode(value)}) ${label}`
          : label;
        return { label: labelWithCode, value };
      }),
    [],
  );

  const handleOnChange = (option: Maybe<OptionType>): void => {
    onChange(option?.value);
    close();
  };

  return (
    <div className={cnRoot} ref={rootRef}>
      <button
        className={cnButton}
        onClick={toggle}
        type="button"
        ref={staticRef}
      >
        {/* <UnitedStatesOfAmerica color="currentColor" /> */}
      </button>

      <div className={cnBox} ref={relocatableRef}>
        {isActive && (
          <Select
            options={reformedOptions}
            placeholder={placeholder}
            components={{ DropdownIndicator: null, Option }}
            backspaceRemovesValue={backspaceRemovesValue}
            controlShouldRenderValue={controlShouldRenderValue}
            hideSelectedOptions={hideSelectedOptions}
            isClearable={isClearable}
            tabSelectsValue={tabSelectsValue}
            menuIsOpen={menuIsOpen}
            onChange={handleOnChange}
            styles={selectStyles}
            unstyled
            {...props}
          />
        )}
      </div>
    </div>
  );
};
