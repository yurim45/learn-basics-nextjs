import type { NextPage } from 'next';
import { Header, Icon } from 'semantic-ui-react';
import Gnb from './Gnb';

const Head: NextPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Header
        as='h1'
        textAlign='left'
        style={{ display: 'flex', alignItems: 'flex-end' }}
      >
        <img alt='logo' src='/images/web_logo.png' />
        Web template
      </Header>
      <Gnb />
    </div>
  );
};

export default Head;
