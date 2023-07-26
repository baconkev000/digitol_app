import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Intro from './src/components/screens/IntroScreen';
import AppText from './src/components/appText';
import PhoneNumberScreen from './src/components/screens/PhoneNumberScreen';
import EmailScreen from './src/components/screens/EmailScreen';

const Stack = createNativeStackNavigator();

function App() {
  const loggedIn = useSelector(state => state.loggedIn.value);
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
            name="PhoneNumberScreen"
            component={PhoneNumberScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="EmailScreen"
            component={EmailScreen}
            options={{headerShown: true}}
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
