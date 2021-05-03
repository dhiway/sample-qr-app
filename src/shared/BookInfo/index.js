import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import i18n from "../../lib/I18n";
import ButtonGrey from "../ButtonGray";
import Text from "../../shared/Text";
import { Book } from "../Icons";

const BookInfo = ({ text, title, openUrl }) => {
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Book size={70} color={"#5E72E4"} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>
            {title ? title : i18n.t("common.bookQR")}
          </Text>
          <Text style={styles.cardTextMain}></Text>
          <Text style={styles.cardTextMain}>ISBN: {text}</Text>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <ButtonGrey
          text={"Check in Open Library"}
          iconName={"BOOK"}
          color={"#fff"}
          iconStroke={"#838383"}
          onClick={openUrl}
        />
      </View>
    </View>
  );
};

export default BookInfo;
