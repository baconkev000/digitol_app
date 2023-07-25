import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import store from './src/app/stores/store';
import {Provider as StoreProvder} from 'react-redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function Main() {
  return (
    <StoreProvder store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvder>
  );
}

AppRegistry.registerComponent(appName, () => Main);
