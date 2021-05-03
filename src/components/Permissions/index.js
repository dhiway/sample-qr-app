import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import commanStyles from "../../utils/CommanStyles";
import PermissionsModule from "../Permissions/PermissionsModule";

export default function Permissions({ navigation }) {
  return (
    <View style={commanStyles.mainContainer}>
      <StatusBar backgroundColor="#232D47" />
      <PermissionsModule navigation={navigation} />
    </View>
  );
}
