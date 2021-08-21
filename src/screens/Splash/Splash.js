import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SplashLogo} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SplashLogo />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
