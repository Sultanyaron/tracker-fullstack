import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { IStackNavigation } from '../../navigation/Navigation.types';

interface IProps extends IStackNavigation {}

const SignIn: FC<IProps> = ({ navigation }) => {
  return (
    <S.Container>
      <Text>SignIn</Text>
      <Button title="Go to signup" onPress={() => navigation.navigate('SignUpScreen')} />
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default SignIn;
