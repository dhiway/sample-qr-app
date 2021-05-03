import React, { Component, useState } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import i18n from "../../lib/I18n";
import styles from "./styles";
import { Payment, Close, Risk } from "../Icons";
import ModalCard from "../Modal";
import commanStyles from "../../utils/CommanStyles";
import Text from "../Text";

const ThreatType = ({ isSafe, hasThreat, type }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVerified, setVerified] = useState(true);
  const threatCall = () => {
    if (
      type == "MALWARE" ||
      type == "SOCIAL_ENGINEERING" ||
      type == "UNWANTED_SOFTWARE" ||
      type == "POTENTIALLY_HARMFUL_APPLICATION" ||
      type == "THREAT_TYPE_UNSPECIFIED" ||
      type == "UNKNOWN"
    )
      return (
        <View>
          <Text style={styles.detailsIndicatorRisk}>
            {i18n.t("threat.typeUnSafe")}
          </Text>
          <Text
            style={[
              styles.detailsDescriptionText,
              // styles.threat,
              styles.threatText,
            ]}
          >
            {i18n.t("threat.unSafeTypeDetail")}
          </Text>
        </View>
      );

    if (type == "SEQR_API_FAILURE")
      return (
        <Text style={[styles.threatText, styles.warning]}>
          {i18n.t("threat.typeErrorFailure")}
        </Text>
      );

    if (type == "SEQR_CERT_EXPIRY" || type == "SEQR_HTTP_NO_SSL") return null;

    if (type == "SEQR_SITE_NOT_FOUND")
      return (
        <Text style={[styles.threatText, styles.warning]}>
          {i18n.t("threat.typeErrorSiteNotFound")}
        </Text>
      );

    if (type == "SEQR_NETWORK_FAILURE")
      return (
        <Text style={[styles.threatText, styles.warning]}>
          {i18n.t("threat.typeErrorNoConnection")}
        </Text>
      );

    if (type == "SEQR_HTTP_NO_SSL") return null;

    return (
      <Text style={[styles.threatText, styles.safe]}>
        {i18n.t("threat.safeTypeDetail")}
      </Text>
    );
  };

  const modalView = () => {
    if (type == "SEQR_HTTP_NO_SSL" || type == "SEQR_CERT_EXPIRY") {
      return (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>
              <Close size={30} color={"#5E72E4"} />
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>
              <Payment size={50} color={"#acacac"} />
            </Text>
            <Text style={[styles.modalHeadText, styles.failure]}>
              {i18n.t("threat.typeNotSecure")}
            </Text>
            <Text style={styles.modalDescription}>
              {i18n.t("modal.notSecureDetails")}
            </Text>
          </View>
        </View>
      );
    }

    if (type == "SOCIAL_ENGINEERING") {
      return (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>
              <Close size={30} color={"#5E72E4"} />
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>
              <Risk size={50} color={"#acacac"} />
            </Text>
            <Text style={[styles.modalHeadText, styles.risk]}>
              {i18n.t("threat.typeUnSafe")}
            </Text>
            <Text style={styles.modalDescription}>
              {i18n.t("modal.unSafeDetails")}
            </Text>
            <TouchableOpacity
              style={[commanStyles.primaryButtonGrey, { padding: 20 }]}
            >
              <Text
                style={commanStyles.primaryButtonTextGrey}
                onPress={() =>
                  Linking.openURL(
                    "https://support.google.com/webmasters/answer/6350487"
                  )
                }
              >
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (type == "MALWARE") {
      return (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>
              <Close size={30} color={"#5E72E4"} />
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>
              <Risk size={50} color={"#acacac"} />
            </Text>
            <Text style={[styles.modalHeadText, styles.risk]}>
              {i18n.t("threat.typeUnSafe")}
            </Text>
            <Text style={styles.modalDescription}>
              {i18n.t("modal.unSafeDetails")}
            </Text>
            <TouchableOpacity
              style={[commanStyles.primaryButtonGrey, { padding: 20 }]}
              onPress={() =>
                Linking.openURL(
                  "https://support.google.com/webmasters/answer/3258249"
                )
              }
            >
              <Text style={commanStyles.primaryButtonTextGrey}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (type == "UNWANTED_SOFTWARE") {
      return (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>
              <Close size={30} color={"#5E72E4"} />
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>
              <Risk size={50} color={"#acacac"} />
            </Text>
            <Text style={[styles.modalHeadText, styles.risk]}>
              {i18n.t("threat.typeUnSafe")}
            </Text>
            <Text style={styles.modalDescription}>
              {i18n.t("modal.unSafeDetails")}
            </Text>
            <TouchableOpacity
              style={[commanStyles.primaryButtonGrey, { padding: 20 }]}
              onPress={() =>
                Linking.openURL(
                  "http://www.google.com/about/company/unwanted-software-policy.html"
                )
              }
            >
              <Text style={commanStyles.primaryButtonTextGrey}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (type == "POTENTIALLY_HARMFUL_APPLICATION") {
      return (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>
              <Close size={30} color={"#5E72E4"} />
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>
              <Risk size={50} color={"#acacac"} />
            </Text>
            <Text style={[styles.modalHeadText, styles.risk]}>
              {i18n.t("threat.typeUnSafe")}
            </Text>
            <Text style={styles.modalDescription}>
              {i18n.t("modal.unSafeDetails")}
            </Text>
            <TouchableOpacity
              style={[commanStyles.primaryButtonGrey, { padding: 20 }]}
              onPress={() =>
                Linking.openURL(
                  "https://support.google.com/webmasters/answer/3258249"
                )
              }
            >
              <Text style={commanStyles.primaryButtonTextGrey}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (type == "THREAT_TYPE_UNSPECIFIED") {
      return (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text>
              <Close size={30} color={"#5E72E4"} />
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>
              <Risk size={50} color={"#acacac"} />
            </Text>
            <Text style={[styles.modalHeadText, styles.risk]}>
              {i18n.t("threat.TypeUnSafe")}
            </Text>
            <Text style={styles.modalDescription}>
              {i18n.t("modal.unSafeDetails")}
            </Text>
            <TouchableOpacity
              style={[commanStyles.primaryButtonGrey, { padding: 20 }]}
              onPress={() =>
                Linking.openURL(
                  "https://support.google.com/webmasters/answer/3258249"
                )
              }
            >
              <Text style={commanStyles.primaryButtonTextGrey}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <View style={styles.detailsgoogleSuggestion}>
        {/* <QrIcons size={15} type={"GOOGLE"} color={"#1EA15D"} /> */}
        {/* <Text style={styles.detailsgoogleSuggestionText}>
         Warning- High Risk
        </Text> */}
        {/* <TouchableOpacity
            onPress={async () =>
              await Linking.openURL(
                "https://developers.google.com/safe-browsing/v4/advisory"
              )
            }
          >
          </TouchableOpacity> */}
      </View>
      {hasThreat ? null : !isSafe ? (
        <View>
          <Text style={styles.detailsIndicatorWarning}>
            {i18n.t("threat.typeNotSecure")}
          </Text>
          <Text style={styles.detailsDescriptionWarning}>
            {i18n.t("threat.notSecureTypeDetail")}
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.detailsIndicatorText}>
            {i18n.t("threat.typeSafe")}
          </Text>
          <Text style={styles.detailsDescriptionText}>
            {i18n.t("threat.safeTypeDetail")}
          </Text>
        </View>
      )}
      {type && (
        <View>
          <View style={styles.threatHolder}>
            {threatCall()}
            {/* <TouchableOpacity style={styles.threatIcon} onPress={openModal}>
              <QrIcons size={20} type={"INSTRUCTION"} color={"#acacac"} />
            </TouchableOpacity> */}
          </View>

          <ModalCard
            isModalVisable={isModalOpen}
            closeModal={() => setModalOpen(!isModalOpen)}
            modalView={modalView}
          />
        </View>
      )}
    </>
  );
};

export default ThreatType;
