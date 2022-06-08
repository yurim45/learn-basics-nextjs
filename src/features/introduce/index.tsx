import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Layout } from '@components/index';

const Introduce = () => {
  return (
    <Layout pageTitle="About Me">
      <StImg>
        <Image alt="me" src="/images/april.png" width={300} height={300} />
      </StImg>
      <StText>
        <strong>김유림</strong>
        <span>Frontend Developer</span>
        <p>
          함께 일 하고 싶은 개발자, <br />
          사용자 관점에서 개발하는 프론트엔드 개발자
        </p>
        <h3>Contact.</h3>
        <p>Email. icho0405@gmail.com</p>
      </StText>
    </Layout>
  );
};

export default Introduce;

const StText = styled.div`
  color: var(--text-333);
  padding-left: 200px;

  @media ${({ theme }) => theme.mobile} {
    margin: 20px 0;
    padding: 0;
    text-align: center;
  }

  strong {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 10px;
  }

  span {
    color: var(--text-777);
    font-size: 18px;

    @media ${({ theme }) => theme.mobile} {
      display: block;
      font-size: 16px;
    }
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    line-height: 1.2;

    @media ${({ theme }) => theme.mobile} {
      font-size: 14px;
    }
  }

  h3 {
    margin: 50px 0 0;
    font-size: 24px;
    font-weight: 600;
  }
`;

const StImg = styled.div`
  img {
    border-radius: 50%;
  }
`;
