import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../shared/styles/Variable';

const Footer = () => {
  return (
    <FooterWrap>
      <p>Copyrightⓒ 2021. Yr. All rights reserved.</p>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  padding: 20px;
  ${flexSet('center', 'center')}
  color: var(--gray);
  border-top: 1px solid var(--lightGray);

  p {
    padding: 50px 0;
  }
`;
