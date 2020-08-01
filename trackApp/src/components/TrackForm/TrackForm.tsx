import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

interface IProps {}

const TrackForm: FC<IProps> = ({}) => {
  return (
    <S.Container>
      <Input placeholder="Name your track" />
      <Button title="Start recording" />
    </S.Container>
  );
};

const Container = styled.View`
  padding: 15px;
`;

const S = { Container };

export default TrackForm;
