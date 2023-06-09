import { getInputStatus } from '@/shared/libs/fields/get-input-status';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { InputPhone, InputPhoneProps } from './input-phone';

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputPhoneProps, 'value' | 'onChange'>;

export const InputPhoneField = <T extends FieldValues>({
  control,
  name,
  ...props
}: Props<T>) => {
  const {
    field: { onChange, ...field },
    fieldState: { isTouched, error },
  } = useController<T>({
    control,
    name,
  });

  const status = getInputStatus(isTouched, error);
  const statusText = isTouched ? error?.message : '';

  return (
    <InputPhone
      {...props}
      {...field}
      onChange={(value) => onChange(value ?? '')}
      status={status}
      statusText={statusText}
    />
  );
};
