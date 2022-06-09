import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';

const Landing = () => {
  return (
    <Main>
      <div>
        <StLeft>
          <Image
            alt="flower"
            src="/images/landing/landing-left-top.png"
            width={939}
            height={872}
            priority={true}
          />
        </StLeft>
        <StRightTop>
          <Image
            alt="flower"
            src="/images/landing/landing-right-top.png"
            width={805}
            height={322}
            priority={true}
          />
        </StRightTop>
        <StRightBottom>
          <Image
            alt="flower"
            src="/images/landing/landing-right-bottom.png"
            layout="fill"
          />
        </StRightBottom>
        <StLeftBottom>
          <Image
            alt="flower"
            src="/images/landing/landing-bottom.png"
            layout="fill"
            priority={true}
          />
        </StLeftBottom>
      </div>
      <StText>
        <h1>Imagination becomes reality</h1>
        <strong>{"April's world"}</strong>
        <button>▼</button>
      </StText>
    </Main>
  );
};

export default Landing;

const Main = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  color: var(--text-555);
  background: var(--compo-primary);

  img {
    box-shadow: 100px 100px 100px #000;
  }
`;

const StText = styled.div`
  ${flex({
    direction: 'col',
  })};
  width: 90vw;
  height: 100vh;
  margin: auto;
  color: var(--white);
  text-align: center;
  z-index: 2;

  h1 {
    margin-bottom: 100px;
    font-size: 80px;
    z-index: 100;

    @media ${({ theme }) => theme.mobile} {
      font-size: 60px;
    }
  }

  strong {
    font-size: 24px;
  }

  button {
    position: absolute;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    animation: blink-effect 2s infinite ease-in-out;
  }

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const StLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const StRightTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StRightBottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 400px;
  width: 300px;
  height: 600px;

  @media ${({ theme }) => theme.mobile} {
    bottom: 200px;
    width: 100px;
    height: 200px;
  }
`;

const StLeftBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: -250px;
  width: 100vw;
  height: 60vh;

  @media ${({ theme }) => theme.mobile} {
    bottom: -50px;
    width: 100vw;
    height: 20vh;
  }
`;
