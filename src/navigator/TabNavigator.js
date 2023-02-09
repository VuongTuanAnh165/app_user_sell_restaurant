import React from "react";
import Login from "../screens/Login/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, AccountStackNavigator } from "./Navigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const screenOptionStyles = {
        headerShown: false
    };
  return (
    <Tab.Navigator screenOptions={screenOptionStyles}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;