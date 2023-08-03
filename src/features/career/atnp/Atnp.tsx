import React from 'react'
import { atnp } from '@images/career/index'
import { CareerLayout, Role, Tag } from '../common'

const Atnp = () => {
  return (
    <CareerLayout
      logo={atnp}
      company="At&P Partners"
      period="JAN 2022 ~ DEC 2022"
    >
      <div>
        <Role>
          연말정산을 보다 효율적으로 운용할 수 있는 다양한 기능의 차세대
          프로그램 MVP 개발
        </Role>
        <ul className="my-[20px] text-[18px] max-[640px]:text-[16px]">
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 기간</strong>: 2022. 1.24 ~ 12.19
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ Skills </strong>:
            {[
              'Nextjs',
              'React',
              'Typescript',
              'React-Query',
              'Recoil',
              'StoryBook',
              'Styled-Components',
            ].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 담당 역할</strong>
            <ul className="my-[5px] pl-[20px]">
              <li> ■ MVP 개발(사용자용)</li>
            </ul>
          </li>
        </ul>
      </div>
    </CareerLayout>
  )
}

export default Atnp
