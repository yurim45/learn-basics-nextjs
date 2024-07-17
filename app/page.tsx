// app/page.tsx 이전 버전의 _app.tsx 역할
// app/layout.tsx  공통레이아웃을 잡을 수 있으며, _document.ts의 역할

import React from 'react'
import type { NextPage } from 'next'
import Landing from 'app/_features/landing'
import Introduce from 'app/_features/introduce'
import Archive from 'app/_features/archive'
import Skills from 'app/_features/skills'
import Projects from 'app/_features/projects'
import Career from 'app/_features/career'
import { Footer, Header } from './_components'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Landing />
      <Introduce />
      <Archive />
      <Skills />
      <Career />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
