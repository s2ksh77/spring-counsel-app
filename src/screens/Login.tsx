import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/Login/LoginScreen';

const Login = createStackNavigator();

interface Theme {
  colors: {
    background: string;
  };
}

export const LoginNavigator = () => {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <Login.Navigator initialRouteName="Login">
        <Login.Screen
          name="로그인"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Login.Navigator>
    </NavigationContainer>
  );
};
