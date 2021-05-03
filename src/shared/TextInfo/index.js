import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import { TextDoc, Copy } from "../Icons";
import i18n from "../../lib/I18n";
import Text from "../Text";

const TextInfo = ({ text, title, copyToClipBoard }) => {
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <TextDoc size={70} color={"#5E72E4"} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text
            style={[styles.cardHeadText, { fontSize: 14, alignSelf: "center" }]}
          >
            {title ? title : i18n.t("common.textQR")}
          </Text>
          <View style={styles.detailsRedirectLinkHolder}>
            <TouchableOpacity
              style={styles.detailsShareButtons}
              onPress={copyToClipBoard}
            >
              <View style={{ alignItems: "flex-end" }}>
                <Copy size={20} color={"#707070"} />
              </View>
              <Text style={[styles.cardTextMain, { padding: 7 }]}>{text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TextInfo;
