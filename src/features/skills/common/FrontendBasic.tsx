import React from 'react'
import Image from 'next/image'
import { SKILL_TITLE } from '@shared/styles/variables'
import { flexLayout } from '@shared/styles/flex'
import { logoCss, logoHtml, logoJs, logoTS } from '@images/skills/index'

const FrontendBasic = () => {
  return (
    <div
      className={`${flexLayout({
        align: 'start',
        direction: 'col',
      })} gap-[10px]`}
    >
      <h3 className={`${SKILL_TITLE}`}>Basic</h3>
      <ul
        className={`${flexLayout({ justify: 'start' })} flex-wrap gap-[20px]`}
      >
        <li>
          <Image alt="HTML-Logo" src={logoHtml} width={60} />
        </li>
        <li>
          <Image alt="CSS-Logo" src={logoCss} width={60} />
        </li>
        <li>
          <Image alt="JS-Logo" src={logoJs} width={60} />
        </li>
        <li>
          <Image alt="TS-Logo" src={logoTS} width={60} />
        </li>
      </ul>
    </div>
  )
}

export default FrontendBasic
