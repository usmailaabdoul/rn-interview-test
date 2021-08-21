import React, {useRef, useEffect} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Splash, Login} from '../screens';

import {navigationRef} from './RootNavigation';

const NavigationStack = createStackNavigator();
let clicks = 0;

const Navigation = () => {
  let routeNameRef = useRef();
  useEffect(() => {
    const backAction = () => {
      if (
        routeNameRef.current === 'Home' ||
        routeNameRef.current === 'Dashboard'
      ) {
        ToastAndroid.show(
          'click again to exit chopbox',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        if (clicks > 0) {
          BackHandler.exitApp();
        } else {
          clicks++;
        }
        setTimeout(() => {
          clicks = 0;
        }, 2000);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (routeNameRef.current !== currentRouteName) {
          routeNameRef.current = currentRouteName;
        }
        routeNameRef.current = currentRouteName;
      }}>
      <NavigationStack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <NavigationStack.Screen name="SplashScreen" component={Splash} />
        <NavigationStack.Screen name="Login" component={Login} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
