import {StyleSheet, View} from 'react-native';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {TextInput, Button} from 'react-native-paper';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
import ScreenWrapper from '../ScreenWrapper';
import {
  LOGIN_MAIN_TEXT,
  LOGIN_MAIN_TEXT_HELPER,
} from '../../constants/signup.constants';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';
import {TouchableWithoutFeedback} from 'react-native';
import {useQuery, useRealm} from '@realm/react';
import { User } from 'realm';

const LoginScreen = ({navigation}: any) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const realm = useRealm();
  const te = useQuery('User');

  const userExists = () => {
    const checkEmail = realm
      .objects('User')
      .filtered('email == $0 AND password == $1', emailOrPhone, password);
    const checkPhone = realm
      .objects('User')
      .filtered(
        'phone_number == $0 AND password == $1',
        emailOrPhone,
        password,
      );
    console.log(te);
    console.log(checkEmail, checkPhone);
    return false;
  };

  const dispatch = useDispatch();

  const handleInfoChange = (inputValue: string, stateSelector: string) => {
    switch (stateSelector) {
      case 'emailOrPhone':
        setEmailOrPhone(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      default:
        //do nothing
        break;
    }
  };

  const signIn = () => {
    if (userExists()) {
      //dispatch(UPDATEUSER({phone: parsedNumber.number}));
    }
  };

  return (
    <ScreenWrapper styles={{justifyContent: 'space-between'}}>
      <View style={mainStyles.innerContent}>
        <View style={{paddingBottom: 30}} />
        <View style={styles.mainTextContainer}>
          <AppText styles={styles.mainText} text={LOGIN_MAIN_TEXT} />
          <AppText
            styles={styles.mainTextHelper}
            text={LOGIN_MAIN_TEXT_HELPER}
          />
        </View>
        <View style={{paddingTop: 50}}>
          <TextInput
            label="Email or Phone"
            value={emailOrPhone}
            onChangeText={text => handleInfoChange(text, 'emailOrPhone')}
            mode="outlined"
            outlineStyle={mainStyles.inputOutline}
            contentStyle={mainStyles.inputStyle}
            selectionColor={ACCENT_COLOR}
            outlineColor={ACCENT_COLOR}
            activeOutlineColor={ACCENT_COLOR}
            style={styles.textInputSpacing}
            placeholder="team@ondigitol.com"
            placeholderTextColor={'lightgrey'}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => handleInfoChange(text, 'password')}
            mode="outlined"
            outlineStyle={mainStyles.inputOutline}
            contentStyle={mainStyles.inputStyle}
            selectionColor={ACCENT_COLOR}
            outlineColor={ACCENT_COLOR}
            activeOutlineColor={ACCENT_COLOR}
            style={styles.textInputSpacing}
            placeholder="Password"
            placeholderTextColor={'lightgrey'}
          />
          <AppText text={message} styles={mainStyles.messageStyle} />
          <View style={styles.signInButtonContainer}>
            <Button
              style={[styles.signInButton, styles.button]}
              mode="contained"
              onPress={() => signIn()}>
              <AppText styles={styles.signInButtonText} text={'Sign In'} />
            </Button>
          </View>
        </View>
      </View>
      <View
        style={[
          mainStyles.nextBtnContainer,
          {flexDirection: 'row', alignSelf: 'center'},
        ]}>
        <AppText styles={styles.registerButtonText} text={'Not a Member?'} />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('PhoneNumberScreen')}>
          <View>
            <AppText
              styles={styles.registerButtonTextAccent}
              text={' Register now'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  mainTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signInButtonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 15,
    marginTop: 50,
    padding: 10,
  },
  signInButtonText: {
    color: 'white',
  },
  registerButtonText: {
    color: 'black',
  },
  registerButtonTextAccent: {
    color: ACCENT_COLOR,
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  mainTextHelper: {
    color: HELPER_COLOR,
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  textInputSpacing: {
    marginVertical: 5,
  },
});

export default LoginScreen;
