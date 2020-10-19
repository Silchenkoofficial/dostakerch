import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {OrdersIcon, ProfileIcon, MessagesIcon, NewOrderIcon} from '../../assets/icons';

import {Profile, Orders, Messages, NewOrder} from '../../pages';

const Tab = createMaterialBottomTabNavigator();

const OrdersStack = createStackNavigator();
const NewOrderStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const OrdersStackScreen = () => (
  <OrdersStack.Navigator>
    <OrdersStack.Screen name='Заказы' component={Orders} />
  </OrdersStack.Navigator>
);

const NewOrderStackScreen = () => (
  <NewOrderStack.Navigator>
    <NewOrderStack.Screen name='Новый заказ' component={NewOrder} />
  </NewOrderStack.Navigator>
);

const MessagesStackScreen = () => (
  <MessagesStack.Navigator>
    <MessagesStack.Screen name='Чат' component={Messages} />
  </MessagesStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Профиль" component={Profile} />
  </ProfileStack.Navigator>
);



const pages = [
  {
    name: "Заказы",
    component: OrdersStackScreen,
    title: "Заказы"
  },
  {
    name: "Новый заказ",
    component: NewOrderStackScreen
  },
  {
    name: "Чат",
    component: MessagesStackScreen
  },
  {
    name: "Профиль",
    component: ProfileStackScreen
  }
];

export default function NavBar() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
              case "Заказы":
                iconName = (
                  <OrdersIcon color={focused ? "#ff5c00" : "#bfbfbf"} />
                );
                break;

              case "Профиль":
                iconName = (
                  <ProfileIcon color={focused ? "#ff5c00" : "#bfbfbf"} />
                );
                break;

              case "Чат":
                iconName = (
                  <MessagesIcon color={focused ? "#ff5c00" : "#bfbfbf"} />
                );
                break;

              case "Новый заказ":
                iconName = (
                  <NewOrderIcon color={focused ? "#ff5c00" : "#bfbfbf"} />
                );
                break;

              default:
                break;
            }

            return <View>{iconName}</View>;
          }
        })}
        activeColor="#ff5c00"
        inactiveColor="#bfbfbf"
        barStyle={{
          backgroundColor: "#fff"
        }}
      >
        {pages.map((page, index) => (
          <Tab.Screen
            key={`tab_${index}`}
            name={page.name}
            component={page.component}
          />
        ))}
      </Tab.Navigator>
  );
}