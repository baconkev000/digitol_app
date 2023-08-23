import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import AppText from '../appText';
import {INTRO_TEXT, INTRO_TEXT_HELPER} from '../../constants/signup.constants';
import ScreenWrapper from '../ScreenWrapper';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';
const HomeScreen = ({navigation}: any) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/digitol_logo.png')}
          style={styles.logo}
        />
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
          </View>
        </View>
      </View>
    </ScreenWrapper>
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
