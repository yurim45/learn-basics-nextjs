import React, { ReactNode } from 'react'
import { TAG_TEXT } from '@shared/styles/variables'

const Tag = ({ children }: { children: ReactNode }) => {
  return <button className={TAG_TEXT}>{children}</button>
}

export default Tag
