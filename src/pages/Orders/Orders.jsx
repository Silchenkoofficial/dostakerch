import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Active from './pages/Active';
import Completed from './pages/Completed';
import Incoming from './pages/Incoming';

const Tabs = createMaterialTopTabNavigator();

function Orders() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          indicatorStyle: {
            backgroundColor: '#ff5c00'
          },
          labelStyle: {
            fontSize: 14,
            textTransform: "none"
          },
          activeTintColor: "#ff5c00",
          inactiveTintColor: '#bfbfbf'
        }}
      >
        <Tabs.Screen name="Активные" component={Active} />
        <Tabs.Screen name="Завершенные" component={Completed} />
        <Tabs.Screen name="Входящие" component={Incoming} />
      </Tabs.Navigator>
    );
}

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#ececec'
  }
});