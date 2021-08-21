import {StyleSheet} from 'react-native';

import theme from '../../styles/index';

const styles = StyleSheet.create({
  //primary button
  primaryButton: {
    // alignSelf: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    marginHorizontal: 15,
    // marginVertical: 15,
    paddingVertical: 15,
    borderRadius: theme.IMAGE_BORDER_RADIUS,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_NORMAL,
  },
});

export default styles;
