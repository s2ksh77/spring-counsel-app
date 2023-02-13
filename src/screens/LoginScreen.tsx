import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import logo from '../image/logo-small.jpg';

const LoginScreen = () => {
  return (
    <View style={{ marginVertical: 'auto' }}>
      <Image source={logo} style={{ height: '100px', margin: '20px' }} />
      <View style={{ marginHorizontal: '20px' }}>
        <TextInput placeholder="아이디" style={style.input} />
      </View>
      <View style={{ marginHorizontal: '20px' }}>
        <TextInput secureTextEntry placeholder="비밀번호" style={style.input} />
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={{ color: '#FFF' }}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    width: '100%',
    height: '48px',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: '#A9CE8E',
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 15,
  },
});

export default LoginScreen;
