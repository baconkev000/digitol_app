import {StyleSheet, View, Alert} from 'react-native';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton, TextInput, Button} from 'react-native-paper';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
import ScreenWrapper from '../ScreenWrapper';
import {
  LOGIN_MAIN_TEXT,
  LOGIN_MAIN_TEXT_HELPER,
} from '../../constants/signup.constants';
import {HELPER_COLOR, ACCENT_COLOR} from '../../constants/style.constants';

const LoginScreen = ({navigation}: any) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <ScreenWrapper styles={styles.container}>
      <View style={{paddingBottom: 30}} />
      <View style={styles.mainTextContainer}>
        <AppText styles={styles.mainText} text={LOGIN_MAIN_TEXT} />
        <AppText styles={styles.mainTextHelper} text={LOGIN_MAIN_TEXT_HELPER} />
      </View>
      <View style={(mainStyles.innerContent, styles.innerContent)}>
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
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => handleInfoChange(text, 'password')}
          mode="outlined"
          outlineStyle={mainStyles.inputOutline}
          contentStyle={mainStyles.inputStyle}
          selectionColor={ACCENT_COLOR}
          outlineColor={ACCENT_COLOR}
          activeOutlineColor={ACCENT_COLOR}
          style={styles.textInputSpacing}
          secureTextEntry={true}
        />
        <Button
          // @ts-expect-error TS(2339): Property 'registerButton' does not exist on type '... Remove this comment to see the full error message
          style={[styles.registerButton, styles.button]}
          mode="contained"
          onPress={() => navigation.navigate('PhoneNumberScreen')}>
          <AppText text={'Register'} />
        </Button>
      </View>

      <View style={mainStyles.nextBtnContainer}>
        <IconButton
          icon="arrow-right"
          style={styles.button}
          iconColor={'white'}
          size={20}
          // @ts-expect-error TS(2322): Type '{ icon: string; style: ViewStyle | TextStyle... Remove this comment to see the full error message
          title="Validate"
          onPress={() => {
            //nothing
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
    // @ts-expect-error TS(2322): Type '"col"' is not assignable to type '"row" | "c... Remove this comment to see the full error message
    flexDirection: 'col',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  innerContent: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  mainTextHelper: {
    color: HELPER_COLOR,
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    width: '80%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  checkBox: {
    width: 20,
    height: 20,
    marginVertical: 20,
  },
  inputStyle: {
    backgroundColor: 'black',
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
  textInputSpacing: {
    marginVertical: 5,
  },
});

export default LoginScreen;
