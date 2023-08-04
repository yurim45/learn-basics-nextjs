import React from 'react'
import MenuList from '../gnb/MenuList'

interface Props {
  onClick: () => void
}

const DropBarMenu = ({ onClick }: Props) => {
  return (
    <nav className="fixed top-[60px] w-[100vw] bg-common-white text-text-333">
      <MenuList onClick={onClick} />
    </nav>
  )
}

export default DropBarMenu
