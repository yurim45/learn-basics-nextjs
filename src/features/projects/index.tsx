import React from 'react';
import { Layout } from '@components/index';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import Slider from '@components/Slider';
import PjLayout from './common/PjLayout';

const Projects = () => {
  return (
    <>
      <Layout
        pageTitle="Projects"
        color="white"
        lineColor="compo-blue"
        bgColor="bg-black"
        id="projects"
      >
        <Slider>
          <StContainer>프로젝트1</StContainer>
          <StContainer>프로젝트2</StContainer>
          <StContainer>프로젝트3</StContainer>
          <StContainer>
            <PjLayout
              title="근태관리 프로그램"
              subTitle="21.06 ~ 21.06 / FE: 2명, BE: 1명"
            >
              내용
            </PjLayout>
          </StContainer>
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

  @media ${({ theme }) => theme.mobile} {
    width: 300px;
  }
`;
