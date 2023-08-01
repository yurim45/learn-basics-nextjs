import React from 'react'
import MenuList from '../gnb/MenuList'

const DropBarMenu = () => {
  return (
    <>
      <div className="fixed top-[60px] w-[100vw] bg-common-white text-text-333">
        <MenuList />
      </div>
    </>
  )
}

export default DropBarMenu
