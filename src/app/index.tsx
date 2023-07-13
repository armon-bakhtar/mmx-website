import { poppins, subjetivity } from '@/shared/constants/fonts';
import { AppProps } from 'next/app';
import { ModalProvider } from 'react-modal-hook';

export function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${subjetivity.variable}`}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </main>
  );
}
