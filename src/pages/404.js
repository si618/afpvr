import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>These are not the drones you're looking for.</p>
    <p>TODO: Image of :SadDrone:</p>
  </Layout>
);

export default NotFoundPage;