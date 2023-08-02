import {StyleSheet, View, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {isValid, parse} from 'date-fns';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
import ProgressBar from 'react-native-progress/Bar';

const AboutYouScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOBName] = useState('');
  const dispatch = useDispatch();

  const handleInfoChange = (inputValue, stateSelector) => {
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
  const isEmptyOrSpaces = str => {
    return str === null || str.match(/^ *$/) !== null;
  };

  const handleValidateForm = () => {
    try {
      if (isDOBValid()) {
        if (!isEmptyOrSpaces(firstName) && !isEmptyOrSpaces(lastName)) {
          dispatch(
            UPDATEUSER({
              firstName: firstName,
              middleName: middleName,
              lastName: lastName,
              dob: DOB,
            }),
          );
        } else {
          Alert.alert('Invalid Name', 'Please enter a valid name.');
        }
      } else {
        Alert.alert(
          'Invalid Birth Date',
          'Please enter a valid birth date\n (dd/mm/yyy).',
        );
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while validating the email.');
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
      <View style={mainStyles.innerContent}>
        <View style={{paddingBottom: 30}}>
          <ProgressBar
            progress={0.75}
            width={null}
            borderColor="#21AFFF"
            color="#21AFFF"
            style={mainStyles.ProgressBar}
          />
        </View>
        <View style={styles.mainTextContainer}>
          <AppText styles={styles.mainText} text={'ABOUT '} />
          <AppText
            styles={[styles.mainText, mainStyles.AccentText]}
            text={'YOU'}
          />
        </View>
        <View style={{paddingTop: 50}}>
          <TextInput
            label="First Name"
            value={firstName}
            onChangeText={text => handleInfoChange(text, 'first')}
            mode="outlined"
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputStyle}
            selectionColor="#21AFFF"
            outlineColor="#21AFFF"
            activeOutlineColor="#21AFFF"
          />
          <TextInput
            label="Middle Name (optional)"
            value={middleName}
            onChangeText={text => handleInfoChange(text, 'middle')}
            mode="outlined"
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputStyle}
            selectionColor="#21AFFF"
            outlineColor="#21AFFF"
            activeOutlineColor="#21AFFF"
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={text => handleInfoChange(text, 'last')}
            mode="outlined"
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputStyle}
            selectionColor="#21AFFF"
            outlineColor="#21AFFF"
            activeOutlineColor="#21AFFF"
          />
          <TextInput
            label="Date of Birth"
            value={DOB}
            onChangeText={text => handleInfoChange(text, 'dob')}
            mode="outlined"
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputStyle}
            selectionColor="#21AFFF"
            outlineColor="#21AFFF"
            activeOutlineColor="#21AFFF"
            placeholder="dd/mm/yyyy"
            placeholderTextColor={{color: 'lightgrey'}}
            maxLength={10}
            keyboardType="number-pad"
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
            handleValidateForm();
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
    backgroundColor: '#21AFFF',
    width: '20%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  inputOutline: {
    borderRadius: 15,
    borderColor: 'transparent',
  },
  inputStyle: {
    backgroundColor: '#FAFAFA',
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius: 15,
    marginVertical: 5,
  },
  updatedContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  updatedText: {paddingBottom: 10},
  updatedHelpText: {
    color: 'grey',
    fontSize: 12,
  },
  updatedTextContainer: {
    padding: 20,
    paddingLeft: 15,
  },
});

export default AboutYouScreen;
