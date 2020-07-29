import React, { FC } from 'react';
import styled from 'styled-components/native';

interface IProps {
  margin?: number;
}
const Spacer: FC<IProps> = ({ children, margin }) => {
  return <S.Container margin={margin}>{children}</S.Container>;
};

const Container = styled.View<{ margin?: number }>`
  margin: ${({ margin }) => (margin ? margin : 15)}px;
`;

const S = { Container };

export default Spacer;
