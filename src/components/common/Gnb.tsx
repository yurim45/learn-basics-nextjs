import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Gnb = () => {
  const [activeItem, setActiveItem] = useState<String>('');
  const router = useRouter();

  return (
    <ul>
      <li
        onClick={() => {
          setActiveItem('home');
          router.push('/');
        }}
      />
      <li
        onClick={() => {
          setActiveItem('product');
          router.push('/product');
        }}
      />
      <li
        onClick={() => {
          setActiveItem('mypage');
          router.push('/mypage');
        }}
      />
      <li
        onClick={() => {
          setActiveItem('admin');
          router.push('/admin');
        }}
      />
    </ul>
  );
};

export default Gnb;
