import {StyleSheet} from 'react-native';

import theme from '../../styles/index';

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: theme.IMAGE_BORDER_RADIUS,
    paddingLeft: 10,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lableText: {
    color: theme.DARK_COLOR + 90,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  input: {
    height: 45,
    flex: 1,
    fontSize: theme.FONT_SIZE_NORMAL,
    color: 'gray',
  },
  icon: {
    paddingHorizontal: 10,
  },
  mainInputContainer: {
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  footerWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    marginHorizontal: 5,
  },
  registerButtonText: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_NORMAL,
  },
});

export default styles;
