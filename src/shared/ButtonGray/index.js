import React, { Component } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import commanStyles from "../../utils/CommanStyles";
import QrIcons from "../QrIcons";
import Text from "../Text";

export default function ButtonGrey({
  text,
  onClick,
  iconName,
  disableIcon,
  iconStroke,
}) {
  return (
    <>
      <TouchableOpacity
        style={commanStyles.primaryButtonGrey}
        onPress={onClick}
      >
        {!disableIcon && (
          <Text style={commanStyles.buttonIcon}>
            <QrIcons
              size={25}
              type={iconName}
              color={"#fff"}
              stroke={iconStroke}
            />
          </Text>
        )}
        <Text style={commanStyles.primaryButtonTextGrey}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}
