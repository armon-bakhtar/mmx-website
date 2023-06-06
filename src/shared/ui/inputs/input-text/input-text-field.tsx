import { getInputStatus } from '@/shared/libs/fields/get-input-status';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { BaseProps } from '../base/Base';

import { InputText } from './input-text';

type Props<T extends FieldValues> = UseControllerProps<T> & BaseProps;

export const InputTextField = <T extends FieldValues>({
  control,
  name,
  ...props
}: Props<T>) => {
  const {
    field,
    fieldState: { isTouched, error },
  } = useController<T>({
    control,
    name,
  });

  const status = getInputStatus(isTouched, error);

  return (
    <InputText
      {...props}
      {...field}
      status={status}
      statusText={isTouched ? error?.message : ``}
    />
  );
};
