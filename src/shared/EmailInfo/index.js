import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import { EmailDetails } from "../Icons";
import ButtonGrey from "../ButtonGray";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";

const EmailInfo = ({ email, sendEmail }) => {
  console.log("email", email);
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <EmailDetails size={70} color={"#5E72E4"} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>{i18n.t("common.emailLabel")}</Text>
          <Text style={styles.cardTextMain}>{email}</Text>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <ButtonGrey
          text={i18n.t("common.sendEmailBtn")}
          iconName={"EMAIL"}
          color={"#fff"}
          iconStroke={"#838383"}
          onClick={sendEmail}
        />
      </View>
    </View>
  );
};

export default EmailInfo;
