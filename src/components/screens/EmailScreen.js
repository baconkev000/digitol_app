import {StyleSheet, View, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {IconButton, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {UPDATEUSER} from '../../app/stores/userReducer';
import ProgressBar from 'react-native-progress/Bar';

const EmailScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
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
        Alert.alert('Invalid Email', 'Please enter a valid email.');
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
            progress={0.5}
            width={null}
            borderColor="#21AFFF"
            color="#21AFFF"
            style={mainStyles.ProgressBar}
          />
        </View>
        <View style={styles.mainTextContainer}>
          <AppText styles={styles.mainText} text={'YOUR EMAIL '} />
          <AppText
            styles={[styles.mainText, mainStyles.AccentText]}
            text={'IS'}
          />
        </View>
        <View style={{paddingTop: 50}}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => handleEmailChange(text)}
            mode="outlined"
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputStyle}
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
      <View style={styles.nextBtnContainer}>
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

export default EmailScreen;
