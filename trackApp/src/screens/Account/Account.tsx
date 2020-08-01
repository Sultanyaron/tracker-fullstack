import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/auth.actions';
import Spacer from '../../components/Spacer/Spacer';
interface IProps {}

const Account: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <S.Container>
      <Spacer>
        <Button onPress={() => dispatch(logout())} title="Sign Out" />
      </Spacer>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default Account;
