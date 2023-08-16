import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Intro from './src/components/screens/IntroScreen';
import AppText from './src/components/appText';
import PhoneNumberScreen from './src/components/screens/PhoneNumberScreen';
import EmailScreen from './src/components/screens/EmailScreen';
import AboutYouScreen from './src/components/screens/AboutYouScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import LoginFinishScreen from './src/components/screens/LoginFinishScreen';

const Stack = createNativeStackNavigator();
function App() {
  const loggedIn = useSelector(state => state.user.loggedIn);
  // need to check weather or not a user is already logged in
  // react-native-keychain to manage session state
  // check if user is logged in

  return !loggedIn ? (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PhoneNumberScreen"
            component={PhoneNumberScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmailScreen"
            component={EmailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AboutYouScreen"
            component={AboutYouScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginFinishScreen"
            component={LoginFinishScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  ) : (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TEST"
            component={AppText}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
