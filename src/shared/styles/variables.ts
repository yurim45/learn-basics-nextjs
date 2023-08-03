import { css } from 'styled-components'

export const FORM_SET = `py-[30px] bg-common-white rounded-[12px] max-[640px]:p-[15px] shadow-lg shadow-black/20 transition duration-200 ease-out hover:translate-y-[-20px] max-[640px]:p-[15px]`
export const formSet = () => css`
  padding: 40px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 1.95px 1.95px 2.6px rgb(0 0 0 / 15%);
  transition: all 0.1s ease-in-out;

  :hover {
    transform: translate(0, -20px);
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 15px;
  }
`

export const SECTION_TITLE = `text-text-333 font-blackHan text-[60px] font-bold text-center max-[640px]:text-[48px]`

export const sectionTitle = () => css`
  color: var(--text-333);
  font-family: 'Black Han Sans', sans-serif;
  font-size: 60px;
  font-weight: 700;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    font-size: 48px;
  }
`

export const pjTitle = () => css`
  color: var(--text-333);
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -0.2px;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    font-size: 28px;
  }
`

export const skillTitle = () => css`
  margin-bottom: 20px;
  color: var(--text-yellow);
  font-size: 28px;
  font-weight: 600;
  white-space: nowrap;

  @media ${({ theme }) => theme.mobile} {
    font-size: 20px;
  }
`

export const pjDesc = () => css`
  margin: 20px;
  color: var(--text-777);
  font-size: 16px;
  letter-spacing: -0.2px;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    margin: 10px 0;
    font-size: 12px;
  }
`

export const pointText = () => css`
  color: var(--text-blue);
  text-decoration: underline;
`

export const TAG_TEXT = `mx-[5px] px-[10px] bg-common-gray text-text-blue text-[14px] font-[500] rounded-[6px]`
