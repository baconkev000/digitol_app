import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {RealmProvider, AppProvider, UserProvider} from '@realm/react';
import {User} from './src/db/models/user';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {store} from './src/app/stores/store';
import {Provider as StoreProvder} from 'react-redux';
import AuthScreen from './src/components/screens/AuthScreen';
import App from './App';
//import app id from config
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function Main() {
  return (
    <SafeAreaProvider>
      <AppProvider id={'digitol-app-ydnxx'}>
        <UserProvider fallback={AuthScreen}>
          <RealmProvider
            schema={[User]}
            sync={{
              flexible: true,
              onError: console.error,
              initialSubscriptions: {
                update(subs, realm) {
                  subs.add(realm.objects(User));
                },
              },
            }}>
            <StoreProvder store={store}>
              <PaperProvider theme={theme}>
                <App />
              </PaperProvider>
            </StoreProvder>
          </RealmProvider>
        </UserProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
