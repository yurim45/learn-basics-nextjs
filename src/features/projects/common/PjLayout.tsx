import React, { ReactNode } from 'react'
import { FORM_SET, PG_TITLE, PG_DESC } from '@shared/styles/variables'

type PjLayoutProps = {
  title: string
  subTitle: string
  children: ReactNode
}
const PjLayout = ({ title, subTitle, children }: PjLayoutProps) => {
  return (
    <div
      className={`${FORM_SET} mx-[40px] w-[1060px] h-[800px] hover:transform-none max-[640px]:w-[90vw] max-[640px]:h-[100%] max-[640px]:mx-[20px]`}
    >
      <h2 className={`${PG_TITLE}`}>{title}</h2>
      <p className={`${PG_DESC}`}>{subTitle}</p>
      <div>{children}</div>
    </div>
  )
}

export default PjLayout
