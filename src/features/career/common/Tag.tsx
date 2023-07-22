import React, { ReactNode } from 'react';
import { tagText } from '@shared/styles/variables';
import styled from 'styled-components';

const Tag = ({ children }: { children: ReactNode }) => {
  return <StTag>{children}</StTag>;
};

const StTag = styled.button`
  ${tagText()};
`;

export default Tag;
