import {StyleSheet, Platform} from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  //home stack styles
  menuWrapper: {
    marginLeft: 15,
  },
  headerIcon: {
    width: 25,
    height: 25,
    tintColor: theme.WHITE_COLOR,
  },
  rightIconsWrapper: {
    flexDirection: 'row',
  },
  cartWrapper: {
    marginRight: 15,
  },
  searchWrapper: {
    marginRight: 15,
  },
  rightIcons: {
    width: 20,
    height: 20,
    tintColor: theme.WHITE_COLOR,
  },
  headerText: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  cartIcon: {
    backgroundColor: theme.PRIMARY_COLOR,
    position: 'absolute',
    left: 15,
    borderRadius: 99,
    bottom: 15,
  },
  multipleDigitCartIconText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',

    ...Platform.select({
      ios: {
        paddingVertical: 3,
        paddingHorizontal: 3,
      },
      android: {
        paddingHorizontal: 2,
      },
    }),
  },
  singleDigitCartIconText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',

    ...Platform.select({
      ios: {
        paddingVertical: 2,
        paddingHorizontal: 5,
      },
      android: {
        paddingHorizontal: 4,
      },
    }),
  },

  // home screen
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  showText: {
    color: 'gray',
  },
  featureText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.DARK_COLOR,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
  },
  categoryWrapper: {
    marginTop: 10,
  },
  selectedCategory: {
    borderBottomColor: theme.PRIMARY_COLOR,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  categoriesHeaderText: {
    color: theme.DARK_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 10,
    marginLeft: 5,
  },
  categoriesWrapper: {
    // flexDirection: 'row',
    alignItems: 'center',
  },
  allTextWrapper: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  allText: {
    color: 'gray',
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'center',
  },
  category: {
    alignItems: 'center',
    width: 70,
  },
  categoriesImage: {
    width: '100%',
    height: 50,
    borderRadius: theme.IMAGE_BORDER_RADIUS,
  },
  categoriesImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    shadowColor: theme.LIGHT_PRIMARY_COLOR,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
    marginHorizontal: 5,
    marginBottom: 3,
    borderRadius: theme.IMAGE_BORDER_RADIUS,
    width: 55,
  },
  categoriesText: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: 'gray',
    textAlign: 'center',
  },
  productsHeaderText: {
    color: theme.DARK_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 20,
  },
  bodyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyMessageText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.DARK_COLOR,
  },
});

export default styles;
