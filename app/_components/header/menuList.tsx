'use client'

import React from 'react'
import { Link } from 'react-scroll'
import { flexLayout } from 'app/_shared/styles/flex'

interface MenuListProps {
  onClick?: () => void
}

const MenuList = ({ onClick }: MenuListProps) => {
  return (
    <ul
      className={`${flexLayout({
        justify: 'between',
      })} text-text-555 text-[18px] font-semibold list-none max-[640px]:flex-col max-[640px]:bg-common-white max-[640px]:z-[10]`}
    >
      {MENU_LIST.map((menu) => (
        <li
          key={menu.to}
          className="my-0 mx-[20px] cursor-pointer max-[640px]:p-[16px]"
        >
          <Link to={menu.to} smooth={true} onClick={onClick}>
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const MENU_LIST = [
  {
    to: 'aboutMe',
    name: 'About Me',
  },
  {
    to: 'archive',
    name: 'Archive',
  },
  {
    to: 'skills',
    name: 'Skills',
  },
  {
    to: 'projects',
    name: 'Projects',
  },
  {
    to: 'career',
    name: 'Career',
  },
]

export default MenuList
