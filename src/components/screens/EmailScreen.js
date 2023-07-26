import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../../mainStyles';
import AppText from '../appText';
import React from 'react';

const EmailScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();

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
      <View style={styles.innerContent} />
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
});

export default EmailScreen;
