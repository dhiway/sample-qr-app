import React, { useState } from "react";
import { View } from "react-native";
import styles from "../DetailsCard/styles";
import { Wifi } from "../Icons";
import ButtonGrey from "../ButtonGray";
import Text from "../Text";

const WifiInfo = ({ wifiData, copyToClipBoard }) => {
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Wifi size={70} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>WIFI</Text>
          <View>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>Wireless SSID:</Text>{" "}
              {wifiData.ssid}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>Password:</Text>
              <Text> {wifiData.password}</Text>
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>Encryption type:</Text>
              <Text> {wifiData.encryptionType}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <ButtonGrey
          text={"COPY SSID"}
          disableIcon={true}
          onClick={() => copyToClipBoard(wifiData.ssid, "SSID")}
        />
        <ButtonGrey
          text={"COPY PASSWORD"}
          disableIcon={true}
          onClick={() => copyToClipBoard(wifiData.password, "Password")}
        />
      </View>
    </View>
  );
};

export default WifiInfo;
