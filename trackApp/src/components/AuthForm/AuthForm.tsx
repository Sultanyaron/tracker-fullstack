import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, Button, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import Spacer from '../../components/Spacer/Spacer';

type StateUpdater = React.Dispatch<React.SetStateAction<string>>;
interface IProps {
  title: string;
  email: string;
  setEmail: StateUpdater;
  password: string;
  setPassword: StateUpdater;
  loading: boolean;
  errorMessage: string;
  onSubmit: () => void;
  linkText: string;
  onLinkPress: () => void;
  submitBtnTitle: string;
}
const AuthForm: FC<IProps> = ({
  title,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  errorMessage,
  onSubmit,
  linkText,
  onLinkPress,
  submitBtnTitle,
}) => {
  return (
    <S.Container>
      <Spacer>
        <Text h3>{title}</Text>
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
      {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
      <Spacer>
        <Button title={submitBtnTitle} onPress={onSubmit} loading={loading} />
      </Spacer>
      <TouchableOpacity onPress={onLinkPress}>
        <Spacer>
          <S.LinkText>{linkText}</S.LinkText>
        </Spacer>
      </TouchableOpacity>
    </S.Container>
  );
};

const Container = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: center;
  margin-bottom: 250px;
`;

const ErrorMessage = styled(Text)`
  font-size: 16px;
  color: red;
  margin-left: 10px;
  margin-top: 15px;
`;

const LinkText = styled(Text)`
  color: blue;
  font-size: 16px;
`;
const S = { Container, ErrorMessage, LinkText };

export default AuthForm;
