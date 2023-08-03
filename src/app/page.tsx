'use client'
// app/page.tsx 이전 버전의 _app.tsx 역할
// app/layout.tsx  공통레이아웃을 잡을 수 있으며, _document.ts의 역할

import React from 'react'
import type { NextPage } from 'next'
import { Footer, Header } from '@components/index'
import Landing from '@features/landing'
import Introduce from '@features/introduce'
import Archive from '@features/archive'
import Skills from '@features/skills'
import Projects from '@features/projects'
import Career from '@features/career'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Landing />
      <Introduce />
      <Archive />
      {/* <Skills /> */}
      <Projects />
      <Career />
      <Footer />
    </>
  )
}

export default Home
