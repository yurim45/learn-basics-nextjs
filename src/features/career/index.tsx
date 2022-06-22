import React from 'react';
import Image from 'next/image';
import { Layout } from '@components/index';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import { atnp, actbase } from '@images/career/index';

const Career = () => {
  return (
    <Layout pageTitle="Career" lineColor="compo-green" id="career">
      <div>
        <Image alt="logo" src={atnp} width={100} height={100} />
        <StContent>ddd</StContent>
      </div>
    </Layout>
  );
};

export default Career;

const StContainer = styled.div`
  ${formSet()};
  margin: 40px;
`;

const StContent = styled.div``;
