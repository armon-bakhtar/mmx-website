import { InputStatus } from '@/shared/types/common';

export const getInputStatus = (error: any) => {
  const isError = !!error;

  if (!isError) {
    return;
  }

  if (isError) {
    return InputStatus.ERROR;
  }

  if (!isError) {
    return InputStatus.SUCCESS;
  }
};
