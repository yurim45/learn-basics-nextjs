import React from 'react';
import { Layout } from '@components/index';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variable';

const Archiving = () => {
  return (
    <Layout pageTitle="Archiving" lineColor="white" bgColor="compo-lilac">
      <StContainer></StContainer>
      <StContainer></StContainer>
    </Layout>
  );
};

export default Archiving;

const StContainer = styled.div`
  ${formSet()};
  margin: 40px;
  box-shadow: 1.95px 1.95px 2.6px rgb(137 134 134 / 15%);
`;
