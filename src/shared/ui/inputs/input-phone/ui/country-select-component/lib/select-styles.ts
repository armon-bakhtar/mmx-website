import { StylesConfig } from 'react-select';
import { OptionType } from '../country-select-component';

export const selectStyles: StylesConfig<OptionType, false> = {
  container: () => ({
    border: '1px solid var(--greyscale-5)',
    borderRadius: '16px',
    padding: '16px 24px',
    background: 'var(--greyscale-5)',
  }),

  control: () => ({
    border: '1px solid var(--greyscale-10)',
    borderRadius: '16px',
    padding: '13px 16px',
    height: '46px',
    color: 'var(--greyscale-10)',
    width: '295px',
  }),
  valueContainer: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),

  menu: () => ({}),
  menuList: (base) => ({
    ...base,
    padding: '8px 0 0',
  }),
  option: (base, { isFocused }) => ({
    ...base,
    padding: '12px 16px',
    backgroundColor: isFocused ? 'var(--greyscale-4)' : base.backgroundColor,
    '&:hover': {
      backgroundColor: 'var(--greyscale-4)',
    },
  }),
};
