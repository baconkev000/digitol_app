import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {useApp, RealmProvider, AppProvider, UserProvider} from '@realm/react';
import {store} from './src/app/stores/store';
import { Provider as StoreProvder } from 'react-redux';
//import app id from config


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};
export default function Main() {
  return (
      
        <RealmProvider >
          <StoreProvder store={store}>
            <PaperProvider theme={theme}>
              <App />
            </PaperProvider>
          </StoreProvder>
        </RealmProvider>
  );
}

// export default function Main() {
//   return (
//     <AppProvider id={'digitol-0'}>
//       <UserProvider>
//         <RealmProvider sync={{
//             flexible: true,
//             onError: console.error,
//             initialSubscriptions: {
//               update(subs, realm) {
//                 subs.add(realm.objects('User'));
//               },
//             },
//           }}>
//           <StoreProvder store={store}>
//             <PaperProvider theme={theme}>
//               <App />
//             </PaperProvider>
//           </StoreProvder>
//         </RealmProvider>
//       </UserProvider>
//     </AppProvider>
//   );
// }

AppRegistry.registerComponent(appName, () => Main);
