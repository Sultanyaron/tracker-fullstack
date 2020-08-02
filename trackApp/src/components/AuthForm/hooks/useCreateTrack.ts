import { useSelector, useDispatch } from 'react-redux';
import { trackSelector } from '../../../store/track/track.selectors';
import { locationSelector } from '../../../store/location/location.selectors';
import { createTrackRequest } from '../../../store/track/track.actions';
import { resetLocationState } from '../../../store/location/location.actions';
import { useNavigation } from '@react-navigation/native';

const useCreateTrack = () => {
  const dispatch = useDispatch();
  const { savingTrackError, isSavingTrack } = useSelector(trackSelector);
  const { locations, name } = useSelector(locationSelector);
  const navigation = useNavigation();
  const formSuccessCallback = () => {
    navigation.navigate('TrackStack');
    dispatch(resetLocationState());
  };
  const createTrack = () => {
    dispatch(createTrackRequest({ name, locations, formSuccessCallback }));
  };
  return { createTrack, savingTrackError, isSavingTrack };
};

export default useCreateTrack;
