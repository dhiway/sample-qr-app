import React, { Component, useEffect } from "react";
import { WebView } from "react-native-webview";
import Header from "../../shared/Header";
import commanStyles from "../../utils/CommanStyles";
import { SafeAreaView, StatusBar, ActivityIndicator } from "react-native";
import i18n from "../../lib/I18n";

const Webview = ({ route }) => {
  const url = route.params.url;
  const title = route.params.title;
  /* Figure out how to make this completely secure */

  const ActivityIndicatorLoadingView = () => {
    //making a view to show to while loading the webpage
    return <ActivityIndicator color="#009688" size="large" />;
  };

  return (
    <SafeAreaView
      style={[commanStyles.safeView, { paddingTop: StatusBar.currentHeight }]}
    >
      <Header
        edit={true}
        isHistoryEdit={true}
        title={title ? title : i18n.t("app.seqrByDhiway")}
        isBackEnable={true}
        currentRoute={"Webview"}
      />
      <WebView
        source={{ uri: url }}
        renderLoading={ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

export default Webview;
