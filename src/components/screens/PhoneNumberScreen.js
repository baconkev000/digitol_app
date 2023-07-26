import {StyleSheet, View, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton} from 'react-native-paper';
import React, {useState, useRef} from 'react';
import PhoneNumber from 'libphonenumber-js';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const handlePhoneNumberChange = inputValue => {
    setPhoneNumber(inputValue);
  };

  const handleValidatePhoneNumber = () => {
    try {
      const parsedNumber = PhoneNumber.parsePhoneNumberFromString(phoneNumber);

      if (parsedNumber && parsedNumber.isValid()) {
        // add phone number to user info
        navigation.navigate('EmailScreen');
      } else {
        Alert.alert(
          'Invalid Phone Number',
          'Please enter a valid phone number.',
        );
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'An error occurred while validating the phone number.',
      );
    }
  };
  return (
    <View
      style={[
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        mainStyles.Container,
        styles.container,
      ]}>
      <View style={styles.innerContent}>
        <AppText styles={styles.mainText} text={'LETS START YOUR'} />
        <AppText
          styles={[styles.mainText, mainStyles.AccentText]}
          text={'DIGITOL JOURNEY'}
        />
        <View style={{paddingTop: 50}}>
          <AppText
            styles={{paddingBottom: 20}}
            text={'Enter your mobile number'}
          />
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
      <View style={styles.nextBtnContainer}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          iconColor={'white'}
          size={20}
          title="Validate"
          onPress={() => {
            handleValidatePhoneNumber();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  innerContent: {
    marginTop: 100,
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  invalidMessage: {
    fontSize: 12,
    color: '#e64e4c',
    paddingTop: 5,
  },
  nextBtnContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#21AFFF',
    width: '20%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  phoneInputContainer: {
    width: '100%',
    borderRadius: 20,
    borderColor: '#D9D9D9',
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
