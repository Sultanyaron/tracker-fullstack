import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface IProps {}

const TrackCreate: FC<IProps> = ({}) => {
  return (
    <S.Container>
      <Text>TrackCreate</Text>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default TrackCreate;
