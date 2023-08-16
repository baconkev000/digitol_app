import {StyleSheet, View, Alert} from 'react-native';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
import ProgressBar from 'react-native-progress/Bar';
import {
  ALERT_ERROR_EMAIL_DESCRIPTION,
  ALERT_INVALID_EMAIL_DESCRIPTION,
  ALERT_INVALID_EMAIL,
  ALERT_ERROR_EMAIL,
  EMAIL_TEXT,
} from '../../constants/signup.constants';
import ScreenWrapper from '../ScreenWrapper';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';

const EmailScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = React.useState(true);
  const dispatch = useDispatch();
  const handleEmailChange = inputValue => {
    setEmail(inputValue);
  };

  const handleValidateEmail = () => {
    try {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === true) {
        dispatch(UPDATEUSER({email: email, keepUpdated: checked}));
        navigation.navigate('AboutYouScreen');
      } else {
        Alert.alert(ALERT_INVALID_EMAIL, ALERT_INVALID_EMAIL_DESCRIPTION);
      }
    } catch (error) {
      Alert.alert(ALERT_ERROR_EMAIL, ALERT_ERROR_EMAIL_DESCRIPTION);
    }
  };
  return (
    <ScreenWrapper styles={{justifyContent: 'space-between'}}>
      <View style={mainStyles.innerContent}>
        <View style={{paddingBottom: 30}}>
          <ProgressBar
            progress={0.5}
            width={null}
            borderColor="#21AFFF"
            color="#21AFFF"
            style={mainStyles.ProgressBar}
          />
        </View>
        <View style={styles.mainTextContainer}>
          <AppText styles={styles.mainText} text={EMAIL_TEXT[0]} />
          <AppText
            styles={[styles.mainText, mainStyles.AccentText]}
            text={EMAIL_TEXT[1]}
          />
        </View>
        <View style={{paddingTop: 50}}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => handleEmailChange(text)}
            mode="outlined"
            outlineStyle={mainStyles.inputOutline}
            contentStyle={mainStyles.inputStyle}
            selectionColor="#21AFFF"
            outlineColor="#21AFFF"
            activeOutlineColor="#21AFFF"
            placeholder="team@ondigitol.com"
            placeholderTextColor={{color: 'lightgrey'}}
          />
        </View>
        <View style={styles.updatedContainer}>
          <CheckBox
            disabled={false}
            value={checked}
            onValueChange={() => setChecked(!checked)}
            boxType="square"
            style={styles.checkBox}
          />
          <View style={styles.updatedTextContainer}>
            <AppText styles={styles.updatedText} text={'Keep Me Updated'} />
            <AppText
              styles={styles.updatedHelpText}
              text={
                'I want to recieve updates about the product, new features, and more.'
              }
            />
          </View>
        </View>
      </View>
      <View style={mainStyles.nextBtnContainer}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          iconColor={'white'}
          size={20}
          title="Validate"
          onPress={() => {
            handleValidateEmail();
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  mainTextContainer: {
    display: 'flex',
    flexDirection: 'col',
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
});

export default EmailScreen;
