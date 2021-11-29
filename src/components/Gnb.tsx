import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';

const Gnb: NextPage = () => {
  const [activeItem, setActiveItem] = useState<String>();
  const router = useRouter();

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={() => {
          setActiveItem('home');
          router.push('/');
        }}
      />
      <Menu.Item
        name='product'
        active={activeItem === 'product'}
        onClick={() => {
          setActiveItem('product');
          router.push('/product');
        }}
      />
    </Menu>
  );
};

export default Gnb;
