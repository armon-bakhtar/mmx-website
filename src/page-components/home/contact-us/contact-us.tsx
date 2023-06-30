import React, { FC, useRef } from 'react';
import { CommonTypes, ContactUsRequest } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { InputTextField } from '@/shared/ui/inputs/input-text';
import { InputPhoneField } from '@/shared/ui/inputs/input-phone/input-phone-field';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputSize } from '@/shared/ui/inputs/base/Base';
import { useClientSize } from '@/shared/hooks/use-client-size';
import Link from 'next/link';
import EtheriumGreen from '@/shared/icons/EtheriumGreen';
import CoinViolet from '@/shared/icons/CoinViolet';
import { motion, useScroll, useTransform } from 'framer-motion';
import axios from 'axios';
import useShowRequestSent from '@/features/home/request-sent/lib/use-show-request-sent';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactUsSchema } from './lib/contact-us-scheme';
import { API_URL } from '@/shared/constants/api-url';

export type ContactUsProps = CommonTypes;

const ContactUs: FC<ContactUsProps> = ({ className }) => {
  const {
    cnRoot,
    cnContainer,
    cnFormWrapper,
    cnTextWrapper,
    cnTitle,
    cnContacts,
    cnAdress,
    cnForm,
    cnText,
    cnInput,
    cnButton,
    cnAlert,
    cnIconWrapper,
    cnIcon,
    cnBlur,
  } = useClasses({ className });
  const { getIsBreakpoint } = useClientSize();
  const isTablet = getIsBreakpoint('$tablet');
  const { showRequestSent } = useShowRequestSent();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isTablet ? ['-100% start', '150% end'] : ['-60% start', '100% end'],
  });

  const etheriumY = useTransform(scrollYProgress, [0, 1], ['-200px', '0%']);
  const coinY = useTransform(
    scrollYProgress,
    [0, 1],
    [isTablet ? '-150px' : '-200px', '10px'],
  );

  const inputsSize = isTablet ? InputSize.Normal : InputSize.Small;

  const defaultValues: ContactUsRequest = {
    name: '',
    phoneNumber: '',
    email: '',
    business: '',
  };

  const { control, handleSubmit, reset, setError } = useForm({
    defaultValues,
    mode: 'all',
    resolver: yupResolver(ContactUsSchema),
  });

  const onSubmit: SubmitHandler<ContactUsRequest> = async (data) => {
    try {
      await axios.post(
        API_URL.googleSheetMain(
          data.name,
          data.phoneNumber,
          data.email,
          data.business,
        ),
      );
      showRequestSent();
      reset();
    } catch (error: any) {
      setError(`business`, { type: `value`, message: error?.message });
    }
  };

  return (
    <motion.section className={cnRoot} ref={ref} id="contact">
      <Container className={cnContainer}>
        <div className={cnFormWrapper}>
          <div className={cnTextWrapper}>
            <h2 className={cnTitle}>Have no time to waste?</h2>
            <p className={cnContacts}>
              <span>+44 7551 450 400</span> <br />
              <span>hello@momentummax.us</span>
            </p>
            <p className={cnAdress}>
              New-York, 12 Scott Bainbridge <br />
              NY 13733-1034 USA
            </p>
          </div>
          <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
            <p className={cnText}>
              Leave your details, we will call you back and discuss your tasks
            </p>
            <InputTextField
              className={cnInput}
              control={control}
              name="name"
              placeholder="Name"
              sizeVariant={inputsSize}
            />
            <InputPhoneField
              className={cnInput}
              control={control}
              placeholder="+ 1 900 000 00 00 "
              name="phoneNumber"
              sizeVariant={inputsSize}
            />
            <InputTextField
              className={cnInput}
              control={control}
              name="email"
              placeholder="Email"
              sizeVariant={inputsSize}
            />
            <InputTextField
              className={cnInput}
              control={control}
              name="business"
              placeholder="Business..."
              sizeVariant={inputsSize}
            />
            <p className={cnAlert}>
              By submitting this form you are agreeing to MomentumMax’s{' '}
              <Link href="/policy">Privacy policy</Link> and{' '}
              <Link href="/Terms">Terms of use</Link>
            </p>
            <ButtonPrimary className={cnButton} type="submit">
              Send it
            </ButtonPrimary>
          </form>
          <div className={cnIconWrapper}>
            <motion.div className={cnIcon} style={{ y: etheriumY }}>
              <EtheriumGreen />
            </motion.div>
            <motion.div className={cnIcon} style={{ y: coinY }}>
              <CoinViolet />
            </motion.div>
          </div>
          <div className={cnBlur}></div>
        </div>
      </Container>
    </motion.section>
  );
};

export default ContactUs;
