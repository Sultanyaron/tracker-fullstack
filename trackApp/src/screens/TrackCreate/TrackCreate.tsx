// import '../../ mocks/_mockLocation';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native-elements';
import Map from '../../components/Map/Map';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

interface IProps {}

const TrackCreate: FC<IProps> = ({}) => {
  const [error, setError] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          console.log(location);
        }
      );
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <S.Container>
      <S.Title h2>Create a track</S.Title>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
    </S.Container>
  );
};

const Container = styled.View``;

const Title = styled(Text)``;

const S = { Container, Title };

export default TrackCreate;
