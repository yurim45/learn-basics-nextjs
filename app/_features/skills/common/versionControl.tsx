import React from 'react'
import Image from 'next/image'
import { SKILL_TITLE } from 'app/_shared/styles/variables'
import { flexLayout } from 'app/_shared/styles/flex'
import { logoGit, logoGithub, logoGitlab } from '@images/skills/index'

const VersionControl = () => {
  return (
    <div
      className={`${flexLayout({
        align: 'start',
        direction: 'col',
      })} gap-[10px]`}
    >
      <h3 className={`${SKILL_TITLE}`}>VCS</h3>
      <ul
        className={`${flexLayout({
          justify: 'start',
        })} flex-wrap gap-[20px]`}
      >
        <li>
          <Image alt="Git-Logo" src={logoGit} width={60} />
        </li>
        <li>
          <Image alt="GitHub-Logo" src={logoGithub} width={60} />
        </li>
        <li>
          <Image alt="GitLab-Logo" src={logoGitlab} width={60} />
        </li>
      </ul>
    </div>
  )
}

export default VersionControl
