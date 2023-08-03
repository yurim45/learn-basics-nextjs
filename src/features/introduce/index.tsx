import React from 'react'
import Image from 'next/image'
import { Layout } from '@components/index'
import me from '@images/yurim.png'
import { flexLayout } from '@shared/styles/flex'

const Introduce = () => {
  return (
    <Layout pageTitle="About Me" id="aboutMe">
      <div
        className={`${flexLayout(
          {}
        )} py-[20px] max-[640px]:flex-col max-[640px]:gap-[20px]`}
      >
        <Image
          alt="me"
          src={me}
          className="w-[300px] h-[300px] rounded-full max-[640px]:w-[250px] max-[640px]:h-[250px]"
        />
        <div className="text-text-333 pl-[150px] max-[640px]:p-0 max-[640px]:text-center">
          <strong className="text-[32px] font-extrabold text-center tracking-[10px]">
            김유림
          </strong>
          <span className="text-text-777 text-[18px] max-[640px]:block max-[640px]:text-[16px]">
            Frontend Developer
          </span>
          <p className="my-[20px] text-[18px] leading-[1.2] max-[640px]:text-[16px]">
            함께 일 하고 싶은 개발자, <br />
            사용자 관점에서 개발하는 프론트엔드 개발자
          </p>
          <h3 className="text-[24px] font-bold">Contact.</h3>
          <p className="my-[20px] text-[18px] leading-[1.2] max-[640px]:text-[14px]">
            Email. icho0405@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Introduce
