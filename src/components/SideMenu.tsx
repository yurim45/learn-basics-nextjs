import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexSet } from '../common/styles/Variable';

const SideMenu: NextPage = () => {
  return (
    <Index>
      <div className='logo'>logo</div>
      <ul className='manu'>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
      </ul>
      <ul className='myMenu'>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
        <li>
          <i className='fas fa-quote-left' />
          <span>메뉴</span>
        </li>
      </ul>
    </Index>
  );
};

export default SideMenu;

const Index = styled.div`
  ${flexSet('space-between', '', 'column')}
  box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.2);

  .logo {
    margin: 20px;
    background-color: red;
  }

  ul {
    margin: 20px;
    ${flexSet('flex-start', '', 'column')}

    li {
      padding: 20px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
  }
`;
