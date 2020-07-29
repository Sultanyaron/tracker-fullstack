import React, { FC } from 'react';
import styled from 'styled-components/native';
import { IStackNavigation } from '../../navigation/Navigation.types';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer/Spacer';

interface IProps extends IStackNavigation {}
const SignUp: FC<IProps> = ({ navigation }) => {
  return (
    <S.Container>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </S.Container>
  );
};

const styles = StyleSheet.create({});

const Container = styled.View`
  padding: 20px;
`;

const S = { Container };

export default SignUp;
