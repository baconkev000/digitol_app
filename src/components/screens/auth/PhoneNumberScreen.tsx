import {StyleSheet, View, Alert} from 'react-native';
import mainStyles from '../../../mainStyles';
import AppText from '../../appText';
import {IconButton} from 'react-native-paper';
import React, {useState, useRef} from 'react';
import PhoneNumber from 'libphonenumber-js';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../../app/stores/userReducer';

import {
  PHONE_NUMBER_HELPER,
  PHONE_NUMBER_TEXT,
  ALERT_INVALID_PHONE_NUMBER_DESCRIPTION,
  ALERT_INVALID_PHONE_NUMBER,
  ALERT_ERROR_PHONE_NUMBER,
  ALERT_ERROR_PHONE_NUMBER_DESCRIPTION,
} from '../../../constants/signup.constants';
import KeyboardScreenWrapper from '../../KeyboardScreenWrapper';
import {HELPER_COLOR, ACCENT_COLOR} from '../../../constants/style.constants';
import {useRealm} from '@realm/react';

const PhoneNumberScreen = ({navigation}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const dispatch = useDispatch();
  const realm = useRealm();

  const userExists = (userPhone: string) => {
    return (
      realm.objects('User').filtered('phone_number == $0', userPhone).length ===
      0
    );
  };

  const handlePhoneNumberChange = (inputValue: string) => {
    setPhoneNumber(inputValue);
  };

  const handleValidatePhoneNumber = () => {
    try {
      // @ts-expect-error TS(2339): Property 'parsePhoneNumberFromString' does not exi... Remove this comment to see the full error message
      const parsedNumber = PhoneNumber.parsePhoneNumberFromString(phoneNumber);

      if (
        parsedNumber &&
        parsedNumber.isValid() &&
        userExists(parsedNumber.number)
      ) {
        // add phone number to user info
        dispatch(UPDATEUSER({phone: parsedNumber.number}));
        navigation.navigate('EmailScreen');
      } else {
        Alert.alert(
          ALERT_INVALID_PHONE_NUMBER,
          ALERT_INVALID_PHONE_NUMBER_DESCRIPTION,
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        ALERT_ERROR_PHONE_NUMBER,
        ALERT_ERROR_PHONE_NUMBER_DESCRIPTION,
      );
    }
  };

  return (
    <KeyboardScreenWrapper styles={styles.container}>
      <View style={mainStyles.innerContent}>
        <AppText styles={styles.mainText} text={PHONE_NUMBER_TEXT[0]} />
        <AppText
          styles={[styles.mainText, mainStyles.AccentText]}
          text={PHONE_NUMBER_TEXT[1]}
        />
        <View style={{paddingTop: 50}}>
          <AppText styles={{paddingBottom: 20}} text={PHONE_NUMBER_HELPER} />
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="US"
            onChangeFormattedText={text => {
              handlePhoneNumberChange(text);
            }}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInput}
            countryPickerButtonStyle={styles.contryPickerBtn}
            autoFocus
          />
        </View>
      </View>
      <View style={mainStyles.nextBtnContainer}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          iconColor={'white'}
          size={20}
          onPress={() => {
            handleValidatePhoneNumber();
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
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 5,
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
  phoneInputContainer: {
    width: '100%',
    borderRadius: 20,
    borderColor: HELPER_COLOR,
    borderWidth: 3,
  },
  phoneInput: {
    width: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'FAFAFA',
  },
  contryPickerBtn: {
    backgroundColor: 'trasparent',
  },
});

export default PhoneNumberScreen;
