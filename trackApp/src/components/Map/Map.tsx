import React, { FC } from 'react';
import styled from 'styled-components/native';
import MapView, { Circle } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { currentLocationSelector } from '../../store/location/location.selectors';

interface IProps {}

const Map: FC<IProps> = ({}) => {
  const currentLocation = useSelector(currentLocationSelector);

  if (!currentLocation) {
    return <S.Loader size="large" />;
  }
  return (
    <S.Container>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        {/* <Polyline coordinates={points} /> */}
      </MapView>
    </S.Container>
  );
};

const Container = styled.View``;
const Loader = styled.ActivityIndicator`
  margin-top: 200px;
`;

const S = { Container, Loader };

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
