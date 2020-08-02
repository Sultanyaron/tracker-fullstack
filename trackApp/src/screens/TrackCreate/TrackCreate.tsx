// import '../../ mocks/_mockLocation';
import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native-elements';
import Map from '../../components/Map/Map';
import TrackForm from '../../components/TrackForm/TrackForm';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from '../../store/location/location.actions';
import useLocation from '../../hooks/useLocation';
import { LocationData } from 'expo-location';
import { useIsFocused } from '@react-navigation/native';
import { recordingSelector } from '../../store/location/location.selectors';

interface IProps {}

const TrackCreate: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const onLocationChange = (location: LocationData) => dispatch(addLocation(location));
  const recording = useSelector(recordingSelector);
  const isFocused = useIsFocused();
  const { error } = useLocation(onLocationChange, isFocused || recording);

  return (
    <S.Container>
      <S.Title h2>Create a track</S.Title>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </S.Container>
  );
};

const Container = styled.View``;

const Title = styled(Text)``;

const S = { Container, Title };

export default TrackCreate;
