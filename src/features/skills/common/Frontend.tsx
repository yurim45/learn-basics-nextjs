import React from 'react'
import Image from 'next/image'
import { SKILL_TITLE } from '@shared/styles/variables'
import { flexLayout } from '@shared/styles/flex'
import {
  logoNextjs,
  logoRQ,
  logoReact,
  logoRecoil,
  logoSB,
  logoSC,
  logoApollo,
  logoGraphql,
} from '@images/skills/index'

const Framework = () => {
  return (
    <div
      className={`${flexLayout({
        align: 'start',
        direction: 'col',
      })} gap-[10px]`}
    >
      <h3 className={`${SKILL_TITLE}`}>Frontend</h3>
      <ul
        className={`${flexLayout({ justify: 'start' })} flex-wrap gap-[20px]`}
      >
        <li className="p-[10px]">
          <Image alt="Nextjs-Logo" src={logoNextjs} width={60} />
        </li>
        <li>
          <Image alt="React-Logo" src={logoReact} width={60} />
        </li>
        <li>
          <Image alt="Apollo-Graphql-Logo" src={logoApollo} width={60} />
        </li>
        <li>
          <Image alt="Graphql-Logo" src={logoGraphql} width={60} />
        </li>
        <li>
          <Image alt="Recoil-Logo" src={logoRecoil} width={60} />
        </li>
        <li>
          <Image alt="React-Query-Logo" src={logoRQ} width={60} />
        </li>
        <li>
          <Image alt="Styled-components-Logo" src={logoSC} width={60} />
        </li>
        <li>
          <Image alt="Storybook-Logo" src={logoSB} width={60} />
        </li>
      </ul>
    </div>
  )
}

export default Framework
