import React, { FC, useRef } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { Coin, Etherium, GraphCirle } from '@/shared/icons';
import { InputText, InputTextField } from '@/shared/ui/inputs/input-text';
import { InputPhoneField } from '@/shared/ui/inputs/input-phone/input-phone-field';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { useForm } from 'react-hook-form';
import { InputSize } from '@/shared/ui/inputs/base/Base';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { Breakpoints } from '@/shared/assets/styles/mixins/breakpoints';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  } = useClasses({ className });
  const { width, getIsBreakpoint } = useClientSize();
  const isLaptop = getIsBreakpoint('$laptop');
  const isTablet = getIsBreakpoint('$tablet');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isTablet
      ? ['-200% start', '-50% start']
      : ['-100% start', '-10% start'],
  });

  const iconY = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const etheriumY = useTransform(
    scrollYProgress,
    [0, 1],
    [isTablet ? '-300px' : '-900px', '0%'],
  );

  const inputsSize = isTablet ? InputSize.Normal : InputSize.Small;

  const defaultValues = {
    name: '',
    phoneNumber: '',
  };

  const { control } = useForm({ defaultValues });

  return (
    <motion.section className={cnRoot} ref={ref}>
      <Container className={cnContainer}>
        <div className={cnFormWrapper}>
          <h2 className={cnTitle}>
            Increase{!isTablet && <br />}
            the volume <br />
            <span>of successful transactions</span>
          </h2>
          <p className={cnText}>
            Leave your contact details, we will call you back and discuss your
            tasks
          </p>
          <form className={cnForm}>
            <InputTextField
              style={{ height: isTablet ? '48px' : '44px' }}
              control={control}
              placeholder="Name"
              name="name"
              sizeVariant={inputsSize}
            />
            <InputPhoneField
              style={{ height: isTablet ? '48px' : '44px' }}
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
