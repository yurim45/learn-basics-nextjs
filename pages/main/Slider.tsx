import type { NextPage } from "next";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { flexSet } from "common/styles/Variable";

type dataType = {
  id: number;
  imgUrl: string;
  imgAlt: string;
};

const IMG_DATA: dataType[] = [
  {
    id: 0,
    imgUrl:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    imgAlt: "camping",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    imgAlt: "camping",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    imgAlt: "camping",
  },
];

const Slider: NextPage = () => {
  const slideRef: any = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(IMG_DATA.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentSlide >= IMG_DATA.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = `all 0.5s ease-in-out`;
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <SliderWarp>
      {currentSlide > 0 && (
        <button className='prev' onClick={handlePrevBtn}>
          {"<"}
        </button>
      )}
      {currentSlide < IMG_DATA.length - 1 && (
        <button className='next' onClick={handleNextBtn}>
          {">"}
        </button>
      )}
      <div className='container' ref={slideRef}>
        {IMG_DATA.map((img) => {
          return <img alt={img.imgAlt} src={img.imgUrl} />;
        })}
      </div>
    </SliderWarp>
  );
};

export default Slider;

const SliderWarp = styled.div`
  width: 600px;
  margin: auto;
  overflow: hidden;

  .container {
    ${flexSet("flex-start", "center", "column")};
  }

  .prev,
  .next {
    position: absolute;
    top: 29%;
    padding: 10px 12px 6px;
    color: ${({ theme }) => theme.colors.gray};
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: ${({ theme }) => theme.colors.gray};
      color: #fff;
    }
  }
  .prev {
    left: 310px;
  }
  .next {
    right: 310px;
  }

  .block {
    display: none;
  }
`;
