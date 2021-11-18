import type { NextPage } from 'next';
import { Flag } from 'semantic-ui-react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import { Theme } from '../../styles/theme';

const countries = [{ name: 'South Korea', countryCode: 'kr' }];

const Footer: NextPage = () => {
  return (
    <FooterDiv>
      <p>
        Copyrightⓒ 2021. <Flag name='kr' />
        Yr. All rights reserved.
      </p>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.footer`
  ${flexSet('center', 'center')}
  margin: 20;
  padding: 20;
  color: grey;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};

  p {
    padding: 1rem 0;
  }
`;
