import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { IStackNavigation } from '../../navigation/Navigation.types';
import { Track } from '../../store/track/track.types';

interface IProps extends IStackNavigation {}

const TrackDetail: FC<IProps> = ({ route }) => {
  //@ts-ignore
  const { track }: { track: Track } = route.params;

  return (
    <S.Container>
      <Text>{track.name}</Text>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default TrackDetail;
