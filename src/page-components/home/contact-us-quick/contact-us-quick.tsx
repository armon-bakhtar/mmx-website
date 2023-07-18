import React, { FC, useRef } from 'react';
import { CommonTypes, ContactUsQuickRequest } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { Coin, Etherium, GraphCirle } from '@/shared/icons';
import { InputTextField } from '@/shared/ui/inputs/input-text';
import { InputPhoneField } from '@/shared/ui/inputs/input-phone/input-phone-field';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputSize } from '@/shared/ui/inputs/base/Base';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { motion, useScroll, useTransform } from 'framer-motion';
import axios from 'axios';
import useShowRequestSent from '@/features/home/request-sent/lib/use-show-request-sent';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactUsQuickSchema } from './lib/contact-us-quick-scheme';
import { API_URL } from '@/shared/constants/api-url';

export type ContactUsQuickProps = CommonTypes;

const ContactUsQuick: FC<ContactUsQuickProps> = ({ className }) => {
  const {
    cnRoot,
    cnContainer,
    cnFormWrapper,
    cnTitle,
    cnText,
    cnForm,
    cnIcon,
    cnButton,
    cnPhoneInput,
  } = useClasses({ className });
  const { showRequestSent } = useShowRequestSent();
  const { getIsBreakpoint } = useClientSize();
  const isLaptop = getIsBreakpoint('$laptop');
  const isTablet = getIsBreakpoint('$tablet');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isTablet
      ? ['-200% start', '-50% start']
      : ['-100% start', 'start start'],
  });

  const iconY = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const etheriumY = useTransform(
    scrollYProgress,
    [0, 1],
    [isLaptop ? '-300px' : '-200px', '20px'],
  );

  const inputsSize = isTablet ? InputSize.Normal : InputSize.Small;

  const defaultValues = {
    name: '',
    phoneNumber: '',
  };

  const { control, handleSubmit, reset, setError } = useForm({
    defaultValues,
    resolver: yupResolver(ContactUsQuickSchema),
  });

  const onSubmit: SubmitHandler<ContactUsQuickRequest> = async (data) => {
    try {
      await axios.post(
        `${API_URL.googleSheetQuick(data.name, data.phoneNumber)}`,
      );
      showRequestSent();
      reset();
    } catch (error: any) {
      setError(`phoneNumber`, { type: `value`, message: error?.message });
    }
  };

  return (
    <motion.section className={cnRoot} ref={ref}>
      <Container className={cnContainer}>
        <div className={cnFormWrapper}>
          <h2 className={cnTitle}>
            Choose Momentum Max&nbsp;
            {isTablet && <br />}
            as your&nbsp;
            {!isTablet && <br />}
            <span>Pay Per Call partner</span>
          </h2>
          <p className={cnText}>
            Together, we’ll take your business to new heights through effective
            and results-driven Pay Per Call advertising.
          </p>
          <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
            <InputTextField
              style={{ height: isTablet ? '48px' : '' }}
              control={control}
              placeholder="Name"
              name="name"
              sizeVariant={inputsSize}
            />
            <InputPhoneField
              className={cnPhoneInput}
              style={{ height: isTablet ? '48px' : '' }}
              control={control}
              name="phoneNumber"
              placeholder="+ 1 900 000 00 00 "
              sizeVariant={inputsSize}
            />

            <ButtonPrimary type="submit" className={cnButton}>
              Send it
            </ButtonPrimary>
          </form>
          <div>
            <motion.div className={cnIcon} style={{ y: iconY }}>
              <GraphCirle />
            </motion.div>
            <motion.div className={cnIcon} style={{ y: iconY }}>
              <Coin />
            </motion.div>
            <motion.div className={cnIcon} style={{ y: etheriumY }}>
              <Etherium />
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default ContactUsQuick;
