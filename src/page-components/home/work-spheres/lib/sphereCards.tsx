import { FunctionComponent, SVGProps } from 'react';
import { Dollar, Healthcare, Loan } from '@/shared/icons';
import shielt from 'public/json/shielt.json';
import graph from 'public/json/graph.json';
import coin from 'public/json/coin.json';

interface SpheresProps {
  name: string;
  text: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  animation?: any;
}

export const sphereCards: SpheresProps[] = [
  {
    name: 'Health insurance',
    text: 'Low cost health insurance for Americans in need.',
    icon: Healthcare,
    animation: shielt,
  },
  {
    name: 'Medicare',
    text: 'Federal health insurane for seniors asnd disabled adults.',
  },
  {
    name: 'Tax Debt',
    text: 'Back tax negotitation to pay less than owed.',
    icon: Dollar,
    animation: coin,
  },
  {
    name: 'Debt Settlement',
    text: 'Debt negotitaion to settle outstanding balances for less than owed.',
  },
  {
    name: 'Personal Loan',
    text: 'Borrowed money without a bank or credit card.',
    icon: Loan,
    animation: graph,
  },
  {
    name: 'Auto Insurance',
    text: 'Protects you against financial loss in the event of an accident or theft.',
  },
];
