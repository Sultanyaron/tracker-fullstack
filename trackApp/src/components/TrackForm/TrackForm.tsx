import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Input, Button, Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { locationSelector } from '../../store/location/location.selectors';
import { changeName, stopRecording, startRecording } from '../../store/location/location.actions';
import Spacer from '../Spacer/Spacer';
import useCreateTrack from '../AuthForm/hooks/useCreateTrack';

interface IProps {}

const TrackForm: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const { name, recording, locations } = useSelector(locationSelector);
  const { createTrack, isSavingTrack, savingTrackError } = useCreateTrack();
  const canSave = !recording && !!locations.length;
  return (
    <S.Container>
      <Input
        placeholder="Name your track"
        value={name}
        onChangeText={text => dispatch(changeName(text))}
      />
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={() => dispatch(stopRecording())} />
        ) : (
          <Button title="Start recording" onPress={() => dispatch(startRecording())} />
        )}
      </Spacer>
      <Spacer>
        {canSave && <Button title="Save Recording" onPress={createTrack} loading={isSavingTrack} />}
      </Spacer>
      {!!savingTrackError && <ErrorMessage>{savingTrackError}</ErrorMessage>}
    </S.Container>
  );
};

const Container = styled.View`
  padding: 15px;
`;

const ErrorMessage = styled(Text)`
  font-size: 16px;
  color: red;
`;

const S = { Container, ErrorMessage };

export default TrackForm;
