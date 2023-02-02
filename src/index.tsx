import React from 'react';
import { View } from 'react-native';
import { LoginNavigator } from './screens';

const SpringCounsel = () => {
  return (
    <View
      style={{
        width: '360px',
        height: '100%',
      }}
    >
      앱입니다.
      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <LoginNavigator />
      </View>
    </View>
  );
};

export default SpringCounsel;
