import React from 'react'
import {
  FrontendBasic,
  Tools,
  MobileApp,
  Deployment,
  VersionControl,
  Frontend,
} from './common/index'
import { flexLayout } from 'app/_shared/styles/flex'
import { FORM_SET } from 'app/_shared/styles/variables'
import { Layout } from 'app/_components'

const Skills = () => {
  return (
    <Layout
      pageTitle="Skills"
      id="skills"
      bgColor="bg-compo-bg-yellow"
      lineColor="border-common-yellow"
    >
      <p className="text-text-yellow text-[20px] text-center">
        현재까지 배우고 사용 해봤던 기술입니다
      </p>
      <div
        className={`${flexLayout({
          justify: 'start',
          align: 'start',
        })} gap-[100px] flex-wrap ${FORM_SET} hover:transform-none mt-[40px] max-[640px]:flex-col max-[640px]:m-[20px] max-[640px]:gap-[20px]`}
      >
        <Frontend />
        <div className="hidden w-[80vw] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
        <FrontendBasic />
        <div className="hidden w-[80vw] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
        <Tools />
        <div className="hidden w-[80vw] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
        <VersionControl />
        <div className="hidden w-[80vw] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
        <MobileApp />
        <div className="hidden w-[80vw] mx-auto border-[1px] border-solid border-compo-line max-[640px]:block" />
        <Deployment />
      </div>
    </Layout>
  )
}

export default Skills
