import React, { useEffect, useState, useContext } from "react";
import { View, StatusBar, Image, BackHandler } from "react-native";
import styles from "./styles";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";
import { AppContext } from "../../providers/AppContext";

const data = [
  {
    key: "0",
    title: i18n.t("onboard.title0"),
    subTitle: i18n.t("onboard.subTitle0"),
    description: i18n.t("onboard.description0"),
    image: require("../../../assets/images/onboarding.png"),
  },
  {
    key: "1",
    topContent: i18n.t("onboard.topContent1"),
    title: i18n.t("onboard.title1"),
    subTitle: i18n.t("onboard.subTitle1"),
    description: i18n.t("onboard.description1"),
    image: require("../../../assets/images/onboarding2.png"),
  },
  /*
  {
    key: "2",
    topContent: i18n.t("onboard.centerContent2"),
    title: i18n.t("onboard.title2"),
    subTitle: i18n.t("onboard.subTitle2"),
    description: i18n.t("onboard.description2"),
    image: require("../../../assets/images/onboarding3.png"),
  },
*/
];

const Onboarding = ({ route }) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const fromSetting = route?.params?.fromSetting;
  const [showScreen, setShowScreen] = useState(false);
  const {
    onBoading,
    onBoadingShow,
    navigateScreen,
    onBoardingDone,
    onBoardingSkip,
  } = useContext(AppContext);
  useEffect(() => {
    onBoading(!fromSetting);
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  useEffect(() => {
    if (navigateScreen) {
      navigation.navigate("Permissions");
    }
  }, [navigateScreen]);

  function handleBackButtonClick() {
    /* TODO: here was 'current screen' check */
    BackHandler.exitApp();
  }

  useEffect(() => {
    isFocused && onBoadingShow ? setShowScreen(true) : setShowScreen(false);
  }, [isFocused, onBoadingShow]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slider}>
        {item.topContent && (
          <Text style={styles.topHeader}>{item.topContent}</Text>
        )}
        <Image
          resizeMode={"contain"}
          source={item.image}
          style={styles.sliderImage}
        />
        <View style={styles.sliderContentHolder}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.sliderButtons}>
        <Text style={styles.nextText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.sliderButtons}>
        <Text style={styles.nextText}>Next</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.sliderButtons}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
    );
  };
  const onDone = async () => {
    onBoardingDone("onboardingComplete", "true");
    navigation.navigate("Permissions");
  };
  const onSkip = async () => {
    onBoardingSkip("onboardingComplete", "false");
    navigation.navigate("Permissions");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {showScreen && (
        <AppIntroSlider
          renderItem={renderItem}
          data={data}
          dotStyle={styles.dotStyles}
          activeDotStyle={styles.activeDotStyles}
          showSkipButton={true}
          showNextButton={true}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          onDone={onDone}
          onSkip={onSkip}
          dotClickEnabled={false}
        />
      )}
    </>
  );
};

export default Onboarding;
