import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import { Location } from "../Icons";
import ModalCard from "../Modal";
import ButtonGrey from "../ButtonGray";
import Text from "../../shared/Text";

const GeoLocationInfo = ({ location, locationRedirect }) => {
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Location size={70} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>Location</Text>
          <Text style={styles.cardTextMain}>{location}</Text>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <ButtonGrey
          text={"OPEN"}
          iconName={"BOOK"}
          disableIcon={true}
          onClick={locationRedirect}
        />
      </View>
    </View>
  );
};

export default GeoLocationInfo;
