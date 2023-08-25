import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import PhoneNumberScreen from './src/components/screens/auth/PhoneNumberScreen';
import EmailScreen from './src/components/screens/auth/EmailScreen';
import AboutYouScreen from './src/components/screens/auth/AboutYouScreen';
import LoginScreen from './src/components/screens/auth/LoginScreen';
import RegisterFinishScreen from './src/components/screens/auth/RegisterFinishScreen';
import PasswordScreen from './src/components/screens/auth/PasswordScreen';
import HomeScreen from './src/components/screens/auth/HomeScreen';
import {RootState} from './src/app/stores/store';

const Stack = createNativeStackNavigator();
function App() {
  const initialRoute = useSelector(
    (state: RootState) => state.user.initialRoute,
  );
  // need to check weather or not a user is already logged in
  // react-native-keychain to manage session state
  // check if user is logged in

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneNumberScreen"
          component={PhoneNumberScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutYouScreen"
          component={AboutYouScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RegisterFinishScreen"
          component={RegisterFinishScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
