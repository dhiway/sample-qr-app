/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Splash from "./src/components/Splash";
import Permissions from "./src/components/Permissions";
import Scan from "./src/components/Scan";
import QrDetails from "./src/components/QrDetails";
import Webview from "./src/components/Webview";
// import Onboarding from "./src/components/Onboarding";
import QrIcons from "./src/shared/QrIcons";

import { NativeModules } from "react-native";
const { MLKit } = NativeModules;

import Providers from "./src/lib";
import i18n from "./src/lib/I18n";

function handleBackButton() {
  BackHandler.exitApp();
  return true;
}

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Scan";

  switch (routeName) {
    case "Scan":
      return i18n.t("app.Scan");
  }
}
const App = () => {
  // const navigation = useNavigation();

  return (
    <Providers>
      {/* <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Details"
            component={QrDetails}
            options={{ header: () => null }}
          />

          <Stack.Screen
            name="Webview"
            component={Webview}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Permissions"
            component={Permissions}
            options={{ header: () => null, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
};

export default App;
