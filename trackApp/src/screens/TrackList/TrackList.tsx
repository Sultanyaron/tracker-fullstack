import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface IProps {}

const TrackList: FC<IProps> = ({}) => {
  return (
    <S.Container>
      <Text>TrackList</Text>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default TrackList;
