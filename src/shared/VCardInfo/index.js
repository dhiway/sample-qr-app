import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import { Contact } from "../Icons";

import ModalCard from "../Modal";
import ButtonGrey from "../ButtonGray";
import Text from "../Text";

const ContactInfo = ({ data, call }) => {
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Contact size={70} color={"#5E72E4"} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>VCard</Text>
          <View>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>Name:</Text> {data.formattedName}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>Email:</Text>
              <Text>{data.emails.length > 0 && data.emails[0].address}</Text>
            </Text>
            {data.phones.length > 0 && (
              <Text style={styles.cardText}>
                <Text>
                  <Text style={styles.boldText}>Mobile:</Text>
                  {data.phones.map((phoneNumbers, i1) => {
                    return <Text key={i1}>{phoneNumbers.number}</Text>;
                  })}
                </Text>
              </Text>
            )}
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>Organization:</Text>
              <Text>{data.organization}</Text>
            </Text>
            {data.addresses.length > 0 && (
              <Text style={styles.cardText}>
                <Text>
                  <Text style={styles.boldText}>Address:</Text>
                  {data.addresses[0].addressLines.map((address, i2) => {
                    return <Text key={i2}>{address}</Text>;
                  })}
                </Text>
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        {/* <ButtonGrey text={"SAVE TO CONTACT"} iconName={"BOOK"} /> */}
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

export default ContactInfo;
