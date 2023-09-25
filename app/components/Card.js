import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, description, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.description}>{description}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    // without this there would be an overflow going making the corners of the image to be square instead of round.
    overflow: "hidden",
  },

  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    marginBottom: 7,
  },

  description: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
export default Card;
