import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Menu } from 'semantic-ui-react';

const Gnb: NextPage = () => {
  const [activeItem, setActiveItem] = useState();

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
        name='messages'
        active={activeItem === 'messages'}
        onClick={() => {
          setActiveItem('messages');
        }}
      />
      <Menu.Item
        name='friends'
        active={activeItem === 'friends'}
        onClick={() => {
          setActiveItem('friends');
        }}
      />
    </Menu>
  );
};

export default Gnb;
