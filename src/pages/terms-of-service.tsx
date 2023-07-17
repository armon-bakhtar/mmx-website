import React from 'react';
import { Layout } from '@/widgets/layout';
import { Header } from '@/widgets/header';
import { TermsUI } from '@/page-components/terms-ui';
import { Footer } from '@/widgets/footer';

const TermsOfService = () => {
  return (
    <>
      <Layout>
        <Header />

        <TermsUI />

        <Footer />
      </Layout>
    </>
  );
};

export default TermsOfService;
