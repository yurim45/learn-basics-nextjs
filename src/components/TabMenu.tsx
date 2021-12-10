import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexSet } from '../common/styles/Variable';

const TabMenu: NextPage = () => {
  return (
    <Index>
      <div className='logo'>
        <img alt='logo' src='/images/icon-cake.png' />
      </div>
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
          <i className='fas fa-home' />
        </li>
        <li>
          <i className='far fa-bell' />
        </li>
        <li>
          <i className='far fa-user-circle' />
        </li>
      </ul>
    </Index>
  );
};

export default TabMenu;

const Index = styled.div`
  ${flexSet('space-between', '', 'column')}
  box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.2);

  .logo {
    display: flexbox;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin: 10px;
    }
  }

  ul {
    padding: 5px;
    ${flexSet('flex-start', '', 'column')} li {
      padding: 20px;

      span {
        padding: 0 5px;
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
  }
`;
