import {StyleSheet, View} from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import {useState, useRef} from 'react';

const PhoneNumberScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  function doThis() {
    console.log(value);
  }
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
            style={styles.phoneInputStyle}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            onChangeFormattedText={text => {
              setValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            onSubmitEditing={this.doThis}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContent: {
    marginTop: 100,
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});

export default PhoneNumberScreen;
