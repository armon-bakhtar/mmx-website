import { OkCircle } from '@/shared/icons';
import { CommonTypes } from '@/shared/types/common';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import React, { FC } from 'react';
import { useClasses } from './lib/use-classes';

export interface RequestSentProps extends CommonTypes {
  handleClose: () => void;
}

const RequestSent: FC<RequestSentProps> = ({ className, handleClose }) => {
  const { cnRoot, cnIcon, cnTitle, cnText, cnButton } = useClasses({
    className,
  });
  return (
    <div className={cnRoot}>
      <OkCircle className={cnIcon} />
      <h3 className={cnTitle}>Thank you!</h3>
      <p className={cnText}>
        We have received your application and will contact you soon!
      </p>
      <ButtonPrimary className={cnButton} onClick={handleClose}>
        Ok
      </ButtonPrimary>
    </div>
  );
};

export default RequestSent;
