import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import AppText from '../appText';
import {ALL_DONE} from '../../constants/signup.constants';
import ScreenWrapper from '../ScreenWrapper';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';

const LoginFinishScreen = ({navigation}) => {
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
              text={ALL_DONE}
            />
          </View>
          <Button
            style={[styles.ToDigitolBtn, styles.button]}
            mode="contained"
            onPress={() => navigation.navigate('PhoneNumberScreen')}>
            <AppText
              styles={styles.ToDigitolBtnText}
              text={'Continue to Digitol'}
            />
          </Button>
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
  doubleButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginBottom: 25,
  },
  button: {
    width: '100%',
  },
  ToDigitolBtn: {
    backgroundColor: ACCENT_COLOR,
    width: '100%',
    borderRadius: 15,
    padding: 15,
  },
  ToDigitolBtnText: {
    color: 'white',
  },
});

export default LoginFinishScreen;
