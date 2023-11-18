import * as React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REEL TIME</Text>
      <Image style={styles.image} source={require('../assets/greenmonster/greenmonsterheadturn.gif')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center',      // Center content horizontally
  },
  image: {
    width: '50%',  // Adjust the width to your preference
    height: "50%",   // Maintain aspect ratio with no fixed height
    aspectRatio: 1,  // Maintain a square aspect ratio
    resizeMode: 'contain',  // Ensure the image is contained within the specified dimensions
    marginBottom: 150,  // Optional: Add margin to create space between the text and the image
    backgroundColor: "grey"
  },
  text: {
    color: "black",
    fontSize: 50,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },
});

export default Home;
