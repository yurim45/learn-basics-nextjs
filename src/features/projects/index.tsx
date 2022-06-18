import React from 'react';
import { Layout } from '@components/index';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import Slider from '@components/Slider';

const Projects = () => {
  return (
    <>
      <Layout
        pageTitle="Projects"
        color="white"
        lineColor="compo-blue"
        bgColor="black"
      >
        <Slider>
          <StContainer>프로젝트1</StContainer>
          <StContainer>프로젝트2</StContainer>
          <StContainer>프로젝트3</StContainer>
          <StContainer>프로젝트4</StContainer>
        </Slider>
      </Layout>
    </>
  );
};

export default Projects;

const StContainer = styled.div`
  ${formSet()};
  margin: 0 40px;
  width: 1060px;
  height: 800px;

  :hover {
    transform: none;
  }
`;
