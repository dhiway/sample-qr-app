import React, { Component, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles";
import { ArrowRight } from "../Icons";
import QrIcons from "../QrIcons";
import Text from "../../shared/Text";

const HistoryCards = ({
  isCheckEnable,
  data,
  lat,
  lng,
  title,
  type,
  date,
  isCheckboxClicked,
  currentLink,
}) => {
  const geoUri =
    "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;

  return (
    <>
      <TouchableOpacity
        style={[styles.histoyCardContainer]}
        onPress={() => isCheckboxClicked && isCheckboxClicked(data)}
        activeOpacity={0.8}
      >
        <View style={styles.linkIcon}>
          <QrIcons size={30} type={type} />
        </View>
        <View style={styles.historyLinkDescription}>
          <Text style={styles.historyLink} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.historyDate}>{date}</Text>
          {false && (
            <TouchableOpacity onPress={() => Linking.openURL(geoUri)}>
              <Text style={styles.historyDate}>
                Location: {lat}, {lng}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.arrowRightIcon}>
          <ArrowRight size={30} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HistoryCards;
