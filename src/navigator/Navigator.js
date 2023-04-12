import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login';
import Verify from '../screens/Register/Verify/Verify';
import Account from '../screens/Account/Account';
import Profile from '../screens/Account/Profile/Profile';
import ChangePassword from '../screens/Account/ChangePassword/ChangePassword';
import Restaurant from '../screens/Restaurant/Restaurants/Restaurant';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import VerifyOTP from '../screens/ForgotPassword/Verify/VerifyOTP';
import PassReset from '../screens/ForgotPassword/PassReset/PassReset';
import Notification from '../screens/Notification/Notification';
import OrderCancel from '../screens/OrderCancel/OrderCancel';
// import Login from '../screens/Apprestaurant/Login/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();
const screenOptionStyles = {
  headerShown: false
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles} initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="PassReset" component={PassReset} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="OrderCancel" component={OrderCancel} />
      <Stack.Screen name="HomeTab" component={Tabs} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 1
        },
        tabBarIconStyle: {
          bottom: 7
        }
      }}
    >
      <Tab.Screen name='Login' component={Login} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/images/icon/home.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F18345' : '#888888'
              }}
            />
            <Text style={{ fontSize: 12, color: focused ? '#F18345' : '#888888' }}>Home</Text>
          </View>
        ),
        tabBarStyle: {
          display: 'none'
        }
      }} />
      <Tab.Screen name='Register' component={Register} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/images/icon/coupon.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F18345' : '#888888'
              }}
            />
            <Text style={{ fontSize: 12, color: focused ? '#F18345' : '#888888' }}>Ưu đãi</Text>
          </View>
        ),
        tabBarStyle: {
          display: 'none'
        }
      }} />
      <Tab.Screen name='Account' component={Account} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/images/icon/bell.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F18345' : '#888888'
              }}
            />
            <Text style={{ fontSize: 12, color: focused ? '#F18345' : '#888888' }}>Thông báo</Text>
          </View>
        )
      }} />
      <Tab.Screen name='Verify' component={Verify} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/images/icon/profile-user.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F18345' : '#888888'
              }}
            />
            <Text style={{ fontSize: 12, color: focused ? '#F18345' : '#888888' }}>Account</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
};


export default HomeStackNavigator;