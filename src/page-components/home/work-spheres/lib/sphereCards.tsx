import React, { FunctionComponent, SVGProps } from 'react';
import { Dollar, Healthcare, Loan } from '@/shared/icons';

interface SpheresProps {
  name: string;
  text: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const sphereCards: SpheresProps[] = [
  {
    name: 'Health insurance',
    text: 'Low cost health insurance for Americans in need.',
    icon: Healthcare,
  },
  {
    name: 'Medicare',
    text: 'Federal health insurane for seniors asnd disabled adults.',
  },
  {
    name: 'Tax Debt',
    text: 'Back tax negotitation to pay less than owed.',
    icon: Dollar,
  },
  {
    name: 'Debt Settlement',
    text: 'Debt negotitaion to settle outstanding balances for less than owed.',
  },
  {
    name: 'Personal Loan',
    text: 'Borrowed money without a bank or credit card.',
    icon: Loan,
  },
  {
    name: 'Auto Insurance',
    text: 'Protects you against financial loss in the event of an accident or theft.',
  },
];
