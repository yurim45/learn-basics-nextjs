import React, { ReactNode } from 'react'
import { styled } from '@shared/styles/theme'
// import { sectionTitle } from '@shared/styles/variables'

type GridLayoutProps = {
  pageTitle: string
  children: ReactNode
  color?: string
  bgColor?: string
  lineColor?: string
  id?: string
}

const GridLayout = ({
  pageTitle,
  children,
  bgColor = 'white',
  color = 'text-333',
  lineColor = 'blue',
  id,
}: GridLayoutProps) => {
  return (
    <StSction bgColor={bgColor} id={id}>
      <Inner color={color}>
        <h2>{pageTitle}</h2>
        <StLine lineColor={lineColor} />
        <StContent>{children}</StContent>
      </Inner>
    </StSction>
  )
}

export default GridLayout

const StSction = styled.section<{ bgColor: string }>`
  width: 100vw;
  padding: 150px 0;
  background: ${({ bgColor }) => `var(--${bgColor})`};

  @media ${({ theme }) => theme.mobile} {
    padding: 100px 0;
  }
`

const Inner = styled.div<{ color: string }>`
  max-width: 1140px;
  margin: auto;

  h2 {
    color: ${({ color }) => `var(--${color})`};
    font-family: 'Black Han Sans', sans-serif;
  }
`

const StLine = styled.div<{ lineColor: string }>`
  width: 50px;
  margin: 50px auto;
  border-bottom: 2px solid ${({ lineColor }) => `var(--${lineColor})`};
`

const StContent = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(230px, 1fr));

  .frontend {
    grid-row: 1 / 3;
  }

  @media ${({ theme }) => theme.mobile} {
    margin: 30px;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    grid-auto-flow: dense;
  }
`
