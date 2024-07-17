import React, { ReactNode } from 'react'

const Role = ({ children }: { children: ReactNode }) => {
  return (
    <p className="my-[10px] text-text-333 text-[18px] leading-[1.5] max-[640px]:text-[16px]">
      {children}
    </p>
  )
}

export default Role
