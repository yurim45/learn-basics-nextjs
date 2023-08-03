import React from 'react'
import Image from 'next/image'
import { SKILL_TITLE } from '@shared/styles/variables'
import { flexLayout } from '@shared/styles/flex'
import { logoRN } from '@images/skills/index'

const MobileApp = () => {
  return (
    <div
      className={`${flexLayout({
        align: 'start',
        direction: 'col',
      })} gap-[10px]`}
    >
      <h3 className={`${SKILL_TITLE}`}>Mobile App</h3>
      <ul
        className={`${flexLayout({ justify: 'start' })} flex-wrap gap-[20px]`}
      >
        <li>
          <Image alt="React-Native-Logo" src={logoRN} width={60} />
        </li>
      </ul>
    </div>
  )
}

export default MobileApp
