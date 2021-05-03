import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import styles from "../Permissions/styles";
import commanStyles from "../../utils/CommanStyles";
import { AppContext } from "../../providers/AppContext";
import { PERMISSIONS, requestMultiple } from "react-native-permissions";
import SnackBar from "react-native-snackbar";
import Images from "../../shared/Images";
import Button from "../../shared/Button";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";

// Detailed list of permissions
function PermissionList({ denyClick }) {
  return (
    <>
      <View style={styles.permissionListHeader}>
        <View style={styles.permissionListHeaderHolder}>
          <Text style={styles.permissionListHeadText}>
            {i18n.t("permission.seqrAsk")}
          </Text>
        </View>

        <View style={styles.denyButton}>
          <TouchableOpacity style={styles.denyButtonGrey} onPress={denyClick}>
            <Text style={styles.denyButtonText}>
              {i18n.t("permission.deny")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.permissionList}>
        <View style={styles.permissionsRow}>
          <View style={styles.permissionLogo}>
            <Image source={Images.cameraIcon} />
          </View>
          <View style={styles.permissionDescription}>
            <Text style={styles.permissionHead}>
              {i18n.t("permission.accessCamera")}
            </Text>
            <Text style={styles.permissionDescriptionPara}>
              {i18n.t("permission.cameraReason")}
            </Text>
          </View>
        </View>
        {false && (
          <View style={styles.permissionsRow}>
            <View style={styles.permissionLogo}>
              <Image source={Images.storageIcon} />
            </View>
            <View style={styles.permissionDescription}>
              <Text style={styles.permissionHead}>
                {i18n.t("permission.accessStorage")}
              </Text>
              <Text style={styles.permissionDescriptionPara}>
                {i18n.t("permission.storageReason")}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.permissionsRow}>
          <View style={styles.permissionLogo}>
            <Image source={Images.locationIcon} />
          </View>
          <View style={styles.permissionDescription}>
            <Text style={styles.permissionHead}>
              {i18n.t("permission.accessLocation")}
            </Text>
            <Text style={styles.permissionDescriptionPara}>
              {i18n.t("permission.locationReason")}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
// Detailed list of permissions
export default function PermissionsModule({ navigation }) {
  const {
    grantedPermissionCount,
    permissionShow,
    hasPermission,
    storePermissionData,
  } = useContext(AppContext);

  function gotoNextScreen() {
    if (!hasPermission) {
      storePermissionData("permissions", "done");
    }
    navigation.navigate("Scan");
  }

  // Disabling the backbutton
  function handleBackButtonClick() {
    BackHandler.exitApp();
  }

  //Accessing Multiple permissions
  function grantPermissions() {
    requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      //PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      //PERMISSIONS.IOS.PHOTO_LIBRARY,
    ])
      .then((statuses) => {
        console.log(
          "location",
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
        );
        console.log("Camera", statuses[PERMISSIONS.ANDROID.CAMERA]);
        console.log(
          "Read",
          statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]
        );
      })
      .then(() => {
        console.log("completed");
        gotoNextScreen();
      });
  }

  useEffect(() => {
    if (grantedPermissionCount === 2 || hasPermission) {
      gotoNextScreen();
    }
  }, [grantedPermissionCount, hasPermission]);

  // Deny permissions
  function denyPermissions() {
    SnackBar.show({ text: i18n.t("permission.proceedWithout") });
    gotoNextScreen();
  }

  if (!permissionShow) return null;

  return (
    <>
      <ScrollView>
        <View style={styles.permissionsList}>
          <PermissionList denyClick={() => denyPermissions()} />
        </View>
      </ScrollView>
      <View style={styles.bottomButtonHolder}>
        <Button
          text={i18n.t("permission.grant")}
          textStyle={commanStyles.primaryButtonText}
          buttonStyle={commanStyles.primaryButton}
          onClick={() => grantPermissions()}
        />
      </View>
    </>
  );
}
