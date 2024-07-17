'use client'

import React from 'react'
import Attendance from './attendance/attendance'
import Portfolio from './portfolio/portfolio'
import EasyWorkApp from './easyWorkApp/easyWorkApp'
import { Slider, Layout } from 'app/_components'

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
