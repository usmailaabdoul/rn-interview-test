import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser, setToken} from '../../redux/actions/AuthAction';

import {SquareInput} from '../../components';
import styles from './Login.style';

const Login = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
      }),
    [navigation],
  );

  const loginToApp = async () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginTop: '20%'}}>
        <Text style={styles.headingText}>login</Text>
        <View style={styles.inputContainer}>
          {/* <SquareInput
            lable={'email'}
            placeholder={'name'}
            securedText={false}
            onChangeText={text => setEmail(text)}
            value={email}
            hasError={emailError}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setEmailError(false)}
          /> */}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>forgot_password</Text>
        </TouchableOpacity>

        <View style={styles.footerWrapper}>
          <Text>Dont’ have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
