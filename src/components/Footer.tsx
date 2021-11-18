import type { NextPage } from 'next';
import { Flag } from 'semantic-ui-react';

const countries = [{ name: 'South Korea', countryCode: 'kr' }];

const Footer: NextPage = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <p>
        Copyrightⓒ 2021. <Flag name='kr' />
        Yr. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
