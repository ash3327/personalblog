import React from 'react';
import Layout from '@theme/Layout';
import LifeWeeks from '@site/src/components/LifeWeeks';

export default function LifeInWeeks(): JSX.Element {
  return (
    <Layout
      title="Life in Weeks"
      description="A visualization of life in weeks">
      <main style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <h1>Life in Weeks</h1>
          <p>
            Inspired by Tim Urban's "Wait But Why", this visualization shows 4000 weeks
            of a human life. Each circle represents one week, with filled circles showing
            past weeks and empty circles showing future weeks.
          </p>
        </div>
        <LifeWeeks />
      </main>
    </Layout>
  );
}
