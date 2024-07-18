import React, { ReactNode } from 'react'
import { SECTION_TITLE } from 'app/_shared/styles/variables'

type LayoutProps =
  | {
      pageTitle: string
      children: ReactNode
      color?: string
      bgColor?: string
      lineColor?: string
      id?: string
    }
  | any // TODO: any 타입 제거

const Layout = ({
  pageTitle,
  children,
  bgColor = 'bg-common-white',
  color = 'text-333',
  lineColor = 'border-common-blue',
  id,
}: LayoutProps) => {
  return (
    <section
      className={`w-[100vw] py-[150px] ${bgColor} overflow-hidden max-[640px]:py-[100px]`}
      id={id}
    >
      <div className="max-w-[1140px] m-auto">
        <h2 className={`${SECTION_TITLE} text-${color}`}>{pageTitle}</h2>
        <div
          className={`w-[50px] my-[50px] mx-auto border-b-[2px] border-solid ${lineColor}`}
        />
        <div className="py-[20px]">{children}</div>
      </div>
    </section>
  )
}

export default Layout
