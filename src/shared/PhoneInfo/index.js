import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import { Tel } from "../Icons";
import ButtonGrey from "../ButtonGray";
import i18n from "../../lib/I18n";
import Text from "../Text";

const PhoneInfo = ({ phoneNumber, call }) => {
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Tel size={70} color={"#000"} stroke={"#fff"} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>
            {i18n.t("common.phoneNumberLbl")}
          </Text>
          <Text style={styles.cardTextMain}>{phoneNumber}</Text>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <ButtonGrey
          text={"CALL"}
          iconName={"PHONE"}
          color={"#fff"}
          iconStroke={"#838383"}
          onClick={call}
        />
      </View>
    </View>
  );
};

export default PhoneInfo;
