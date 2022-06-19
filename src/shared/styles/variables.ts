import { css } from 'styled-components';

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
    padding: 30px;
  }
`;

export const sectionTitle = () => css`
  color: var(--text-333);
  font-size: 60px;
  font-weight: 700;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    font-size: 48px;
  }
`;

export const pjTitle = () => css`
  color: var(--text-333);
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -0.2px;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    font-size: 36px;
  }
`;

export const pjDesc = () => css`
  margin: 20px;
  color: var(--text-777);
  font-size: 16px;
  letter-spacing: -0.2px;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    font-size: 12px;
  }
`;
