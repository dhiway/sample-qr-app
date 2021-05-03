import React, {
  Fragment,
  Component,
  useEffect,
  useState,
  useContext,
} from "react";
import { View, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import commanStyles from "../../utils/CommanStyles";
import styles from "./styles";
import SplashScreen from "react-native-splash-screen";

import { getData } from "../../lib/datastore";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";
import { AppContext } from "../../providers/AppContext";

const Splash = () => {
  const navigation = useNavigation();
  const { hasPerm, onboardingCheck, defaultActivity, getLocale } = useContext(
    AppContext
  );
  useEffect(() => {
    setTimeout(() => {
      getLocale();
      SplashScreen.hide();
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(hasPerm, onboardingCheck);
    if (hasPerm !== null && onboardingCheck !== null) {
      if (hasPerm) {
        if (defaultActivity) {
          navigation.navigate("dashboard", { screen: "Activity" });
        } else {
          navigation.navigate("dashboard");
        }
      } else if (onboardingCheck) {
        navigation.navigate("Permissions");
      } else {
        navigation.navigate("Onboarding");
      }
    }
  }, [hasPerm, onboardingCheck, defaultActivity]);

  return (
    <Fragment>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <View
        style={[styles.splashContainer, { backgroundColor: "#282831" }]}
      ></View>
    </Fragment>
  );
};

export default Splash;
