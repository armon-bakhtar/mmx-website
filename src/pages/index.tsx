import Head from 'next/head';
import { Layout } from '@/widgets/layout';
// import { CookieBanner } from '@/widgets/cookie-banner';
import SecureStoreServices, {
  WebSecureStorageKeys,
} from '@/shared/services/secure-store-services';
import { GetServerSidePropsContext } from 'next';
import { Header } from '@/widgets/header';
import dynamic from 'next/dynamic';
import { Spinner } from '@/shared/ui/spinner';
import { useEffect, useState } from 'react';
import { Preloader } from '@/widgets/preloader';

const DynamicHero = dynamic(
  () => import('@/page-components/home/hero').then((module) => module.Hero),
  { loading: () => <Spinner isAbsolute={false} /> },
);

const DynamicWorkSpheres = dynamic(
  () =>
    import('@/page-components/home/work-spheres').then(
      (module) => module.WorkSpheres,
    ),
  { loading: () => <Spinner isAbsolute={false} /> },
);

const DynamicFeatures = dynamic(
  () =>
    import('@/page-components/home/features').then((module) => module.Features),
  { loading: () => <Spinner isAbsolute={false} /> },
);
const DynamicContactUsQuick = dynamic(
  () =>
    import('@/page-components/home/contact-us-quick').then(
      (module) => module.ContactUsQuick,
    ),
  { loading: () => <Spinner isAbsolute={false} /> },
);

const DynamicReviews = dynamic(
  () =>
    import('@/page-components/home/reviews').then((module) => module.Reviews),
  { loading: () => <Spinner isAbsolute={false} /> },
);

const DynamicContactUs = dynamic(
  () =>
    import('@/page-components/home/contact-us').then(
      (module) => module.ContactUs,
    ),
  { loading: () => <Spinner isAbsolute={false} /> },
);

const DynamicFooter = dynamic(
  () => import('@/widgets/footer').then((module) => module.Footer),
  { loading: () => <Spinner isAbsolute={false} /> },
);

const DynamicCCBanner = dynamic(
  () => import('@/widgets/cc-banner').then((module) => module.CCBanner),
  { ssr: false },
);

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes

interface HomeProps {
  cookie?: string;
}

export default function Home({ cookie }: HomeProps) {
  const [isCookieShow, setIsCookieShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsCookieShow(true);
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Momentum Max: Quality Inbound Calls and Leads</title>
        <meta
          name="description"
          content="Accelerate business growth with Momentum Max - your trusted partner for quality inbound calls & lead generation. Maximize conversions & success with tailored Pay Per Call services."
        />
        <meta
          name="title"
          content="Momentum Max: Quality Inbound Calls and Leads"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.momentummax.co/" />
        <meta
          property="og:title"
          content="Momentum Max: Quality Inbound Calls and Leads"
        />
        <meta
          property="og:description"
          content="Accelerate business growth with Momentum Max - your trusted partner for quality inbound calls & lead generation. Maximize conversions & success with tailored Pay Per Call services."
        />
        <meta property="og:image" content="/og-image.ico" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.momentummax.co/" />
        <meta
          property="twitter:title"
          content="Momentum Max: Quality Inbound Calls and Leads"
        />
        <meta
          property="twitter:description"
          content="Accelerate business growth with Momentum Max - your trusted partner for quality inbound calls & lead generation. Maximize conversions & success with tailored Pay Per Call services."
        />
        <meta property="twitter:image" content="/og-image.ico" />
      </Head>
      <Layout>
        <Header />

        <DynamicHero />
        <DynamicWorkSpheres />
        <DynamicFeatures />
        <DynamicContactUsQuick />
        <DynamicReviews />
        <DynamicContactUs />

        {/* {isCookieShow && <CookieBanner cookie={cookie} />} */}
        <DynamicCCBanner />

        <DynamicFooter />

        <Preloader />
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
