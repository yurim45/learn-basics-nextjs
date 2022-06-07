import React from 'react';
import styled from 'styled-components';
import Layout from '@components/common/Layout';
import { formSet } from '@shared/styles/variable';

const Skills = () => {
  return (
    <Layout pageTitle="Skills" bgColor="bg-yellow" lineColor="yellow">
      <StForm>
        <h3>Frontend</h3>
      </StForm>
    </Layout>
  );
};

export default Skills;

const StForm = styled.div`
  ${formSet()};
`;
