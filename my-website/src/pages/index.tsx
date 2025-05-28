import React from 'react';
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HighlightedContent from '../components/HighlightedContent';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Sam's Portfolio - Machine Learning Engineer & Software Developer">
      <main>
        <HighlightedContent />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}