import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Login = createStackNavigator();

interface Theme {
  colors: {
    background: string;
  };
}

const LoginNavigator = () => {
  return (
    <Login.Navigator initialRouteName="Login">
      <Login.Screen
        name="로그인"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Login.Navigator>
  );
};

export default LoginNavigator;
