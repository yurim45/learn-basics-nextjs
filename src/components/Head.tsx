import type { NextPage } from 'next';
import { Header, Icon } from 'semantic-ui-react';

const countries = [{ name: 'South Korea', countryCode: 'kr' }];
const Head: NextPage = () => {
  return (
    <div>
      <Header as='h1' textAlign='left' color='blue'>
        <img alt='logo' src='/images/web_logo.png' />
        web template
      </Header>
    </div>
  );
};

export default Head;
