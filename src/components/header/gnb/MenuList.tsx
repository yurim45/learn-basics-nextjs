import React from 'react'
import { Link } from 'react-scroll'

const MenuList = () => {
  return (
    <ul className="flex justify-between items-center text-text-555 text-[18px] font-semibold list-none max-[640px]:flex-col max-[640px]:bg-common-white">
      {['About Me', 'Archive', 'Skills', 'Projects', 'Career'].map((menu) => (
        <li
          key={menu}
          className="my-0 mx-[20px] cursor-pointer max-[640px]:p-[16px]"
        >
          <Link to="aboutMe" smooth={true}>
            {menu}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuList
