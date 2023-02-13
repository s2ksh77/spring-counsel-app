import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/assets/TabIcons";
import SharedStackNav from "./SharedNavigator";
import CalendarScreen from "../screens/CalendarScreen";

const Tabs = createBottomTabNavigator();

const TabsNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "rgba(255,255,255, 0.3)",
        },
      }}
    >
      <Tabs.Screen
        name="홈"
        options={{
          title: "홈",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <div>test</div>}
      </Tabs.Screen>
      <Tabs.Screen
        name="일정 관리"
        options={{
          title: "일정 관리",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"calendar"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName={"캘린더"} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="상담 예약"
        options={{
          title: "상담 예약",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"list"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <div>test</div>}
      </Tabs.Screen>
      <Tabs.Screen
        name="프로필"
        options={{
          title: "프로필",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
      >
        {/* {() => <SharedStackNav screenName="Notifications" />} */}
        {() => <div>aaa</div>}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default TabsNav;
