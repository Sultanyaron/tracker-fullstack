import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { IStackNavigation } from '../../navigation/Navigation.types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracksRequest } from '../../store/track/track.actions';
import { useIsFocused } from '@react-navigation/native';
import { trackSelector } from '../../store/track/track.selectors';

interface IProps extends IStackNavigation {}

const TrackList: FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { tracks } = useSelector(trackSelector);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchTracksRequest());
    }
  }, [dispatch, isFocused]);
  return (
    <S.Container>
      <Text>TrackList</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetailScreen')} />
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TrackDetailScreen', { track: item });
            }}
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </S.Container>
  );
};

const Container = styled.View``;

const S = { Container };

export default TrackList;
