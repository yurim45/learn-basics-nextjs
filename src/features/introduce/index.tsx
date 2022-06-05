import React from 'react';
import Image from 'next/image';
import { styled } from '@shared/styles/theme';
import flex from '@shared/styles/flex';

const Introduce = () => {
  return (
    <StSction>
      <h2>Introduce</h2>
      <StLine />
      <StContent>
        <Image alt="me" src="/images/april.png" width={300} height={300} />
        <StText>
          <strong>김유림</strong>
          <span>Front-End Developer</span>
          <p>
            함께 일 하고 싶은 개발자, <br />
            사용자 관점에서 개발하는 프론트엔드 개발자
          </p>
        </StText>
      </StContent>
    </StSction>
  );
};

export default Introduce;

const StSction = styled.section`
  ${flex({
    direction: 'col',
  })};
  width: 100vw;
  height: 80vh;

  h2 {
    font-size: 60px;
    font-weight: 600;

    @media ${({ theme }) => theme.mobile} {
      font-size: 48px;
    }
  }
`;

const StLine = styled.div`
  width: 50px;
  margin: 50px 0;
  border-bottom: 2px solid var(--blue);
`;

const StContent = styled.div`
  ${flex};
  padding: 20px 0;

  @media ${({ theme }) => theme.mobile} {
    ${flex({
      direction: 'col',
    })};
  }

  img {
    border-radius: 50%;
  }
`;

const StText = styled.div`
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
`;
