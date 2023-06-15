import Head from 'next/head';
import { Hero } from '@/page-components/home/hero';
import { Layout } from '@/widgets/layout';
import { WorkSpheres } from '@/page-components/home/work-spheres';
import { Features } from '@/page-components/home/features';
import { ContactUsQuick } from '@/page-components/home/contact-us-quick';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes

export default function Home() {
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
      </Layout>
    </>
  );
}
