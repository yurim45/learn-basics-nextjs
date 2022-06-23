import React from 'react';
import { GridLayout } from '@components/index';
import {
  Frontend,
  Communication,
  MobileApp,
  Deployment,
  VersionControl,
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
      <Communication />
      <Deployment />
      <MobileApp />
      <VersionControl />
    </GridLayout>
  );
};

export default Skills;
