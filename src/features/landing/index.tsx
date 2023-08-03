import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import flex from '@shared/styles/flex'
import { leftTop, bottom, rightBottom, rightTop } from '@images/landing/index'
import { Link } from 'react-scroll'

const Landing = () => {
  return (
    <main className="w-[100vw] h-[100vh] my-0 mx-auto bg-compo-primary text-text-555">
      <div>
        <StLeft>
          <Image
            alt="flower"
            src={leftTop}
            width={939}
            height={872}
            priority={true}
            className="drop-shadow-xl"
          />
        </StLeft>
        <StRightTop>
          <Image
            alt="flower"
            src={rightTop}
            width={805}
            height={322}
            priority={true}
            className="drop-shadow-xl"
          />
        </StRightTop>
        <StRightBottom>
          <Image alt="flower" src={rightBottom} className="drop-shadow-xl" />
        </StRightBottom>
        <StLeftBottom>
          <Image
            alt="flower"
            src={bottom}
            priority={true}
            className="drop-shadow-xl"
          />
        </StLeftBottom>
      </div>
      <StText className="flex flex-col justify-center m-auto w-[90vw] h-[100vh] text-center text-white">
        <h1 className="mb-[100px] text-[80px] font-extrabold tracking-tight font-[black_han] z-100">
          Imagination becomes reality
        </h1>
        <strong>{"April's world"}</strong>
        <Link to="aboutMe" smooth={true}>
          <button>▼</button>
        </Link>
      </StText>
    </main>
  )
}

export default Landing

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
    font-family: 'Black Han Sans', sans-serif;
    font-size: 80px;
    font-weight: 900;
    letter-spacing: -0.5px;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 1s
      both;
    z-index: 100;

    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }

    @media ${({ theme }) => theme.mobile} {
      font-size: 48px;
      animation: none;
    }
  }

  strong {
    font-size: 24px;
  }

  button {
    position: absolute;
    bottom: 50px;
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    animation: blink-effect 2s infinite ease-in-out;

    @media ${({ theme }) => theme.mobile} {
      left: calc(50% - 25px);
    }
  }

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`

const StLeft = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  animation: vibrateLeft 2s linear infinite normal both;

  @keyframes vibrateLeft {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    animation: none;
  }
`

const StRightTop = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;

  animation: vibrateRight 2s linear infinite normal both;

  @keyframes vibrateRight {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(-2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    top: 0;
    right: 0;
    animation: none;
  }
`

const StRightBottom = styled.div`
  position: absolute;
  right: -2px;
  bottom: 400px;
  width: 300px;
  height: 600px;

  animation: vibrateBottom 2s linear infinite normal both;

  @keyframes vibrateBottom {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, 2px);
    }
    40% {
      transform: translate(-2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    right: 0;
    bottom: 200px;
    width: 100px;
    height: 200px;
    animation: none;
  }
`

const StLeftBottom = styled.div`
  position: absolute;
  left: -2px;
  bottom: -250px;
  width: 100vw;
  height: 50vh;

  animation: vibrateLeftBottom 2s linear infinite normal both;

  @keyframes vibrateLeftBottom {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(-2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    left: 0;
    bottom: -50px;
    width: 100vw;
    height: 20vh;
    animation: none;
  }
`
