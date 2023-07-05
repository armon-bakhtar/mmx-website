import { Preloader } from '@/widgets/preloader';
import { AppProps } from 'next/app';
import { ModalProvider } from 'react-modal-hook';

export function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Preloader />
      <Component {...pageProps} />
    </ModalProvider>
  );
}
