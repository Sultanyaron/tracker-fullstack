import React, { FC } from 'react';
import styled from 'styled-components/native';
import MapView, { Polyline, LatLng } from 'react-native-maps';
import { StyleSheet } from 'react-native';

interface IProps {}

const Map: FC<IProps> = ({}) => {
  let points = [] as LatLng[];

  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.33233 + i * 0.002,
        longitude: -122.03121 + i * 0.001,
      });
    }
  }

  return (
    <S.Container>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
