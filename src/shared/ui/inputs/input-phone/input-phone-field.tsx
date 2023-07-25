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
    fieldState: { error },
  } = useController<T>({
    control,
    name,
  });

  const status = getInputStatus(error);
  const statusText = error?.message;

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
