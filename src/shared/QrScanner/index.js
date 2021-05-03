import React, { Fragment, useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Animated,
  Easing,
  Image,
  Platform,
  AppState,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import { RNCamera } from "react-native-camera";
import i18n from "../../lib/I18n";
import Text from "../../shared/Text";

// WIP - rectOfInterest
const CAM_VIEW_HEIGHT = Dimensions.get("screen").width * 1.5;
const CAM_VIEW_WIDTH = Dimensions.get("screen").width;

const defaultRectStyle = {
  height: 260,
  width: 260,
  borderWidth: 0,
  borderColor: "#000000",
  marginBottom: 0,
};
const defaultCornerStyle = {
  height: 32,
  width: 32,
  borderWidth: 3,
  borderColor: "#fff",
};
const defaultScanBarStyle = {
  marginHorizontal: 4,
  borderRadius: 1,
  height: 3,
  backgroundColor: "#fff",
};
const defaultHintTextStyle = {
  color: "#fff",
  // fontFamily: "Roboto-Regular",
  fontWeight: "bold",
  fontSize: 18,
  // backgroundColor: "transparent",
  backgroundColor: "#01010152",
  padding: 10,
  borderRadius: 5,
  // marginTop: StatusBar.currentHeight + 120,
};

// WIP - rectOf Interest
const defaultRectOfInterest = {
  x: (CAM_VIEW_WIDTH - defaultRectStyle.width) / 2,
  y: (CAM_VIEW_HEIGHT - defaultRectStyle.height) / 2,
  width: defaultRectStyle.width,
  height: defaultRectStyle.height,
};

/**
 * Create by Marno on 2019-08-19 18:32
 * Function: Scan the UI layer of the interface
 * Desc: write a class separately for easy copying and use
 */
const QRScannerRectView = () => {
  const maskColor = "#0000004D";
  const cornerOffsetSize = 30;
  const isShowScanBar = true;
  const isShowCorner = true;
  const scanBarAnimateTime = 5000;
  const scanBarHeight = 5;
  const scanBarAnimateReverse = true;
  const hintText = i18n.t("scan.qrHint");
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const innerRectStyle = defaultRectStyle;
  const innerCornerStyle = defaultCornerStyle;
  const innerScanBarStyle = defaultScanBarStyle;
  const innerHintTextStyle = defaultHintTextStyle;

  const [scanBarAnimation, setScanBarAnimation] = useState();

  useEffect(() => {
    scanBarMove();
    return () => {
      scanBarAnimation && scanBarAnimation.stop();
    };
  }, []);

  // scan animation
  function scanBarMove() {
    const scanBarHeight = isShowScanBar ? innerScanBarStyle.height || 4 : 0;
    const startValue = innerCornerStyle.borderWidth;
    const endValue =
      innerRectStyle.height -
      (innerRectStyle.borderWidth +
        cornerOffsetSize +
        innerCornerStyle.borderWidth) -
      scanBarHeight * 8;

    if (scanBarAnimateReverse) {
      setScanBarAnimation(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: endValue,
            duration: scanBarAnimateTime,
            easing: Easing.linear,
            isInteraction: false,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: startValue,
            duration: scanBarAnimateTime,
            easing: Easing.linear,
            isInteraction: false,
            useNativeDriver: true,
          }),
        ]).start(() => scanBarMove())
      );
    } else {
      setAnimatedValue(startValue);
      setScanBarAnimation(
        Animated.timing(animatedValue, {
          toValue: endValue,
          duration: scanBarAnimateTime,
          easing: Easing.linear,
          isInteraction: false,
          useNativeDriver: true,
        }).start(() => scanBarMove())
      );
    }
  }

  //Get the background color
  const getBackgroundColor = () => {
    return { backgroundColor: maskColor };
  };

  //Get the background size of the scan box
  const getRectSize = () => {
    return {
      height: innerRectStyle.height,
      width: innerRectStyle.width,
    };
  };

  //Get the scan frame offset
  const getRectOffsetHeight = () => {
    return { height: innerRectStyle.marginBottom };
  };

  //Get the size of the scan frame
  function getBorderStyle() {
    return {
      height: innerRectStyle.height - cornerOffsetSize * 2,
      width: innerRectStyle.width - cornerOffsetSize * 2,
      borderWidth: innerRectStyle.borderWidth,
      borderColor: innerRectStyle.borderColor,
    };
  }

  //Get the color of the corner of the scan box
  function getCornerStyle() {
    return {
      height: innerCornerStyle.height,
      width: innerCornerStyle.width,
      borderColor: innerCornerStyle.borderColor,
    };
  }

  function getScanImageWidth() {
    return innerRectStyle.width - innerScanBarStyle.marginHorizontal * 2;
  }

  //Draw scan line
  function renderScanBar() {
    const scanBarImage = false;
    if (!isShowScanBar) return;
    return scanBarImage ? (
      <Image
        source={scanBarImage}
        style={[
          innerScanBarStyle,
          {
            resizeMode: "contain",
            backgroundColor: "transparent",
            width: getScanImageWidth(),
          },
        ]}
      />
    ) : (
      <View style={[{ height: 4 }, innerScanBarStyle]} />
    );
  }

  const animatedStyle = {
    transform: [{ translateY: animatedValue }],
  };

  const { borderWidth } = innerCornerStyle;

  return (
    <View style={[styles.container, { bottom: 0 }]}>
      {/*Mask above the scan frame*/}
      <View
        style={[
          getBackgroundColor(),
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text style={innerHintTextStyle} numberOfLines={1}>
          {hintText}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {/*Mask on the left side of the scan box*/}
        <View style={[getBackgroundColor(), { flex: 1 }]} />

        {/*Scan box*/}
        <View style={[styles.viewfinder, getRectSize()]}>
          {/*Scan the border of the frame*/}
          <View style={getBorderStyle()}>
            <Animated.View style={[animatedStyle]}>
              {renderScanBar()}
            </Animated.View>
          </View>

          {/*/!*Scan box corner-upper left corner*!/*/}
          {isShowCorner && (
            <View
              style={[
                getCornerStyle(),
                styles.topLeftCorner,
                { borderLeftWidth: borderWidth, borderTopWidth: borderWidth },
              ]}
            />
          )}

          {/*Scanning box corner-upper right corner*/}
          {isShowCorner && (
            <View
              style={[
                getCornerStyle(),
                styles.topRightCorner,
                {
                  borderRightWidth: borderWidth,
                  borderTopWidth: borderWidth,
                },
              ]}
            />
          )}

          {/*Scan box corner-bottom left corner*/}
          {isShowCorner && (
            <View
              style={[
                getCornerStyle(),
                styles.bottomLeftCorner,
                {
                  borderLeftWidth: borderWidth,
                  borderBottomWidth: borderWidth,
                },
              ]}
            />
          )}

          {/*Scan box corner-lower right corner*/}
          {isShowCorner && (
            <View
              style={[
                getCornerStyle(),
                styles.bottomRightCorner,
                {
                  borderRightWidth: borderWidth,
                  borderBottomWidth: borderWidth,
                },
              ]}
            />
          )}
        </View>

        {/*Mask on the right side of the scan box*/}
        <View style={[getBackgroundColor(), { flex: 1 }]} />
      </View>

      {/*Mask below the scan frame*/}
      <View style={[getBackgroundColor(), { flex: 1, alignItems: "center" }]} />

      <View style={[getBackgroundColor(), getRectOffsetHeight()]} />
    </View>
  );
};

/**
 * Create by Marno on 2019-08-19 18:33
 * Function: Camera layer of scan code interface
 * Desc：
 */
const QRScannerView = ({ torchOn, onBarReadSuccess }) => {
  const [rnCamera, setRnCamera] = useState(null);
  const useFront = false;

  // WIP - rectOfInterest
  /*
  console.log(
    torchOn,
    defaultRectOfInterest.x,
    defaultRectOfInterest.y,
    defaultRectOfInterest.width,
    defaultRectOfInterest.height,
    CAM_VIEW_HEIGHT,
    CAM_VIEW_WIDTH
  );
*/
  return (
    <RNCamera
      ref={(ref) => setRnCamera(ref)}
      captureAudio={false}
      rectOfInterest={{
        x: defaultRectOfInterest.x,
        y: defaultRectOfInterest.y,
        width: defaultRectOfInterest.height,
        height: defaultRectOfInterest.width,
      }}
      cameraViewDimensions={{
        width: CAM_VIEW_WIDTH,
        height: CAM_VIEW_HEIGHT,
      }}
      onGoogleVisionBarcodesDetected={onBarReadSuccess}
      googleVisionBarcodeType={
        RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.QR_CODE |
        RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.EAN_13
      }
      googleVisionBarcodeMode={
        RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE
      }
      type={
        useFront ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
      }
      flashMode={
        torchOn
          ? RNCamera.Constants.FlashMode.torch
          : RNCamera.Constants.FlashMode.off
      }
      style={{ flex: 1 }}
    >
      <Fragment>
        {Platform.OS === "ios" && (
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#F8F9FE"
            translucent={true}
          />
        )}
        <QRScannerRectView />
      </Fragment>
      {/*Draw the top title bar component*/}
      {false && renderHeaderView && (
        <View style={[styles.topContainer]}>{renderHeaderView()}</View>
      )}

      {/*Draw the bottom operation bar*/}
      {false && renderFooterView && (
        <View style={[styles.bottomContainer]}>{renderFooterView()}</View>
      )}
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  viewfinder: {
    alignItems: "center",
    justifyContent: "center",
  },
  topLeftCorner: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  topRightCorner: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bottomLeftCorner: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  bottomRightCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default QRScannerView;
