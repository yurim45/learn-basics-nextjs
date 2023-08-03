import React from 'react'
import Image from 'next/image'
import { SKILL_TITLE } from '@shared/styles/variables'
import { flexLayout } from '@shared/styles/flex'
import { logoVercel, logoNCP } from '@images/skills/index'

const Deployment = () => {
  return (
    <div
      className={`${flexLayout({
        align: 'start',
        direction: 'col',
      })} gap-[10px]`}
    >
      <h3 className={`${SKILL_TITLE}`}>Deployment</h3>
      <ul
        className={`${flexLayout({
          justify: 'start',
        })} flex-wrap gap-[20px]`}
      >
        <li>
          <Image alt="Vercel-Logo" src={logoVercel} width={60} />
        </li>
        <li>
          <Image alt="NCP-Logo" src={logoNCP} width={60} />
        </li>
      </ul>
    </div>
  )
}

export default Deployment
