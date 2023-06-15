import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import {
  Bulb,
  Clock,
  Coin,
  Etherium,
  GraphCirle,
  GrowSales,
  Notebook,
} from '@/shared/icons';
import { InputText, InputTextField } from '@/shared/ui/inputs/input-text';
import { InputPhoneField } from '@/shared/ui/inputs/input-phone/input-phone-field';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { useForm } from 'react-hook-form';
import { InputSize } from '@/shared/ui/inputs/base/Base';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { Breakpoints } from '@/shared/assets/styles/mixins/breakpoints';

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
  const { width } = useClientSize();
  const isLargerThanTablet = width && width >= Breakpoints.$tablet;

  const inputsSize = isLargerThanTablet ? InputSize.Normal : InputSize.Small;

  const defaultValues = {
    name: '',
    phoneNumber: '',
  };

  const { control } = useForm({ defaultValues });

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <div className={cnFormWrapper}>
          <h2 className={cnTitle}>
            Increase{!isLargerThanTablet && <br />}
            the volume <br />
            <span>of successful transactions</span>
          </h2>
          <p className={cnText}>
            Leave your contact details, we will call you back and discuss your
            tasks
          </p>
          <form className={cnForm}>
            <InputTextField
              style={{ height: isLargerThanTablet ? '48px' : '44px' }}
              control={control}
              name="name"
              sizeVariant={inputsSize}
            />
            <InputPhoneField
              style={{ height: isLargerThanTablet ? '48px' : '44px' }}
              control={control}
              name="phoneNumber"
              sizeVariant={inputsSize}
            />

            <ButtonPrimary type="submit" className={cnButton}>
              Send it
            </ButtonPrimary>
          </form>
          <div>
            <GraphCirle className={cnIcon} />
            <Coin className={cnIcon} />
            <Etherium className={cnIcon} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsQuick;
