import type { NextPage } from 'next';
import { Flag } from 'semantic-ui-react';
import styled from 'styled-components';
import { flexSet } from '../common/styles/Variable';

const Footer: NextPage = () => {
  return (
    <FooterWrap>
      <p>
        Copyrightⓒ 2021. <Flag name='kr' />
        Yr. All rights reserved.
      </p>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  padding: 20px;
  ${flexSet('center', 'center')}
  color: ${({ theme }) => theme.colors.grey};
  border-top: 1px solid ${({ theme }) => theme.colors.lightgrey};

  p {
    padding: 4rem 0;
  }
`;
