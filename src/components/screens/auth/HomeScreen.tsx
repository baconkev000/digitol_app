import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import AppText from '../../appText';
import {
  INTRO_TEXT,
  INTRO_TEXT_HELPER,
} from '../../../constants/signup.constants';
import KeyboardScreenWrapper from '../../KeyboardScreenWrapper';
import {HELPER_COLOR, ACCENT_COLOR} from '../../../constants/style.constants';
import {useApp} from '@realm/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: any) => {
  const app = useApp();
  const logout = async () => {
    await app.currentUser?.logOut();
  };
  return (
    <KeyboardScreenWrapper>
      <View style={styles.container}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.textContainer}>
            <AppText
              styles={[styles.introText, styles.allText]}
              text={INTRO_TEXT}
            />
            <AppText
              styles={[styles.introTextHelper, styles.allText]}
              text={INTRO_TEXT_HELPER}
            />
            <Button onPress={() => logout()} title="logout" />
          </View>
        </View>
      </View>
    </KeyboardScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 300,
    width: 300,
  },
  textContainer: {
    width: '75%',
    paddingBottom: 75,
  },
  allText: {
    textAlign: 'center',
  },
  introText: {
    color: 'black',
    fontSize: 40,
    paddingBottom: 10,
  },
  introTextHelper: {
    color: HELPER_COLOR,
    fontSize: 15,
  },
  doubleButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginBottom: 25,
  },
  button: {
    width: '50%',
  },
  registerButton: {
    backgroundColor: ACCENT_COLOR,
    width: '100%',
    borderRadius: 15,
    padding: 15,
  },
  registerButtonText: {
    color: 'white',
  },
  signInButton: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    borderRadius: 15,
    padding: 15,
  },
  signInButtonText: {
    color: 'black',
  },
});

export default HomeScreen;
