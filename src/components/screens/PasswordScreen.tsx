import {StyleSheet, View} from 'react-native';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ProgressBar from 'react-native-progress/Bar';
import {CHOOSE_PASSWORD} from '../../constants/signup.constants';
import KeyboardScreenWrapper from '../KeyboardScreenWrapper';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';

const PasswordScreen = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const handlePasswordChange = (inputValue: string, type = 'default') => {
    if (type === 'confirm') {
      setConfirmPassword(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleValidatePassword = () => {
    let isValid = true;
    // Check if the password is at least 8 characters long and password and confirm password are equal
    if (password.length < 8) {
      setMessage('\nPassword must be a minimum of 8 characters');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setMessage('\nPasswords must be the same');
      setConfirmPassword('');
      isValid = false;
    }

    // Check if the password contains at least 1 capital letter and 1 special character
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-])/.test(password)) {
      setMessage(
        '\nPassword must contain at least 1 capital letter and 1 special character',
      );

      isValid = false;
    }

    // If all requirements are met, the password is valid
    return isValid;
  };

  const submitPassword = () => {
    if (handleValidatePassword()) {
      dispatch(
        UPDATEUSER({
          password: password,
        }),
      );
      navigation.navigate('AboutYouScreen');
    }
  };
  return (
    <KeyboardScreenWrapper styles={{justifyContent: 'space-between'}}>
      <View style={mainStyles.innerContent}>
        <View style={{paddingBottom: 30}}>
          <ProgressBar
            progress={0.66}
            width={null}
            borderColor={ACCENT_COLOR}
            color={ACCENT_COLOR}
            // @ts-expect-error TS(2339): Property 'ProgressBar' does not exist on type '{ C... Remove this comment to see the full error message
            style={mainStyles.ProgressBar}
          />
        </View>
        <View style={styles.mainTextContainer}>
          <AppText styles={styles.mainText} text={CHOOSE_PASSWORD[0]} />
          <AppText
            styles={[styles.mainText, mainStyles.AccentText]}
            text={CHOOSE_PASSWORD[1]}
          />
        </View>
        <View style={{paddingTop: 50}}>
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => handlePasswordChange(text)}
            mode="outlined"
            outlineStyle={mainStyles.inputOutline}
            contentStyle={mainStyles.inputStyle}
            selectionColor={ACCENT_COLOR}
            outlineColor={ACCENT_COLOR}
            activeOutlineColor={ACCENT_COLOR}
            placeholder="password"
            placeholderTextColor={'lightgrey'}
            style={styles.textInputSpacing}
          />
        </View>
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={text => handlePasswordChange(text, 'confirm')}
          mode="outlined"
          outlineStyle={mainStyles.inputOutline}
          contentStyle={mainStyles.inputStyle}
          selectionColor={ACCENT_COLOR}
          outlineColor={ACCENT_COLOR}
          activeOutlineColor={ACCENT_COLOR}
          placeholder="confirm password"
          placeholderTextColor={'lightgrey'}
          style={styles.textInputSpacing}
        />
        <AppText text={message} styles={mainStyles.messageStyle} />
      </View>
      <View style={mainStyles.nextBtnContainer}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          iconColor={'white'}
          onPress={() => {
            submitPassword();
          }}
        />
      </View>
    </KeyboardScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  mainTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  checkBox: {
    width: 20,
    height: 20,
    marginVertical: 20,
  },
  nextBtnContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    width: '20%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  updatedContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  updatedText: {paddingBottom: 10},
  updatedHelpText: {
    color: HELPER_COLOR,
    fontSize: 12,
  },
  updatedTextContainer: {
    padding: 20,
    paddingLeft: 15,
  },
  textInputSpacing: {
    marginBottom: 5,
  },
});

export default PasswordScreen;
