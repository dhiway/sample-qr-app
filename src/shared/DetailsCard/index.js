import React, { useEffect, useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";

import styles from "./styles";
import {
  Close,
  Info,
  Trusted,
  Risk,
  Payment,
  SafeSSL,
  UnsafeSSL,
  ThumbsDown,
  ThumbsUp,
  Link,
  Copy,
  HashMarkVerified,
  HashMarkTilted,
} from "../Icons";
import ModalCard from "../../shared/Modal";
import ThreatType from "../ThreatType";
import i18n from "../../lib/I18n";
import dayjs from "dayjs";
import Text from "../../shared/Text";
let isSafe = true;

const DetailsCard = ({
  qr,
  isSafe,
  data,
  title,
  certificate,
  type,
  techDetailsClick,
  copyToClipBoard,
  openInApp,
  hasThreat,
  threatType,
}) => {
  const [modalVisible, setModalVisable] = useState(false);
  // const [isVerified, setVerified] = useState(true);
  const ActivityIndicatorLoadingView = () => {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color="#00C3E6" size="large" />
        <Text style={{ alignItems: "center" }}>{qr}</Text>
        <Text>Please wait, we are getting details of above QR content</Text>
      </View>
    );
  };
  const modalView = () => {
    return (
      //modal
      <View style={styles.infoModalContainer}>
        <View style={styles.infoModalHead}>
          <TouchableOpacity onPress={() => setModalVisable(!modalVisible)}>
            <Close size={30} color={"#5E72E4"} />
          </TouchableOpacity>
          <View style={styles.headTextHold}>
            <View>
              <Info size={20} color={"#1EA15D"} />
            </View>
            <Text style={styles.helpText}>HELP</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.infoList}>
            <View style={styles.infoCards}>
              <Trusted size={30} />
              <View style={styles.infoCardTextHolder}>
                <Text style={[styles.infoCardText, styles.trusted]}>SAFE</Text>
                <Text style={styles.infoCardTextPara}>
                  {i18n.t("modal.safeDetails")}
                </Text>
              </View>
            </View>
            <View style={styles.infoCards}>
              <Risk size={30} />

              <View style={styles.infoCardTextHolder}>
                <Text style={[styles.infoCardText, styles.risk]}>
                  HIGH RISK
                </Text>
                <Text style={styles.infoCardTextPara}>
                  {i18n.t("modal.highRiskDetails")}
                </Text>
              </View>
            </View>
            <View style={styles.infoCards}>
              <Payment size={30} color={"#5E72E4"} />
              <View style={styles.infoCardTextHolder}>
                <Text style={[styles.infoCardText, styles.payment]}>
                  WARNING
                </Text>
                <Text style={styles.infoCardTextPara}>
                  {i18n.t("modal.warningDetails")}
                </Text>
              </View>
            </View>
            <View style={styles.infoCards}>
              <SafeSSL size={30} color={"#5E72E4"} />
              <View style={styles.infoCardTextHolder}>
                <Text style={styles.sslText}>{i18n.t("modal.sslDetails")}</Text>
              </View>
            </View>
            <View style={styles.infoCards}>
              <UnsafeSSL size={30} color={"#5E72E4"} />
              <View style={styles.infoCardTextHolder}>
                <Text style={styles.sslText}>
                  {i18n.t("modal.nonSslDetails")}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  };
  //modal
  return (
    <View style={styles.detailsCardHolder}>
      <ModalCard
        isModalVisable={modalVisible}
        closeModal={() => setModalVisable(!modalVisible)}
        modalView={modalView}
      />
      {isSafe !== undefined ? (
        <View style={styles.detailsCard}>
          <View style={styles.detailsIconCenter}>
            {/* {isVerified ? (
              <View style={styles.detailsIconHolder}>
            <HashMarkTilted size={70} color={"#5E72E4"} />
          </View>
            ) : ( */}
            <View style={styles.detailsIconHolder}>
              <Link size={70} color={"#5E72E4"} />
            </View>
            {/* )} */}
          </View>
          <View style={styles.detailsContent}>
            <View style={styles.detailsIndicator}>
              <View style={styles.detailsIndicatorIcon}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  {/* {
                    isVerified ? (
                    <View style={styles.barContent}>
                      <View style={{ paddingLeft: 10 }}>
                        <HashMarkVerified size={35} color={"#1EA15D"} />
                      </View>
                      <Text style={styles.hashMarkContent}>
                        {i18n.t("modal.blockChainContent")}
                      </Text>
                    </View>
                  ) : */}
                  {hasThreat ? (
                    <View style={styles.barContent}>
                      <Text style={styles.barContentBlockDanger}>
                        {" "}
                        {i18n.t("modal.notVerified")}
                      </Text>
                      <View style={styles.barContentImageDanger}>
                        <Risk size={35} color={"#1EA15D"} />
                      </View>
                    </View>
                  ) : !isSafe ? (
                    <View style={styles.barContent}>
                      <Text style={[styles.barContentBlock]}>
                        {i18n.t("modal.notVerified")}
                      </Text>
                      <View style={styles.barContentImageWarning}>
                        <Payment size={35} color={"#1EA15D"} />
                      </View>
                    </View>
                  ) : (
                    <View style={styles.barContent}>
                      <Text style={styles.barContentBlockTrust}>
                        {" "}
                        {i18n.t("modal.notVerified")}
                      </Text>
                      <View style={styles.barContentImageTrust}>
                        <Trusted size={35} color={"#1EA15D"} />
                      </View>
                    </View>
                  )}
                </View>
                {/* {hasThreat ? (
                  <Text style={styles.detailsIndicatorRisk}>
                    {i18n.t("threat.typeUnSafe")}
                  </Text>
                ) : !isSafe ? (
                  <Text style={styles.detailsIndicatorWarning}>
                    {i18n.t("threat.typeNotSecure")}
                  </Text>
                ) : (
                  <Text style={styles.detailsIndicatorText}>
                    {i18n.t("threat.typeSafe")}
                  </Text>
                )} */}
              </View>
              <View style={styles.detailsProtectionBar}>
                <View
                  style={[
                    styles.protectionBar,
                    styles.protectionBarFirst,
                    styles.blockChainVerified,
                  ]}
                ></View>
                <View style={[styles.protectionBar, styles.safeLink]}></View>
                <View
                  style={[styles.protectionBar, styles.protectionBarSecond]}
                ></View>
                <View style={[styles.protectionBar, styles.notSafe]}></View>
              </View>
              <View style={styles.barText}>
                <Text style={styles.barTextSafe}>Safe</Text>
                <Text style={styles.barTextDanger}>Unsafe</Text>
              </View>
              <ThreatType
                isSafe={isSafe}
                hasThreat={hasThreat}
                type={threatType}
              />
            </View>

            {/* <TouchableOpacity
              style={styles.detailsInfo}
              onPress={() => {
                setModalVisable(true);
              }}
            >
              <QrIcons size={20} type={"INFO"} color={"#1EA15D"} />
            </TouchableOpacity> */}
          </View>
        </View>
      ) : (
        ActivityIndicatorLoadingView()
      )}
      {isSafe !== undefined ? (
        <View style={styles.detailsCard}>
          <View style={styles.sslIcon}>
            <View style={{ flex: 1 }}>
              {!title?.startsWith("https:") ? (
                <UnsafeSSL size={35} />
              ) : threatType === "SEQR_CERT_EXPIRY" ? (
                <SafeSSL size={35} color={"#FF0707"} />
              ) : (
                <SafeSSL size={35} />
              )}
            </View>
            <Text
              style={isSafe ? styles.sslText : styles.sslTextRisk}
              numberOfLines={1}
            >
              <Text style={styles.detailsLinkText} numberOfLines={1}>
                {title}
              </Text>
            </Text>
          </View>
          {/* <View style={styles.detailsCertificationInfo}>
            {certificate?.issuer && (
              <View style={styles.detailsIssuedInfo}>
                <Text style={styles.detailsIssuedInfoText} numberOfLines={1}>
                  Issued by {certificate.issuer?.O}
                </Text>
                <Text style={styles.detailsIssuedInfoText} numberOfLines={1}>
                  {certificate.issuer?.CN}
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.techDetailsLink}
              onPress={() => techDetailsClick()}
            >
              <Text style={styles.techDetailsText}>Tech details</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.detailsRedirectLinkHolder}>
            <TouchableOpacity onPress={openInApp}>
              <View style={styles.detailsRedirectLinkHeader}>
                <Text style={styles.detailsRedirectLinkText}>
                  Destination link
                </Text>
                <View style={styles.detailsShare}>
                  <TouchableOpacity
                    style={styles.detailsShareButtons}
                    onPress={copyToClipBoard}
                  >
                    <Copy size={20} color={"#707070"} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.redirectLink} numberOfLines={1}>
                {data}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsgoogleSuggestion}>
            <Text style={styles.detailsgoogleSuggestionText}>
              {i18n.t("message.lastUpdated", {
                date: dayjs().format("DD MMM, YYYY"),
              })}{" "}
              {i18n.t("message.siteSaftey")}
            </Text>
            {/* <Text style={styles.detailsgoogleSuggestionText}>
                {i18n.t("messageSiteSaftey")}{" "}
              </Text> */}
            {/* <Text style={styles.detailsgoogleSuggestionText}>
                Safe Browsing Advisory{" "}
              </Text> */}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default DetailsCard;
