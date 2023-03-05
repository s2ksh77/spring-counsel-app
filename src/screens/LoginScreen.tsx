import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { API } from '../lib/API';
import logo from '../components/image/logo-small.jpg';
import axios from 'axios';

const LoginScreen = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('loginId', loginId, 'password', password);

    // const data = API.post('/api/login', {
    //   userId: loginId,
    //   password,
    // });
    const data = API.get('/api/review');
    // const data = axios({
    //   method: 'GET',
    //   url: 'https://www.bom-counseling.com/api/review',
    // });
    console.log(data);
  };

  return (
    <View style={{ marginVertical: 'auto' }}>
      <Image source={logo} style={{ height: '100px', margin: '20px' }} />
      <View style={{ marginHorizontal: '20px' }}>
        <TextInput
          placeholder="아이디"
          style={style.input}
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
      </View>
      <View style={{ marginHorizontal: '20px' }}>
        <TextInput
          secureTextEntry
          placeholder="비밀번호"
          style={style.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </View>
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
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
