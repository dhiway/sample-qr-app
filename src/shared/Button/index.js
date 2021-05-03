import React, { Component } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import commanStyles from "../../utils/CommanStyles";
import Text from "../Text";

export default function Button({ text, onClick }) {
  return (
    <>
      <TouchableOpacity style={commanStyles.primaryButton} onPress={onClick}>
        <Text style={commanStyles.primaryButtonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}
