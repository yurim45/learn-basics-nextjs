'use client'

import React from 'react'
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll'
import upArrow from '@images/up-arrow.png'

const GotoTop = () => {
  return (
    <button
      type="button"
      className="fixed bottom-[50px] right-[60px] max-[640px]:w-[40px] max-[640px]:bottom-[30px] max-[640px]:right-[30px]"
      onClick={() => scroll.scrollToTop()}
    >
      <Image alt="" src={upArrow} width={50} height={50} />
    </button>
  )
}

export default GotoTop
