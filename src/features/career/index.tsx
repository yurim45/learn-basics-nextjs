import React from 'react';
import { Layout } from '@components/index';
import Actbase from './actbase/Actbase';
import Atnp from './atnp/Atnp';
import Thingsflow from './thingsflow/Thingsflow';

const Career = () => {
  return (
    <Layout pageTitle="Career" lineColor="compo-green" id="career">
      <Thingsflow />
      <Atnp />
      <Actbase />
    </Layout>
  );
};

export default Career;
