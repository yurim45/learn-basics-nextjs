import React from 'react';
import { GridLayout } from '@components/index';
import {
  FrontendBasic,
  Communication,
  MobileApp,
  Deployment,
  VersionControl,
  Frontend,
} from './common/index';

const Skills = () => {
  return (
    <GridLayout
      pageTitle="Skills"
      bgColor="bg-yellow"
      lineColor="yellow"
      id="skills"
    >
      <Frontend />
      <FrontendBasic />
      <Communication />
      <VersionControl />
      <MobileApp />
      <Deployment />
    </GridLayout>
  );
};

export default Skills;
