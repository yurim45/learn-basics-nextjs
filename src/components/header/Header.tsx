'use client'

import React, { useEffect, useState } from 'react'
import Gnb from './gnb/Gnb'
import DropBarMenu from './dropBarMenu/DropBarMenu'
import IconHamberger from '@components/icons/IconHamberger'
import GotoTop from '@components/footer/GotoTop'

const Header = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const updateScroll = () => {
    if (window?.scrollY >= 1200) {
      setHasScroll(true)
    } else {
      setHasScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll)

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed w-[100vw] py-[16px] px-[] bg-common-white ${
          hasScroll ? `opacity-100` : `opacity-0`
        } shadow-lg shadow-black/15 z-200`}
      >
        <div className="max-w-[1140px] flex justify-between items-center my-0 mx-auto px-[0] max-[640px]:px-[20px]">
          <div className="text-text-333 text-[24px] font-semibold max-[640px]:text-[20px]">
            {`April's world`}
          </div>
          <Gnb />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="hidden max-[640px]:block"
          >
            <IconHamberger />
          </button>
        </div>
      </header>
      {isOpen && hasScroll && <DropBarMenu />}
      {hasScroll && <GotoTop />}
    </>
  )
}

export default Header
