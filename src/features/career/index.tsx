import React from 'react';
import { Layout } from '@components/index';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';

const Career = () => {
  return (
    <Layout pageTitle="Career" lineColor="compo-green">
      <div></div>
    </Layout>
  );
};

export default Career;

const StContainer = styled.div`
  ${formSet()};
  margin: 40px;
`;
