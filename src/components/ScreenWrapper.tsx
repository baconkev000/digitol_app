import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import mainStyles from '../mainStyles';

const ScreenWrapper = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
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
          props.styles,
        ]}>
        <View style={mainStyles.wrapperContent}>{props.children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
  },
});

export default ScreenWrapper;
