import React from 'react';
import PjLayout from '../common/PjLayout';
import { img1, img2, img3, img4 } from './images/index';

const Attendance = () => {
  return (
    <PjLayout
      title="근태관리 프로그램"
      subTitle="2021-06-07 ~ 07-01 / FE: 2명, BE: 1명"
      images={[img1, img2, img3, img4]}
      desc="근태 등록, 근무제 선택 및 신청, 연차 등 휴가 관리 등의 근태관리 프로그램 개발 프로젝트"
      feat="✔︎ 사용자페이지, 마이페이지, 관리자페이지로 구성된 프로그램입니다. <br /> 
            ✔︎ 각 권한별 페이지 진입 및 관리 가능. <br />
            ㅤ● 기본 근태 입력 및 조회 <br />
            ㅤ● 휴가 신청 및 근무제 신청 및 조회<br />
            ㅤ● 근로시간 및 초과근무, 출•퇴근 시간 시각화 <br />
            ㅤ● 출•퇴근 기록 조회 및 검색 기능"
      GitHubAdd="github.com/yurim45/b2tech-intern-20-front"
      tech={['HTML', 'Styled component', 'Javascript', 'React']}
    />
  );
};

export default Attendance;
