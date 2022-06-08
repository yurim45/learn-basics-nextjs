import React from 'react';
import { Layout } from '@components/index';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variable';

const Projects = () => {
  return (
    <Layout
      pageTitle="Projects"
      color="white"
      lineColor="white"
      bgColor="black"
    >
      <div></div>
    </Layout>
  );
};

export default Projects;

const StContainer = styled.div`
  ${formSet()};
  margin: 40px;
`;
