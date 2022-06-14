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
        lineColor="white"
        bgColor="black"
      >
        <Slider>
          <StContainer>프로젝ㅌ1</StContainer>
          <StContainer>프로젝ㅌ2</StContainer>
          <StContainer>프로젝ㅌ3</StContainer>
          <StContainer>프로젝ㅌ4</StContainer>
        </Slider>
      </Layout>
    </>
  );
};

export default Projects;

const StContainer = styled.div`
  ${formSet()};
  margin: 40px;
  width: 800px;
  height: 800px;
`;
