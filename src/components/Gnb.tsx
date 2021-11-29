import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Menu } from 'semantic-ui-react';

const Gnb: NextPage = () => {
  const [activeItem, setActiveItem] = useState<String>();

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={() => {
          setActiveItem('home');
        }}
      />
      <Menu.Item
        name='product'
        active={activeItem === 'product'}
        onClick={() => {
          setActiveItem('product');
        }}
      />
      <Menu.Item
        name='myPage'
        active={activeItem === 'myPage'}
        onClick={() => {
          setActiveItem('myPage');
        }}
      />
    </Menu>
  );
};

export default Gnb;
