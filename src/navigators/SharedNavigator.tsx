import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CalendarScreen from "../screens/CalendarScreen";

const Stack = createStackNavigator();

const SharedStackNav = ({ screenName }) => {
  let screen;
  switch (screenName) {
    case "홈":
      screen = "Home";
      break;
    case "캘린더":
      screen = CalendarScreen;
      break;
    case "일정 관리":
      screen = "Schedule";
      break;
    case "프로필":
      screen = "Profile";
      break;
    default:
      break;
  }

  const render = () => {
    return (
      <Stack.Screen
        name={screenName}
        options={{ headerShown: false }}
        component={screen}
      />
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "white",
          shadowColor: "rgba(255,255,255, 0.3)",
        },
        headerMode: "screen",
      }}
    >
      {render()}
      {/* <Stack.Screen
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
      /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Photo" options={{ headerTitle: '' }} component={PhotoScreen} />
      <Stack.Screen name="Likes" options={{ headerTitle: '좋아요' }} component={Likes} />
      <Stack.Screen
        name="Comments"
        options={{ headerTitle: '댓글' }}
        component={CommentsScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default SharedStackNav;
