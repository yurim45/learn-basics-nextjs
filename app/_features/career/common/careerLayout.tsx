import React, { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { flexLayout } from 'app/_shared/styles/flex'

type PjLayoutProps = {
  logo: StaticImageData
  company: string
  period: string
  children: ReactNode
}
const CareerLayout = ({ logo, company, period, children }: PjLayoutProps) => {
  return (
    <div
      className={`${flexLayout(
        {}
      )} w-[100%] mb-[100px] max-[640px]:flex-col max-[640px]:mb-[0] `}
    >
      <div className={`${flexLayout({})} w-[50%] p-[30px]`}>
        <Image alt="logo" src={logo} className="w-[120px]" />
      </div>
      <div className="w-[100%] p-[30px] border-l-[1px] border-dashed border-compo-green">
        <h3 className="font-blackHan text-text-green text-[36px] max-[640px]:text-[32px]">
          {company}
        </h3>
        <p className="my-[10px] text-text-777 text-[16px] max-[640px]:text-[14px]">
          {period}
        </p>
        {children}
      </div>
    </div>
  )
}

export default CareerLayout
