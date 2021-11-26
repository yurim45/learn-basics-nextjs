import type { NextPage } from 'next';
import Link from 'next/link';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

const Head: NextPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Link href='/'>
        <a>
          <Header
            as='h1'
            textAlign='left'
            style={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <img alt='logo' src='/images/web_logo.png' />
            Web template
          </Header>
        </a>
      </Link>
      <Gnb />
    </div>
  );
};

export default Head;
