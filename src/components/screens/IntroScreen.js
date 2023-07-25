import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../../mainStyles';
import AppText from '../appText';

const IntroPage = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          alignItems: 'center',

          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        styles.container,
        mainStyles.Container,
      ]}>
      <View style={styles.cardBorder} />
      <View style={{width: '100%'}}>
        <AppText
          styles={styles.introText}
          text={'Help You Digitize The Future'}
        />
        <Button
          style={styles.startButton}
          mode="contained"
          onPress={() => navigation.navigate('PhoneNumberScreen')}>
          <AppText styles={styles.startButtonText} text={'Get Started'} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.87)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBorder: {
    width: '90%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 40,
    height: 225,
    marginTop: 100,
  },
  introText: {
    color: 'white',
    fontSize: 55,
    marginBottom: 75,
  },
  startButton: {
    backgroundColor: '#21AFFF',
    width: '100%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  startButtonText: {
    color: 'white',
  },
});

export default IntroPage;
