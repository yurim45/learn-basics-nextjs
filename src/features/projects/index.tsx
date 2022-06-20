import React from 'react';
import { Layout } from '@components/index';
import Slider from '@components/Slider';
import Attendance from './attendance/Attendance';

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
          <Attendance />
          <Attendance />
        </Slider>
      </Layout>
    </>
  );
};

export default Projects;
