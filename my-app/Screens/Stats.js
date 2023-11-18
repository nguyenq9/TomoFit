import * as React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

function Stats() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Stats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "black",
    fontSize: 50,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 160
    // backgroundColor: "#000000c0",
  },
  textBox: {
    color: "black",
    fontSize: 22,
    // lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  license: {
    color: "black",
    fontSize: 15,

  }
});

export default Stats;
