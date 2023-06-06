import classNames from 'classnames/bind';
import { BaseProps } from '../Base';

import classes from '../base.module.scss';

type PickedBaseProps = Pick<
  BaseProps,
  'className' | 'disabled' | 'contentLeft' | 'isLoading'
>;

interface Props extends PickedBaseProps {
  isError: boolean;
  isSuccess: boolean;
}

const cn = classNames.bind(classes);

export const useClasses = ({
  className,
  disabled,
  isError,
  isSuccess,
  contentLeft,
  isLoading,
}: Props) => {
  const hasContentLeft = Boolean(contentLeft);

  const cnRoot = cn(`input`, className);

  const cnLabel = cn(`input__label`, {
    'input__label--disabled': disabled,
  });

  const cnRequired = cn(`input__required`);

  const cnOuter = cn(`input__outer`, {
    [`input__outer--disabled`]: disabled,
  });

  const cnContentLeft = cn(`input-content-left`, {
    [`input-content-left--disabled`]: disabled,
  });

  const cnField = cn(`input__field`, {
    'input__field--error': isError,
    'input__field--success': isSuccess,
    'input__field--content-left': hasContentLeft,
    loading: isLoading,
  });

  const cnContentRight = cn(`input-content-right`, {
    [`input-content-right--disabled`]: disabled,
  });

  const cnStatusText = cn(`input__status-text`, {
    'input__status-text--error': isError,
    'input__status-text--success': isSuccess,
  });

  return {
    cnRoot,
    cnRequired,
    cnLabel,
    cnOuter,
    cnContentLeft,
    cnField,
    cnContentRight,
    cnStatusText,
  };
};
