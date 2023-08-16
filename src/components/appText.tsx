import React from 'react';
import {Text} from 'react-native-paper';
import mainStyles from '../mainStyles';
const AppText = (props: any) => {
  return <Text style={[mainStyles.Text, props.styles]}>{props.text}</Text>;
};

export default AppText;
