import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNav from './TabsNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="홈" options={{ headerShown: false }} component={TabsNav} />
      <Stack.Screen
        name="캘린더"
        options={{ headerShown: false }}
        component={() => <div>test</div>}
      />
      <Stack.Screen
        name="상담관리"
        options={{ headerShown: false }}
        component={() => <div>test</div>}
      />
      <Stack.Screen
        name="일정관리"
        options={{ headerShown: false }}
        component={() => <div>test</div>}
      />
      <Stack.Screen
        name="프로필"
        options={{ headerShown: false }}
        component={() => <div>test</div>}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
