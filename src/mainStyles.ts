import {StyleSheet} from 'react-native';
import {ACCENT_COLOR, HELPER_COLOR} from './constants/style.constants';

export default StyleSheet.create({
  Container: {
    flex: 1,
    paddingStart: 25,
    paddingEnd: 25,
    width: '100%',
  },
  Text: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
  },
  AccentText: {
    color: ACCENT_COLOR,
  },
  innerContent: {
    flex: 1,
    width: '100%',
  },
  wrapperContent: {
    flex: 1,
    marginTop: 50,
    width: '100%',
  },
  inputOutline: {
    borderRadius: 15,
    borderColor: 'transparent',
  },
  inputStyle: {
    borderColor: HELPER_COLOR,
    borderWidth: 2,
    borderRadius: 15,
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
  messageStyle: {
    color: '#ff5959',
    fontSize: 10,
  },
});
