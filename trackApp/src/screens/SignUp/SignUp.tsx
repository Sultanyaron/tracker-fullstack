import React, { FC } from 'react';
import styled from 'styled-components/native';
import { IStackNavigation } from '../../navigation/Navigation.types';
import { Text, Button, Input } from 'react-native-elements';
// import { StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer/Spacer';
import useSignUp from './hooks/useSignUp';

interface IProps extends IStackNavigation {}
const SignUp: FC<IProps> = ({}) => {
  const { email, password, setEmail, setPassword } = useSignUp();
  return (
    <S.Container>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </S.Container>
  );
};

// const styles = StyleSheet.create({});

const Container = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: center;
  margin-bottom: 250px;
`;

const S = { Container };

export default SignUp;
