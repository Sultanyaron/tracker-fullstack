import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider as ReduxProvider } from 'react-redux';

import { name as appName } from './app.json';
import store from './src/store/store';

const WrappedApp = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
