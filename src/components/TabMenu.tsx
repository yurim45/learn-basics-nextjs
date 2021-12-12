import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flexSet } from "../common/styles/Variable";

const TabMenu: NextPage = () => {
  return (
    <Index>
      <div className='logo'>
        <img alt='logo' src='/images/tent.png' />
        <span>별보러 가자</span>
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

const Index = styled.header`
  ${flexSet("space-between", "", "column")};
  border-radius: 10% 10% 0 0;
  /* background:  rgba(255, 255, 255, 0.8); */
  /* box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); */

  .logo {
    display: flexbox;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin: 10px 10px 10px 30px;
    }

    span {
      font-size: 22px;
    }
  }

  ul {
    padding: 5px;
    ${flexSet("flex-start", "", "column")};

    li {
      padding: 20px;

      span {
        padding: 0 5px;
      }
    }
  }

  .myMenu {
    padding-right: 20px;

    i {
      font-size: 18px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
  }
`;
