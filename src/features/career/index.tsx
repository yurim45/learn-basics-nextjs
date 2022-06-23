import React from 'react';
import { Layout } from '@components/index';
import Actbase from './actbase/Actbase';
import Atnp from './atnp/Atnp';

const Career = () => {
  return (
    <Layout pageTitle="Career" lineColor="compo-green" id="career">
      <Atnp />
      <Actbase />
    </Layout>
  );
};

export default Career;
