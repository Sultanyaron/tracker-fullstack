import React, { FC, useEffect } from 'react';
import Navigation from './navigation/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { isSignedInSelector, isInitializingAuthSelector } from './store/auth/auth.selectors';
import { initAuthRequest } from './store/auth/auth.actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface IProps {}

const App: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(isSignedInSelector);
  const isInitializingAuth = useSelector(isInitializingAuthSelector);

  useEffect(() => {
    dispatch(initAuthRequest());
  }, [dispatch]);

  return (
    <SafeView>
      {isInitializingAuth ? <Loader size="large" /> : <Navigation {...{ isSignedIn }} />}
    </SafeView>
  );
};

const Loader = styled.ActivityIndicator`
  margin-top: 150px;
`;

const SafeView = styled(SafeAreaView)`
  flex: 1;
`;

export default App;
