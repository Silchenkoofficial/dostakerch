import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Active() {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Incoming</Text>
      </View>
    </ScrollView>
  );
}

export default Active;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#ececec",
    borderColor: "red",
    borderWidth: 2
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 2
  }
});
