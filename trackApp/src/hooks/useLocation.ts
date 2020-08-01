import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync, LocationData } from 'expo-location';

const useLocation = (onLocationChange: (location: LocationData) => void, shouldTrack: boolean) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubsriber] = useState<{ remove: () => void } | null>(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      const subs = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          onLocationChange(location);
        }
      );
      setSubsriber(subs);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else if (subscriber) {
      subscriber?.remove();
      setSubsriber(null);
    }
  }, [shouldTrack]);

  return { error };
};

export default useLocation;
