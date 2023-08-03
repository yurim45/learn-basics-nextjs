import React from 'react'
import { Layout } from '@components/index'
import Actbase from './actbase/Actbase'
import Atnp from './atnp/Atnp'
import Thingsflow from './thingsflow/Thingsflow'

const Career = () => {
  return (
    <Layout pageTitle="Career" lineColor="border-compo-green" id="career">
      <Thingsflow />
      <div className="hidden w-[80vw] my-[50px] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
      <Atnp />
      <div className="hidden w-[80vw] my-[50px] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
      <Actbase />
    </Layout>
  )
}

export default Career
