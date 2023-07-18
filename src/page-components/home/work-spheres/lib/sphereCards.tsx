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
    name: 'Health Insurance',
    text: 'High-quality inbound calls for health insurance coverage.',
    icon: Healthcare,
    animation: shielt,
  },
  {
    name: 'Medicare',
    text: 'Get the most out of your medicare leads.',
  },
  {
    name: 'Tax Debt',
    text: 'Assist individuals and businesses in need of tax relief solutions.',
    icon: Dollar,
    animation: coin,
  },
  {
    name: 'Debt Settlement',
    text: 'People in debt are searching for you.',
  },
  {
    name: 'Personal Loan',
    text: 'Become a financial assistance frontrunner.',
    icon: Loan,
    animation: graph,
  },
  {
    name: 'Auto Insurance',
    text: 'Shift gears to drive more sales and acquire new customers.',
  },
];
