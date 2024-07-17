import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FORM_SET } from 'app/_shared/styles/variables'
import { flexLayout } from 'app/_shared/styles/flex'
import { github, velog } from '@images/archive/index'
import { Layout } from 'app/_components'

const Archive = () => {
  return (
    <Layout
      pageTitle="Archive"
      lineColor="border-common-white"
      id="archive"
      bgColor="bg-compo-lilac"
    >
      <div className={`${flexLayout({ align: 'start' })} max-[640px]:flex-col`}>
        <div className={`${FORM_SET} m-[40px]`}>
          <div
            className={`${flexLayout({
              direction: 'col',
            })} text-[24px] font-[800] tracking-[-0.5px] max-[640px]:mt-[20px]`}
          >
            <Image alt="github-logo" src={github} width={50} />
            <strong>GitHub</strong>
          </div>
          <div className="my-[20px] mb-[10px]">
            <Link
              href="https://github.com/yurim45"
              target="_blank"
              rel="noreferrer"
              className="text-center text-[16px] text-text-blue tracking-[-0.5px]"
            >
              <p>github.com/yurim45</p>
            </Link>
            <ul className="m-[20px] pl-[20px] text-text-555 text-[16px] tracking-[-0.5px] list-[square] max-[640px]:text-[14px]">
              <li className="py-[5px]">프로젝트의 소스 코드가 있습니다.</li>
              <li className="py-[5px]">
                코딩 연습을 위해 작업한 코드가 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className={`${FORM_SET} m-[40px]`}>
          <div
            className={`${flexLayout({
              direction: 'col',
            })} text-[24px] font-[800] tracking-[-0.5px] max-[640px]:mt-[20px]`}
          >
            <Image alt="velog-logo" src={velog} width={50} />
            <strong>Velog</strong>
          </div>
          <div className="my-[20px] mb-[10px]">
            <Link
              href="https://velog.io/@april_5"
              target="_blank"
              rel="noreferrer"
              className="text-center text-[16px] text-text-blue tracking-[-0.5px]"
            >
              <p>velog.io/@april_5</p>
            </Link>
            <ul className="m-[20px] pl-[20px] text-text-555 text-[16px] tracking-[-0.5px] list-[square] max-[640px]:text-[14px]">
              <li className="py-[5px]">
                공부한 것을 정리할 목적의 블로그입니다.
              </li>
              <li className="py-[5px]">개발하며 겪은 이야기를 공유합니다.</li>
              <li className="py-[5px]">지식 공유를 위해 작성하기도 합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Archive
