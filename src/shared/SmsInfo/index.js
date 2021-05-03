import React, { useState } from "react";
import { View, Platform } from "react-native";
import styles from "../DetailsCard/styles";
import { Chat } from "../Icons";
import ButtonGrey from "../ButtonGray";
import i18n from "../../lib/I18n";
import Text from "../Text";

const SmsInfo = ({ smsData, sendMessage }) => {
  const isAndroid = Platform.OS === "android";
  console.log("smsData", smsData);
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Chat size={70} color={"#5E72E4"} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>{i18n.t("common.smsLabel")}</Text>
          <View>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>
                {i18n.t("common.recipientLabel")}:
              </Text>{" "}
              {isAndroid ? smsData.title : smsData.phoneNumber}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>
                {i18n.t("common.textMsgLabel")}:
              </Text>
              <Text> {smsData.message}</Text>
            </Text>
          </View>
        </View>
      </View>
      {sendMessage && (
        <View style={styles.buttonHolder}>
          <ButtonGrey
            text={i18n.t("common.composeSmsBtn")}
            disableIcon={true}
            onClick={sendMessage}
          />
        </View>
      )}
    </View>
  );
};

export default SmsInfo;
