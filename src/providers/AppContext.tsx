import React, { useState, createContext, useEffect } from "react";

import { storeData, getData } from "../lib/datastore";
import i18n from "../lib/I18n";

import { checkMultiple, PERMISSIONS } from "react-native-permissions";

export const AppContext = createContext<AppState | any>({});

export const AppProvider = (props: any) => {
  // For Permissions
  const [grantedPermissionCount, setGrantedPermissionCount] = useState(0);
  const [permissionShow, setPermissionShow] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const [hasPerm, setPermission] = useState(null);
  const [onboardingCheck, setOnboardingCheck] = useState(null);
  const [defaultActivity, setDefaultActivity] = useState(false);

  const [onBoadingShow, setOnBoardingShow] = useState(false);

  const [navigateScreen, setNavigate] = useState(false);

  useEffect(() => {
    async function checkPerm() {
      var permissions = null;
      try {
        permissions = await getData("permissions");
      } catch (err) {
        console.log(err);
      }
      if (permissions) setHasPermission(true);

      if (!permissions) {
        checkMultiple([
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          //PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          //PERMISSIONS.IOS.PHOTO_LIBRARY,
        ]).then((statuses) => {
          var c = 0;
          if (
            statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === "granted" ||
            statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === "granted"
          )
            c += 1;
          if (
            statuses[PERMISSIONS.ANDROID.CAMERA] === "granted" ||
            statuses[PERMISSIONS.IOS.CAMERA] === "granted"
          )
            c += 1;
          /*
          if (
            statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] === "granted" ||
            statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === "granted"
          )
            c += 1;
	    */
          setGrantedPermissionCount(c);
          if (c < 2) {
            setPermissionShow(true);
          }
        });
      }
    }

    checkPerm();
  }, []);

  async function getLocale() {
    try {
      var onboardingProcess = await getData("onboardingComplete");
      var defaultScreen = await getData("defaultActivityScreen");
      var permissions = await getData("permissions");
      var locale = await getData("locale");
      if (locale) i18n.changeLanguage(locale.value);
      onboardingProcess ? setOnboardingCheck(true) : setOnboardingCheck(false);
      permissions ? setPermission(true) : setPermission(false);

      if (defaultScreen) {
        if (defaultScreen.value)
          setDefaultActivity(JSON.parse(defaultScreen.value));
      }
      console.log(
        "sample",
        onboardingProcess,
        permissions,
        defaultScreen,
        locale
      );
    } catch (err) {
      console.log(err);
      setPermission(false);
      setOnboardingCheck(false);
    }
  }

  async function languageDataSave(id) {
    await storeData("languageSelected", JSON.stringify(id));
  }

  async function onBoading(fromSetting) {
    try {
      var onboardingDone = await getData("onboardingComplete");
      if (fromSetting && onboardingDone && onboardingDone.value) {
        setNavigate(true);
      } else setOnBoardingShow(true);
    } catch (err) {
      console.log(err);
      setOnBoardingShow(true);
    }
  }

  const storePermissionData = (key, value) => {
    storeData(key, value);
  };

  const onBoardingDone = async (key, value) => {
    await storeData(key, value);
  };

  const onBoardingSkip = async (key, value) => {
    console.log("onDone");
    await storeData(key, value);
  };
  return (
    <AppContext.Provider
      value={{
        languageDataSave,

        grantedPermissionCount,
        permissionShow,
        hasPermission,
        storePermissionData,

        hasPerm,
        onboardingCheck,
        defaultActivity,
        getLocale,

        onBoading,
        onBoadingShow,
        navigateScreen,
        onBoardingDone,
        onBoardingSkip,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
