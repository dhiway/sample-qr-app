import React, {
  Component,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import {
  useNavigation,
  useIsFocused,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import {
  StyleSheet,
  ScrollView,
  AppState,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
} from "react-native";
import { Flash, FlashOff } from "../../shared/Icons";
import styles from "../Scan/styles";
import CommanStyles from "../../utils/CommanStyles";
import { AppContext } from "../../providers/AppContext";
import QrScanner from "../../shared/QrScanner";
import { RNCamera } from "react-native-camera";
import dayjs from "dayjs";
import Images from "../../shared/Images";
import Geolocation from "@react-native-community/geolocation";
// import { getData } from "../../lib/datastore";
import {
  check,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  request,
} from "react-native-permissions";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";

let checkTime;
const Scan = ({ setRefreshRequired }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocus = useIsFocused();
  const [isTorchOn, setTorchOn] = useState(false);
  const [showScanner, setShowScanner] = useState();

  let startTime = dayjs();
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();

  const [imgX, setImgX] = useState();
  const [imgY, setImgY] = useState();
  const [imgContent, setImgContent] = useState();

  const [timer, setTimerVariable] = useState();
  const [changeTab, setTabChange] = useState(false);
  const [cameraChange, setCamera] = useState(true);

  function checkForCameraPerm() {
    if (Platform.OS === "android") {
      check(PERMISSIONS.ANDROID.CAMERA)
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              break;
            case RESULTS.DENIED:
              request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                if (result == "blocked" || result == "denied") {
                  /* Add an Alert here */
                  Alert.alert(
                    i18n.t("scan.noCameraAccess"),
                    i18n.t("scan.noCameraAccessDetail")
                  );
                } else {
                  setShowScanner(true);
                }
              });
              break;
            case RESULTS.GRANTED:
              setShowScanner(true);
              break;
            case RESULTS.BLOCKED:
              /* Add an Alert here */
              setShowScanner(false);
              if (isFocus) {
                Alert.alert(
                  i18n.t("scan.noCameraAccess"),
                  i18n.t("scan.noCameraAccessDetail"),
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Settings", onPress: () => Linking.openSettings() },
                  ],
                  { cancelable: false }
                );
              }

              // Linking.openSettings();
              break;
          }
        })
        .catch((error) => {
          // ?
          // alert("something went wrong")
          console.log("perm check error", error);
        });
    } else {
      check(PERMISSIONS.IOS.CAMERA)
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              break;
            case RESULTS.DENIED:
              request(PERMISSIONS.IOS.CAMERA).then((result) => {
                if (result == "blocked" || result == "denied") {
                  /* Add an Alert here */
                  Alert.alert(
                    i18n.t("scan.noCameraAccess"),
                    i18n.t("scan.noCameraAccessDetail")
                  );
                  // setTimeout(() => {
                  //   navigation.goBack();
                  // }, 1000);
                } else {
                  setShowScanner(true);
                }
              });
              break;
            case RESULTS.GRANTED:
              setShowScanner(true);
              break;
            case RESULTS.BLOCKED:
              /* Add an Alert here */
              setShowScanner(false);
              Alert.alert(
                i18n.t("scan.noCameraAccess"),
                i18n.t("scan.noCameraAccessDetail"),
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Settings", onPress: () => Linking.openSettings() },
                ],
                { cancelable: false }
              );
              // Linking.openSettings();
              break;
          }
        })
        .catch((error) => {
          // ?
          // alert("something went wrong")
          console.log("perm check error", error);
        });
    }
  }
  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState == "active") {
      if (Platform.OS == "android") {
        checkForCameraPerm();
      }
    }
  };
  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      clearTimeout(checkTime);
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  });

  useFocusEffect(
    React.useCallback(() => {
      setShowScanner(true);
      if (isFocus) {
        checkForCameraPerm();
      }
      return () => {
        clearTimeout(checkTime);
      };
    }, [isFocus])
  );

  const onBarcodeRead = (event) => {
    const barcodes = event.barcodes;
    if (!showScanner || barcodes.length == 0) return;

    const timeTaken = dayjs().diff(startTime, "milliseconds");
    setTorchOn(false);
    var validCode = undefined;
    for (var i = 0; i < barcodes.length; i++) {
      var code = barcodes[i];
      /* noticed that iOS doesn't return `format` field, so
         check for both 'format', and 'type' */
      if (code.format === "UNKNOWN" || code.type === "UNKNOWN") {
        console.log(code);
        continue;
      }
      validCode = code;
      console.log("Received RNCamera Response: ", code);
    }
    if (!validCode) {
      return;
    }
    setShowScanner(false);
    if (timer) {
      clearTimeout(timer);
      setTimerVariable(null);
    } else {
      console.log("Something wrong, timer should be available");
    }
    console.log("QR Raw Content : ", validCode.dataRaw);
    console.log("TimeTaken: ", timeTaken);
    setImgX(validCode.bounds.origin.x);
    setImgY(validCode.bounds.origin.y);

    navigation.navigate({
      name: "Details",
      params: {
        data: validCode.dataRaw,
        timeTaken,
        lat,
        lng,
        newScan: true,
        mlkitResponse: validCode,
        redirectedRoute: "Scan",
      },
    });

    /* This will make sure we have a changed value in 'Activity' */
    // setTimeout(() => {
    //   setRefreshRequired(dayjs());
    //   setShowScanner(true);
    // }, 1000);
  };

  const toggleTorch = () => {
    setTorchOn(!isTorchOn);
  };

  return (
    <>
      <View style={CommanStyles.greyContainer}>
        <View style={{ flex: 1 }}>
          {isFocus && showScanner && (
            <QrScanner onBarReadSuccess={onBarcodeRead} torchOn={isTorchOn} />
          )}
          <View style={styles.cameraButtonHolder}>
            <TouchableOpacity
              style={styles.cameraButtons}
              onPress={toggleTorch}
              activeOpacity={1}
              accessible={true}
              accessibilityLabel="Flash"
            >
              {!isTorchOn ? (
                <FlashOff size={20} color={"#fff"} />
              ) : (
                <Flash size={20} color={"#fff"} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Scan;
