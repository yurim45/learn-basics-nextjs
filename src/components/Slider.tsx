import React, { useEffect, useState, useRef, ReactNode } from 'react';
import flex from '@shared/styles/flex';
import styled from 'styled-components';

type SliderProps = {
  children: ReactNode[];
};

const Slider = ({ children }: SliderProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrevBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(children?.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentSlide >= children?.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    // slideRef.current.style.transform = `translateX{${800 * currentSlide}}px`;
  }, [currentSlide]);

  return (
    <SliderWarp currentSlide={currentSlide} length={children?.length}>
      {currentSlide > 0 && (
        <button className="prev" onClick={handlePrevBtn}>
          {'<'}
        </button>
      )}
      {currentSlide < children?.length - 1 && (
        <button className="next" onClick={handleNextBtn}>
          {'>'}
        </button>
      )}
      <div className="container">{children}</div>
    </SliderWarp>
  );
};

export default Slider;

const SliderWarp = styled.div<{ currentSlide: number; length: number }>`
  width: 1000px;
  overflow: hidden;

  .prev,
  .next {
    position: relative;
    top: 225px;
    padding: 10px 12px 6px;
    color: var(--yellow);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    z-index: 200;

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: var(--compo-lightgray);
      color: var(--white);
    }
  }
  .prev {
    left: 5px;
  }
  .next {
    right: 805px;
  }

  .container {
    ${flex({ justify: 'start' })};
    width: ${({ length }) => `${length * 800}px`};
    transition: all 0.5s ease-in-out;
    transform: ${({ currentSlide }) => `translateX{${800 * currentSlide}}px`};
  }
`;
