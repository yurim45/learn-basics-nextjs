import React from 'react';
import styled from 'styled-components';
import MenuList from '../gnb/MenuList';

const DropBarMenu = () => {
  return (
    <>
      <StDrop>
        <MenuList />
      </StDrop>
    </>
  );
};

const StDrop = styled.ul`
  position: fixed;
  top: 60px;
  width: 100vw;
  padding: 30px;
  background: var(--white);
  color: var(--text-333);
  font-size: 18px;
  z-index: 100;

  li {
    margin: 20px 0;
    text-align: center;
    cursor: pointer;
  }
`;

export default DropBarMenu;
