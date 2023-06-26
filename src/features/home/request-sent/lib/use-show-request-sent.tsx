import React from 'react';
import { useModal } from 'react-modal-hook';
import { ModalDefault } from '@/shared/ui/modals/modal-default';
import RequestSent from '../ui/request-sent';

const useShowRequestSent = () => {
  const [showRequestSent, hideRequestSent] = useModal(() => (
    <ModalDefault onClose={hideRequestSent}>
      <RequestSent handleClose={hideRequestSent} />
    </ModalDefault>
  ));
  return { showRequestSent, hideRequestSent };
};

export default useShowRequestSent;
