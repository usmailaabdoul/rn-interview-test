import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashLogo = () => {
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={require('../../../res/logo/logo1.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../../res/logo/e.png')}
        style={styles.logoLetters}
      />
      <Image
        source={require('../../../res/logo/I.png')}
        style={styles.logoLetterI}
      />
      <Image
        source={require('../../../res/logo/O.png')}
        style={styles.logoLetters}
      />
    </View>
  );
};

export default SplashLogo;

const styles = StyleSheet.create({
  logo: {
    width: 48.57,
    height: 34,
  },
  logoLetters: {
    width: 19.95,
    height: 19.96,
    marginHorizontal: 3.7,
  },
  logoLetterI: {
    width: 6,
    height: 19.96,
    marginHorizontal: 3.7,
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
