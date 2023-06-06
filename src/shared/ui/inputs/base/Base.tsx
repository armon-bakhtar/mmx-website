import { COLORS } from '@/shared/assets/styles/base/colors';
import {
  CommonTypes,
  InputStatus,
  TypeWithoutClassName,
} from '@/shared/types/common';
import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { Spinner } from '../../spinner';

import { useClasses } from './lib/use-classes';

export interface BaseProps
  extends TypeWithoutClassName<InputHTMLAttributes<HTMLInputElement>>,
    CommonTypes {
  label?: string;
  contentLeft?: ReactNode;
  status?: InputStatus;
  statusText?: string;
  isLoading?: boolean;
  isRequired?: boolean;
}

export const Base = forwardRef<HTMLInputElement, BaseProps>(
  (
    {
      className,
      id,
      label,
      contentLeft,
      type = `text`,
      disabled = false,
      status,
      statusText,
      isLoading,
      isRequired,
      ...props
    },
    ref,
  ) => {
    const ownId = useId();
    const inputId = id || ownId;

    const isError = status === InputStatus.ERROR;
    const isSuccess = status === InputStatus.SUCCESS;

    const hasStatusText = Boolean(statusText);

    const {
      cnRoot,
      cnLabel,
      cnRequired,
      cnOuter,
      cnContentLeft,
      cnField,
      cnContentRight,
      cnStatusText,
    } = useClasses({
      className,
      disabled,
      isError,
      isSuccess,
      contentLeft,
      isLoading,
    });

    return (
      <div className={cnRoot}>
        {label && (
          <p className={cnLabel}>
            {label}
            {isRequired && <span className={cnRequired}> *</span>}
          </p>
        )}

        <div className={cnOuter}>
          {contentLeft && <div className={cnContentLeft}>{contentLeft}</div>}

          <input
            className={cnField}
            id={inputId}
            type={type}
            disabled={disabled || isLoading}
            {...props}
            ref={ref}
          />

          {isLoading && (
            <div className={cnContentRight}>
              <Spinner
                circleColor={COLORS.greyscale9}
                strokeColor={COLORS.greyscale10}
              />
            </div>
          )}
        </div>

        {hasStatusText && <p className={cnStatusText}>{statusText}</p>}
      </div>
    );
  },
);
Base.displayName = `Input`;
