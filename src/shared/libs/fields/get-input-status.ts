import { InputStatus } from '@/shared/types/common';

export const getInputStatus = (isTouched: boolean, error: any) => {
  const isError = !!error;

  if (!isTouched && !isError) {
    return;
  }

  if (isTouched && isError) {
    return InputStatus.ERROR;
  }

  if (isTouched && !isError) {
    return InputStatus.SUCCESS;
  }
};
