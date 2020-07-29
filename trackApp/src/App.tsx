import React, { FC } from 'react';
import Navigation from './navigation/Navigation';

interface IProps {}

const App: FC<IProps> = ({}) => {
  const isSignedIn = false;
  return <Navigation {...{ isSignedIn }} />;
};

export default App;
