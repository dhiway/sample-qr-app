import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Copy, Nointernet } from "../Icons";
import styles from "./styles";
import commanStyles from "../../utils/CommanStyles";
import i18n from "../../lib/I18n";
import Text from "../Text";

const NoInternet = ({ data, copyToClipBoard }) => {
  return (
    <>
      <View style={styles.detailsRedirectLinkHolder}>
        <TouchableOpacity onPress={copyToClipBoard}>
          <View style={styles.detailsRedirectLinkHeader}>
            <Text style={styles.detailsRedirectLinkText}>Link In QR</Text>
            <Copy size={20} color={"#707070"} />
          </View>
          <Text style={styles.redirectLink} numberOfLines={1}>
            {data}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.connectContainer}>
        <Nointernet size={30} />
        <Text style={styles.connectTextHead}>
          {i18n.t("message.internetErrorHead")}
        </Text>
        <Text style={styles.connectTextDescription}>
          {i18n.t("message.internetError")}
        </Text>
      </View>
    </>
  );
};

export default NoInternet;
