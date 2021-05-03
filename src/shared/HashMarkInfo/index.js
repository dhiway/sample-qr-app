import React, { useState, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";
import { WebView } from "react-native-webview";
import dayjs from "dayjs";
import {
  HashMarkLogo,
  Copy,
  HashMarkVerified,
  Dhiwaylogo,
  SafeSSL,
  Close,
} from "../Icons";
import i18n from "../../lib/I18n";
import Text from "../Text";
const tableHead = ["Key", "Value"];
const HashMarkInfo = ({
  title,
  displayData,
  copyToClipBoard,
  openInApp,
  hashLink,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [tableColKeyData, setTableKeyData] = useState();

  useEffect(() => {
    async function tableKeyData() {
      setTableKeyData(displayData?.data);
    }
    tableKeyData();
  }, [displayData]);

  const closeModal = () => {
    setModalVisible(!isModalVisible);
  };
  const createdAt = (date) => {
    let now = dayjs(date);
    return now.format("D MMMM YYYY h:mm A");
  };
  if (!displayData.data) {
    return (
      <View style={styles.outsideContainer}>
        {displayData?.loading && (
          <ActivityIndicator
            color="#00C3E6"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        )}
        {displayData?.loading === false && displayData.statusCode !== 200 && (
          <Text style={styles.textError}>Error while loading #MARK</Text>
        )}
      </View>
    );
  }
  if (!hashMark?.content && hashMark?.hidden === false) {
    return (
      <View style={styles.outsideContainer}>
        <Text style={styles.textError}>Error while loading #MARK</Text>
      </View>
    );
  }
  if (!title) title = "Dhiway #MARK you scanned contains below details";
  const hashMark = displayData.data;
  let url = hashMark?.content?.url;

  const ActivityIndicatorLoadingView = () => {
    //during loading it is visible instead of webview
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };

  const fieldName = (rightBarData, key) => {
    let label = key;
    let types = rightBarData?.schema?.properties?.filter((p) => {
      return p.key === key;
    });

    if (types.length > 0) {
      label =
        types[0].label !== undefined
          ? types[0].label
          : key.charAt(0).toUpperCase() + key.slice(1);
    }

    return label;
  };

  const dataShow = (dataSet, key) => {
    let data = dataSet.content[key];
    if (dataSet.schema.title === "Documents" && key === "file") {
      return data.originalname;
    }

    let types = dataSet.schema.properties.filter((p) => {
      return p.key === key;
    });

    // Do not show time if it is date field
    if (types.length > 0 && types[0].type === "date") {
      return dayjs(data).format("D MMMM YYYY");
    }

    // Do not show content if it is file
    if (types.length > 0 && types[0].type === "file") {
      if (
        data.mimetype !== undefined &&
        ["image/png", "image/jpeg"].indexOf(data.mimetype) !== -1
      ) {
        return (
          <View style={styles.imageContainer}>
            <Image
              //  resizeMode={'cover'}
              style={styles.imageAlign}
              source={{ uri: `data:${data.mimetype};base64,${data.content}` }}
            />
          </View>
        );
      } else {
        return "blob";
      }
    }

    return data;
  };

  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <HashMarkLogo size={70} color={"#5E72E4"} />
          </View>
        </View>

        <View style={styles.barContent}>
          <View style={{ paddingLeft: 10 }}>
            <HashMarkVerified size={35} color={"#1EA15D"} />
          </View>
          <Text style={styles.hashMarkContent}>
            {i18n.t("modal.blockChainContent")}
          </Text>
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
          <Text style={[styles.barTextDanger, { opacity: 0.2 }]}>Unsafe</Text>
        </View>
        <View>
          <Text style={styles.detailsIndicatorHashCode}>
            {i18n.t("threat.hashCodeText")}
          </Text>
          <Text style={styles.detailsDescriptionWarning}>
            {i18n.t("threat.hashCodeDescription")}
          </Text>
          <TouchableOpacity
            style={styles.appOpenButton}
            onPress={() => closeModal()}
          >
            <Text style={styles.appOpenButtonText}>
              {i18n.t("common.moreInformation")}
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={isModalVisible}
          animationType="slide"
          onSwipeComplete={() => closeModal()}
          swipeDirection="down"
          backdropOpacity={0.4}
          animationIn="slideInUp"
          animationInTiming={600}
          animationOutTiming={400}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={1}
          style={{
            backgroundColor: "#fff",
            maxHeight: 320,
            marginTop: "85%",
            borderRadius: 20,
          }}
          onRequestClose={() => closeModal()}
        >
          <View
            style={[styles.infoModalContainer, { marginTop: 0, paddingTop: 0 }]}
          >
            <View style={{ marginTop: 0 }}>
              <View style={{ flexDirection: "row", paddingTop: 15 }}>
                <View style={{ flex: 3, flexDirection: "column" }}>
                  <Text style={styles.modalHeader}>#MARK Details</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={() => closeModal()}>
                    <Close size={30} color={"#5E72E4"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", flex: 1 }}>
                  <Text style={styles.showDataHeader}>
                    {i18n.t("hashMarkInformation.CreatedBy")}
                  </Text>
                  <Text style={styles.cardTextMain}>
                    {hashMark.createdBy.firstName +
                      " " +
                      hashMark.createdBy.lastName}
                  </Text>
                  <Text style={styles.showDataHeader}>
                    {i18n.t("hashMarkInformation.IssuedBy")}
                  </Text>
                  <Text style={styles.cardTextMain}>{hashMark.org.name}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Dhiwaylogo size={10} color={"#1EA15D"} />
                </View>
              </View>

              <Text style={styles.showDataHeader}>
                {i18n.t("hashMarkInformation.CreatedAt")}
              </Text>
              <Text style={styles.cardTextMain}>
                {createdAt(hashMark.createdAt)}
              </Text>
              <Text style={styles.showDataHeader}>
                {i18n.t("hashMarkInformation.HashLabel")}
              </Text>
              <Text style={styles.cardTextMain}>{hashMark.hash}</Text>
              <Text style={styles.showDataHeader}>
                {i18n.t("hashMarkInformation.Transaction")}
              </Text>
              {hashMark?.cordServerUrl ? (
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      hashMark.cordServerUrl + "/block/" + hashMark.blockHash
                    )
                  }
                >
                  <Text style={[styles.cardTextMain, { paddingBottom: 15 }]}>
                    {hashMark.blockHash}
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text style={[styles.cardTextMain, { paddingBottom: 15 }]}>
                  {hashMark.blockHash}
                </Text>
              )}
            </View>
          </View>
        </Modal>
      </View>
      {hashMark?.revoked ? (
        <View
          style={[
            styles.detailsCard,
            {
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 10,
              paddingTop: 10,
            },
          ]}
        >
          <Text
            style={[
              styles.detailsIndicatorHashCode,
              { color: "red", fontWeight: "bold" },
            ]}
          >
            This #MARK is Revoked
          </Text>
        </View>
      ) : null}
      {!hashMark?.content && hashMark?.hidden === true && (
        <View style={{ backgroundColor: "#fff", borderRadius: 10 }}>
          <Text style={styles.privateText}>
            {i18n.t("hashMarkInformation.hashMarkPrivate")}
          </Text>
        </View>
      )}
      {tableColKeyData?.content && (
        <View style={[styles.detailsCard]}>
          <Text style={styles.detailsLinkText}>{hashMark?.schema?.title}</Text>
          <View style={{ borderBottomWidth: 1, borderColor: "#8898aa" }}>
            {tableColKeyData ? (
              Object.keys(tableColKeyData.content).map((key, i) => {
                return (
                  <View key={key} style={styles.tableHolder}>
                    <View style={styles.keyData}>
                      <Text style={{ textAlign: "center" }}>
                        {fieldName(tableColKeyData, key)}
                      </Text>
                    </View>
                    <View style={styles.valueData}>
                      <Text style={{ textAlign: "center" }}>
                        {dataShow(tableColKeyData, key)}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </View>
        </View>
      )}
      {hashMark?.data?.content && (
        <>
          {hashMark?.schema?.category === "Webpage" && (
            <WebView
              scrollEnabled={true}
              style={styles.webCard}
              source={{ uri: url, headers: { Referer: hashLink } }}
              renderLoading={ActivityIndicatorLoadingView}
              startInLoadingState={true}
            />
          )}
        </>
      )}
    </View>
  );
};

export default HashMarkInfo;
