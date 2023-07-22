import React from 'react';
import { Layout } from '@components/index';
import Actbase from './actbase/Actbase';
import Atnp from './atnp/Atnp';
import Thingsflow from './thingsflow/Thingsflow';
import styled from 'styled-components';

const Career = () => {
  return (
    <Layout pageTitle="Career" lineColor="compo-green" id="career">
      <Thingsflow />
      <StLine />
      <Atnp />
      <StLine />
      <Actbase />
    </Layout>
  );
};

const StLine = styled.div`
  display: none;
  width: 80vw;
  margin: 50px auto;
  border-bottom: 1px solid ${`var(--compo-line)`};

  @media ${({ theme }) => theme.mobile} {
    display: block;
  }
`;

export default Career;
