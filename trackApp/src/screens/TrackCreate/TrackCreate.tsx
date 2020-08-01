import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native-elements';
import Map from '../../components/Map/Map';

interface IProps {}

const TrackCreate: FC<IProps> = ({}) => {
  return (
    <S.Container>
      <S.Title h2>Create a track</S.Title>
      <Map />
    </S.Container>
  );
};

const Container = styled.View``;

const Title = styled(Text)``;

const S = { Container, Title };

export default TrackCreate;
