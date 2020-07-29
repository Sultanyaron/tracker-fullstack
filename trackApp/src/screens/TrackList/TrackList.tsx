import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { IStackNavigation } from '../../navigation/Navigation.types';

interface IProps extends IStackNavigation {}

const TrackList: FC<IProps> = ({ navigation }) => {
  return (
    <S.Container>
      <Text>TrackList</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetailScreen')} />
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default TrackList;
