/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Error404: NextPage = () => {
  return (
    <ErrorWrap>
      <img alt='logo' src='/images/web_logo.png' />
      <Icon name='warning circle' color='red' />
      404: 페이지를 찾을 수 없습니다!
    </ErrorWrap>
  );
};

export default Error404;

const ErrorWrap = styled.div`
  padding: 200px 0;
  font-size: 28px;
  text-align: center;

  img {
    margin: 40px auto;
    width: 200px;
  }
`;
