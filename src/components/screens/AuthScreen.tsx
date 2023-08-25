import * as React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {store} from '../../app/stores/store';
import {Provider as StoreProvder} from 'react-redux';
import IntroScreen from './auth/IntroScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const AuthScreen = () => {
  return (
    <StoreProvder store={store}>
      <PaperProvider theme={theme}>
        <IntroScreen />
      </PaperProvider>
    </StoreProvder>
  );
};

export default AuthScreen;
