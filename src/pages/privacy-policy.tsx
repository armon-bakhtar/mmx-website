import React from 'react';
import { Layout } from '@/widgets/layout';
import { Header } from '@/widgets/header';
import { PrivacyPolicyUI } from '@/page-components/privacy-policy-ui';
import { Footer } from '@/widgets/footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Layout>
        <Header />

        <PrivacyPolicyUI />

        <Footer />
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
