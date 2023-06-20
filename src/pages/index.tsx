import Head from 'next/head';
import { Hero } from '@/page-components/home/hero';
import { Layout } from '@/widgets/layout';
import { WorkSpheres } from '@/page-components/home/work-spheres';
import { Features } from '@/page-components/home/features';
import { ContactUsQuick } from '@/page-components/home/contact-us-quick';
import { Reviews } from '@/page-components/home/reviews';
import { ContactUs } from '@/page-components/home/contact-us';
import { CookieBanner } from '@/widgets/cookie-banner';
import SecureStoreServices, {
  WebSecureStorageKeys,
} from '@/shared/services/SecureStoreServices';
import { GetServerSidePropsContext } from 'next';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes

interface HomeProps {
  cookie?: string;
}

export default function Home({ cookie }: HomeProps) {
  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <WorkSpheres />
        <Features />
        <ContactUsQuick />
        <Reviews />
        <ContactUs />

        <CookieBanner cookie={cookie} />
      </Layout>
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const cookie = SecureStoreServices.getItem(
    WebSecureStorageKeys.Cookie,
    context,
  );

  return { props: { cookie: cookie != undefined && cookie } };
}
