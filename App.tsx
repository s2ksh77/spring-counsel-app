import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import LoginNavigator from './src/navigators/LoginNavigator';
import StackNavigator from './src/navigators/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? <LoginNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
