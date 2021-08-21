import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './Home.style';

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>home screen</Text>
    </SafeAreaView>
  );
};

export default Home;
