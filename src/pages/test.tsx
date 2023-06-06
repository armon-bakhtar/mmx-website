import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { ButtonSecondary } from '@/shared/ui/buttons/button-secondary';
import { TextButtonPrimary } from '@/shared/ui/buttons/text-button-primary';
import { TextButtonSecondary } from '@/shared/ui/buttons/text-button-secondary';
import React from 'react';

const test = () => {
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
        flexDirection: 'column',
        color: '#fff',
        gap: '10px',
      }}
    >
      <h2>Primary</h2>
      <ButtonPrimary>LET’S TALK</ButtonPrimary>
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
  );
};

export default test;
