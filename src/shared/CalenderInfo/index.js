import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../DetailsCard/styles";
import { Event } from "../Icons";
import ButtonGrey from "../ButtonGray";
import dayjs from "dayjs";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";

const CalenderInfo = ({
  eventData,
  addCalendar,
  addLocationToMap,
  callOrganizer,
}) => {
  var d = new Date(eventData.startDate);
  console.log("checkdate", d);
  let event = eventData;
  /* TODO: get the proper time from position 9 */
  let startDate = dayjs(event.start.substring(0, 8), "YYYYMMDD").format(
    "DD MMM, YYYY"
  );
  let endDate = dayjs(event.end.substring(0, 8), "YYYYMMDD").format(
    "DD MMM, YYYY"
  );

  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Event size={70} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeadText}>{i18n.t("common.eventLabel")}</Text>
          <View>
            {event.summary && (
              <Text style={styles.cardText}>
                <Text style={styles.boldText}>
                  {i18n.t("common.nameLabel")}:
                </Text>
                {event.summary}
              </Text>
            )}
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>{i18n.t("common.dateLabel")}:</Text>{" "}
              {startDate}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.boldText}>
                {i18n.t("common.startsAtLabel")}:
              </Text>{" "}
              {startDate}
            </Text>
            {event.location && (
              <Text style={styles.cardText}>
                <Text style={styles.boldText}>
                  {i18n.t("common.locationLabel")}:
                </Text>{" "}
                {event.location}
              </Text>
            )}
            {event.organizer !== "" && (
              <Text style={styles.cardText}>
                <Text style={styles.boldText}>Organizer:</Text>{" "}
                {event.organizer}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        {addCalendar && (
          <ButtonGrey
            text={i18n.t("common.addToCalendarBtn")}
            iconName={"EVENT"}
            onClick={addCalendar}
          />
        )}
        {callOrganizer && (
          <ButtonGrey
            text={i18n.t("common.callOrganizerBtn")}
            iconName={"PHONE"}
            onClick={callOrganizer}
          />
        )}
      </View>
      {addLocationToMap && (
        <ButtonGrey
          text={i18n.t("common.addLocationBtn")}
          iconName={"GEO"}
          onClick={addLocationToMap}
        />
      )}
    </View>
  );
};

export default CalenderInfo;
