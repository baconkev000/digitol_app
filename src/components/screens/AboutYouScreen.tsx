import {StyleSheet, View, Alert} from 'react-native';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {isValid, parse} from 'date-fns';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ProgressBar from 'react-native-progress/Bar';
import {
  ALERT_ERROR_NAME_OR_DOB,
  ALERT_ERROR_NAME_OR_DOB_DESCRIPTION,
  ALERT_INVALID_NAME,
  ALERT_INVALID_DOB,
  ALERT_INVALID_NAME_DESCRIPTION,
  ALERT_INVALID_DOB_DESCRIPTION,
} from '../../constants/signup.constants';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';
import uuid from 'react-native-uuid';
import KeyboardScreenWrapper from '../KeyboardScreenWrapper';

const AboutYouScreen = ({navigation}: any) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOBName] = useState('');
  const dispatch = useDispatch();

  const handleInfoChange = (inputValue: string, stateSelector: string) => {
    switch (stateSelector) {
      case 'first':
        setFirstName(inputValue);
        break;
      case 'last':
        setLastName(inputValue);
        break;
      case 'middle':
        setMiddleName(inputValue);
        break;
      case 'dob':
        // Remove any non-numeric characters from the input
        const cleanText = inputValue.replace(/\D/g, '');

        // Format the input with slashes after every 2 characters
        // Format the input with slashes as DD/MM/YYYY
        let formattedBirthday = '';
        for (let i = 0; i < cleanText.length; i++) {
          if (i === 2 || i === 4) {
            formattedBirthday += '/';
          }
          formattedBirthday += cleanText[i];
        }

        setDOBName(formattedBirthday);
        break;
      default:
        //do nothing
        break;
    }
  };

  const isDOBValid = () => {
    // Check if the input is a string
    if (typeof DOB !== 'string') {
      return false;
    }
    // Split the input into day, month, and year
    const [month, day, year] = DOB.split('/');

    // Check if there are exactly three parts after splitting
    if (day === undefined || month === undefined || year === undefined) {
      return false;
    }

    // Parse the input as a date using the date-fns library
    const parsedDate = parse(
      `${year}-${month}-${day}`,
      'yyyy-MM-dd',
      new Date(),
    );
    // Check if the parsed date is valid and represents a valid dob
    if (
      !isValid(parsedDate) ||
      parsedDate.getFullYear() < 1900 ||
      parsedDate > new Date()
    ) {
      return false;
    }

    return true;
  };
  const isEmptyOrSpaces = (str: string) => {
    return str === null || str.match(/^ *$/) !== null;
  };

  const handleValidateForm = () => {
    try {
      if (isDOBValid()) {
        if (!isEmptyOrSpaces(firstName) && !isEmptyOrSpaces(lastName)) {
          dispatch(
            UPDATEUSER({
              userID: uuid.v4().toString(),
              firstName: firstName,
              middleName: middleName,
              lastName: lastName,
              dob: DOB,
            }),
          );
          navigation.navigate('LoginFinishScreen');
        } else {
          Alert.alert(ALERT_INVALID_NAME, ALERT_INVALID_NAME_DESCRIPTION);
        }
      } else {
        Alert.alert(ALERT_INVALID_DOB, ALERT_INVALID_DOB_DESCRIPTION);
      }
    } catch (error) {
      Alert.alert(ALERT_ERROR_NAME_OR_DOB, ALERT_ERROR_NAME_OR_DOB_DESCRIPTION);
    }
  };
  return (
    <KeyboardScreenWrapper styles={{justifyContent: 'space-between'}}>
      <View style={{paddingBottom: 30}}>
        <ProgressBar
          progress={0.99}
          width={null}
          borderColor={ACCENT_COLOR}
          color={ACCENT_COLOR}
        />
      </View>
      <View style={styles.mainTextContainer}>
        <AppText styles={styles.mainText} text={'ABOUT '} />
        <AppText
          styles={[styles.mainText, mainStyles.AccentText]}
          text={'YOU'}
        />
      </View>
      <View style={mainStyles.innerContent}>
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={text => handleInfoChange(text, 'first')}
          mode="outlined"
          outlineStyle={mainStyles.inputOutline}
          contentStyle={mainStyles.inputStyle}
          selectionColor={ACCENT_COLOR}
          outlineColor={ACCENT_COLOR}
          activeOutlineColor={ACCENT_COLOR}
          style={styles.textInputSpacing}
        />
        <TextInput
          label="Middle Name (optional)"
          value={middleName}
          onChangeText={text => handleInfoChange(text, 'middle')}
          mode="outlined"
          outlineStyle={mainStyles.inputOutline}
          contentStyle={mainStyles.inputStyle}
          selectionColor={ACCENT_COLOR}
          outlineColor={ACCENT_COLOR}
          activeOutlineColor={ACCENT_COLOR}
          style={styles.textInputSpacing}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={text => handleInfoChange(text, 'last')}
          mode="outlined"
          outlineStyle={mainStyles.inputOutline}
          contentStyle={mainStyles.inputStyle}
          selectionColor={ACCENT_COLOR}
          outlineColor={ACCENT_COLOR}
          activeOutlineColor={ACCENT_COLOR}
          style={styles.textInputSpacing}
        />
        <TextInput
          label="Date of Birth"
          value={DOB}
          onChangeText={text => handleInfoChange(text, 'dob')}
          mode="outlined"
          outlineStyle={mainStyles.inputOutline}
          contentStyle={mainStyles.inputStyle}
          selectionColor={ACCENT_COLOR}
          outlineColor={ACCENT_COLOR}
          activeOutlineColor={ACCENT_COLOR}
          placeholder="dd/mm/yyyy"
          maxLength={10}
          keyboardType="number-pad"
          style={styles.textInputSpacing}
        />
      </View>

      <View style={mainStyles.nextBtnContainer}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          iconColor={'white'}
          size={20}
          onPress={() => {
            handleValidateForm();
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
    marginVertical: 5,
  },
});

export default AboutYouScreen;
