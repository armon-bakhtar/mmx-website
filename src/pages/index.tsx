import Head from 'next/head';
import { Hero } from '@/page-components/home/hero';
import { Layout } from '@/widgets/layout';
import { CookieBanner } from '@/widgets/cookie-banner';
import SecureStoreServices, {
  WebSecureStorageKeys,
} from '@/shared/services/secure-store-services';
import { GetServerSidePropsContext } from 'next';
import { Preloader } from '@/widgets/preloader';
import { Header } from '@/widgets/header';
import dynamic from 'next/dynamic';
import { Spinner } from '@/shared/ui/spinner';

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
        <Header />

        <Hero />
        <DynamicWorkSpheres />
        <DynamicFeatures />
        <DynamicContactUsQuick />
        <DynamicReviews />
        <DynamicContactUs />

        <Preloader />
        <CookieBanner cookie={cookie} />
        <DynamicFooter />
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
