import React, { Component } from "react";
import { Text as RNText, StyleSheet, Platform } from "react-native";

const fontStyles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: { fontFamily: "Roboto" },
    }),
  },
});

export function Text(props) {
  return (
    <RNText style={[fontStyles.text, props.style]}>{props.children}</RNText>
  );
}

export default Text;
