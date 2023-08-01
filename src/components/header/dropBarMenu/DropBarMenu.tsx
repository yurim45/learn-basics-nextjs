import React from 'react'
import MenuList from '../gnb/MenuList'

const DropBarMenu = () => {
  return (
    <nav className="fixed top-[60px] w-[100vw] bg-common-white text-text-333">
      <MenuList />
    </nav>
  )
}

export default DropBarMenu
