import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';

const Lading = () => {
  return (
    <Main>
      <div>
        <StLeftTop>
          <Image
            alt=""
            src="/images/landing-left-top.png"
            width={939}
            height={872}
          />
        </StLeftTop>
        <StRightTop>
          <Image
            alt=""
            src="/images/landing-right-top.png"
            width={805}
            height={322}
          />
        </StRightTop>
        <StRightBottom>
          <Image
            alt=""
            src="/images/landing-right-bottom.png"
            width={297}
            height={598}
          />
        </StRightBottom>
        <StLeftBottom>
          <Image
            alt=""
            src="/images/landing-bottom.png"
            layout="fill"
            objectFit="fill"
            className={'image'}
          />
        </StLeftBottom>
      </div>
      <StText>
        <h1>Imagination becomes reality</h1>
        <strong>April's home</strong>
      </StText>
    </Main>
  );
};

export default Lading;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  color: var(--text-555);
  background: #fbb0a3;
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
  }

  strong {
    font-size: 24px;
  }
`;

const StLeftTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const StRightTop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

const StRightBottom = styled.div`
  position: fixed;
  right: 0;
  bottom: 400px;
`;

const StLeftBottom = styled.div`
  position: fixed;
  left: 0;
  bottom: -250px;
  width: 100vw;
  height: 50vh;

  .image {
    width: 100%;
    height: 100%;
  }
`;
