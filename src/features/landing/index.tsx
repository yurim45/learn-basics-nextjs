import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { leftTop, bottom, rightBottom, rightTop } from '@images/landing/index'

const Landing = () => {
  return (
    <main className="w-[100vw] h-[100vh] my-0 mx-auto bg-compo-primary text-text-555">
      <div>
        <div className="absolute top-[-2px] left-[-2px] animate-vibrateLeft max-[640px]:animate-none">
          <Image
            alt="flower"
            src={leftTop}
            width={939}
            height={872}
            priority={true}
            className="drop-shadow-xl"
          />
        </div>
        <div className="absolute top-[-2px] right-[-2px] animate-vibrateRight max-[640px]:top-[0] max-[640px]:right-[0] max-[640px]:animate-none">
          <Image
            alt="flower"
            src={rightTop}
            width={805}
            height={322}
            priority={true}
            className="drop-shadow-xl"
          />
        </div>
        <div className="absolute right-[-2px] bottom-[400px] animate-vibrateBottom max-[640px]:right-[0] max-[640px]:left-[-250px] max-[640px]:w-[100px] max-[640px]:h-[200px] max-[640px]:animate-none">
          <Image alt="flower" src={rightBottom} className="drop-shadow-xl" />
        </div>
        <div className="absolute left-[-2px] bottom-[-250px] animate-vibrateLeftBottom max-[640px]:left-[0] max-[640px]:bottom-[-50px] max-[640px]:w-[100vw] max-[640px]:h-[20vh] max-[640px]:animate-none">
          <Image
            alt="flower"
            src={bottom}
            priority={true}
            className="drop-shadow-xl"
          />
        </div>
      </div>
      <div
        className={`flex justify-center flex-col m-auto w-[90vw] h-[100vh] text-center text-white`}
      >
        <h1 className="mb-[100px] text-[80px] font-extrabold tracking-tight font-blackHan animate-trackingInExpand z-[10] max-[640px]:text-[48px]">
          Imagination becomes reality
        </h1>
        <strong className="text-[24px]">{"April's world"}</strong>
        <Link to="aboutMe" smooth={true}>
          <button className="absolute bottom-[50px] w-[50px] h-[50px] left-[calc(50%-25px)] bg-common-white/50 rounded-full text-[20px] animate-blinkEffect">
            ▼
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Landing
