import {StyleSheet} from 'react-native';

import theme from '../../styles/index';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  menuWrapper: {
    marginLeft: 15,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  headingText: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 10,
    color: theme.DARK_COLOR,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  footerWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    marginLeft: 5,
    marginRight: 10,
  },
  registerButtonText: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_NORMAL,
  },
  forgotPassword: {
    paddingVertical: 10,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  forgotPasswordText: {
    color: theme.DARK_COLOR + 90,
    fontSize: theme.FONT_SIZE_NORMAL,
  },
});

export default styles;
