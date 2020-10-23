import * as React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {NavBar} from "./src/components";
import { NewOrder } from "./src/pages";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavBar /> */}
      <NewOrder />
    </NavigationContainer>
  );
}
