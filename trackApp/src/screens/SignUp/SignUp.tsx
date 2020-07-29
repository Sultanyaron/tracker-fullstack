import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface IProps {}

const SignUp: FC<IProps> = ({}) => {
  return (
    <S.Container>
      <Text>SignUp</Text>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default SignUp;
