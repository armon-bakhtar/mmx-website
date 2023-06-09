import classNames from 'classnames/bind';

import { CountrySelectComponentProps } from '../country-select-component';
import classes from '../country-select-component.module.scss';

type Props = Pick<CountrySelectComponentProps, 'className'> & {
  isActive: boolean;
  isTop: boolean;
  isBottom: boolean;
};

const cn = classNames.bind(classes);

export const useClasses = ({ className, isActive, isTop, isBottom }: Props) => {
  const hasBottomArea = (isTop && isBottom) || (!isTop && isBottom);
  const verticalAreaClass = hasBottomArea ? 'bottom' : 'top';

  const cnRoot = cn(
    'country-select-component',
    'PhoneInputDropdown',
    className,
  );

  const cnButton = cn('country-select-component__button');

  const cnBox = cn(
    'country-select-component__box',
    {
      'country-select-component__box--visible': isActive,
    },
    verticalAreaClass,
  );

  return {
    cnRoot,
    cnButton,
    cnBox,
  };
};
