import useShowRequestSent from '@/features/home/request-sent/lib/use-show-request-sent';
import { InputStatus } from '@/shared/types/common';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { ButtonSecondary } from '@/shared/ui/buttons/button-secondary';
import { TextButtonPrimary } from '@/shared/ui/buttons/text-button-primary';
import { TextButtonSecondary } from '@/shared/ui/buttons/text-button-secondary';
import { InputSize } from '@/shared/ui/inputs/base/Base';
import { InputPhone } from '@/shared/ui/inputs/input-phone/input-phone';
import { InputText } from '@/shared/ui/inputs/input-text';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Layout } from '@/widgets/layout';

import React, { useState } from 'react';

const Test = () => {
  const [phone, setPhone] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const { showRequestSent } = useShowRequestSent();

  return (
    <div
      style={{
        paddingLeft: '100px',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        backgroundColor: '#222222',
        color: '#fff',
        gap: '100px',
      }}
    >
      <Header />

      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '50%',
          gap: '10px',
        }}
      >
        <h2>Primary</h2>
        <ButtonPrimary onClick={showRequestSent}>LET’S TALK</ButtonPrimary>
        <ButtonPrimary isLoading={true}> LET’S TALK</ButtonPrimary>
        <ButtonPrimary disabled> LET’S TALK</ButtonPrimary>
        <h2>Secondary</h2>
        <ButtonSecondary> LET’S TALK</ButtonSecondary>
        <ButtonSecondary isLoading={true}> LET’S TALK</ButtonSecondary>
        <ButtonSecondary disabled> LET’S TALK</ButtonSecondary>
        <h2>Text button primary</h2>
        <TextButtonPrimary>LET’S TALK</TextButtonPrimary>
        <TextButtonPrimary isLoading={true}> LET’S TALK</TextButtonPrimary>
        <TextButtonPrimary disabled> LET’S TALK</TextButtonPrimary>
        <h2>Text button secondary</h2>
        <TextButtonSecondary>LET’S TALK</TextButtonSecondary>
        <TextButtonSecondary isLoading={true}> LET’S TALK</TextButtonSecondary>
        <TextButtonSecondary disabled> LET’S TALK</TextButtonSecondary>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '50%',
          gap: '10px',
        }}
      >
        <h2>Input Text</h2>
        <InputText placeholder="Name" />
        <InputText placeholder="Name" isLoading={true} />
        <InputText placeholder="Name" disabled />
        <InputText
          placeholder="Name"
          statusText="Invalid email."
          status={InputStatus.ERROR}
        />
        <InputPhone value={phone} onChange={setPhone} />

        <h2>Input mobile</h2>
        <InputText placeholder="Name" sizeVariant={InputSize.Small} />
        <InputText
          placeholder="Name"
          isLoading={true}
          sizeVariant={InputSize.Small}
        />
        <InputText placeholder="Name" disabled sizeVariant={InputSize.Small} />
        <InputPhone
          value={phoneNumber}
          onChange={phoneNumber}
          sizeVariant={InputSize.Small}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Test;
