import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface IProps {}

const TrackDetail: FC<IProps> = ({}) => {
  return (
    <S.Container>
      <Text>TrackDetail</Text>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default TrackDetail;
