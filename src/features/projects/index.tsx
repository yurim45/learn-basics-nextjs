'use client'

import React from 'react'
import { Layout } from '@components/index'
import Slider from '@components/Slider'
import Attendance from './attendance/Attendance'
import Portfolio from './portfolio/Portfolio'
import EasyWorkApp from './easyWorkApp/EasyWorkApp'

const Projects = () => {
  return (
    <Layout
      pageTitle="Projects"
      color="common-white"
      bgColor="bg-common-black"
      id="projects"
    >
      <Slider>
        <EasyWorkApp />
        <Portfolio />
        <Attendance />
      </Slider>
    </Layout>
  )
}

export default Projects
