import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNavigator";
import CalendarScreen from "../screens/CalendarScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={TabsNav}
      />
      <Stack.Screen
        name="캘린더"
        options={{ headerShown: false }}
        component={CalendarScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
