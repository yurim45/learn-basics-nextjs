import React from 'react'
import Image from 'next/image'
import { SKILL_TITLE } from 'app/_shared/styles/variables'
import { flexLayout } from 'app/_shared/styles/flex'
import {
  logoFigma,
  logoJira,
  logoNotion,
  logoZeplin,
} from '@images/skills/index'

const Communication = () => {
  return (
    <div
      className={`${flexLayout({
        align: 'start',
        direction: 'col',
      })} gap-[10px]`}
    >
      <h3 className={`${SKILL_TITLE}`}>Tools</h3>
      <ul
        className={`${flexLayout({
          justify: 'start',
        })} flex-wrap gap-[20px]`}
      >
        <li>
          <Image alt="Notion-Logo" src={logoNotion} width={60} />
        </li>
        <li>
          <Image alt="Figma-Logo" src={logoFigma} width={60} />
        </li>
        <li>
          <Image alt="Jeplin-Logo" src={logoZeplin} width={60} />
        </li>
        <li>
          <Image alt="Jira-Logo" src={logoJira} width={60} />
        </li>
      </ul>
    </div>
  )
}

export default Communication
