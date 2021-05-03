import React, { Component, Fragment } from "react";
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
  borderColor: "#333333",
  marginBottom: 0,
};
const defaultCornerStyle = {
  height: 32,
  width: 32,
  borderWidth: 1,
  borderColor: "#1A6DD5",
};
const defaultScanBarStyle = {
  marginHorizontal: 4,
  borderRadius: 1,
  backgroundColor: "#1A6DD5",
};
const defaultHintTextStyle = {
  color: "#fff",
  fontSize: 17,
  backgroundColor: "transparent",
  marginTop: 32,
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
export class QRScannerRectView extends Component {
  static propTypes = {
    maskColor: PropTypes.string, // mask color
    rectStyle: PropTypes.object, // Scan code box style

    cornerStyle: PropTypes.object, // corner style
    cornerOffsetSize: PropTypes.number, // Corner offset distance
    isShowCorner: PropTypes.bool, // Whether to display the corner

    isShowScanBar: PropTypes.bool, // Whether to display the scan bar
    scanBarAnimateTime: PropTypes.number, // scan animation duration
    scanBarAnimateReverse: PropTypes.bool, // scan bar moves back and forth
    scanBarImage: PropTypes.any, // Custom scan bar image
    scanBarStyle: PropTypes.object, // scan bar style

    hintText: PropTypes.string, // hint text
    hintTextStyle: PropTypes.object, // hint text style
  };

  static defaultProps = {
    maskColor: "#0000004D",
    cornerOffsetSize: 30,
    isShowScanBar: true,
    isShowCorner: true,
    scanBarAnimateTime: 5000,
    scanBarHeight: 5,
    scanBarAnimateReverse: true,
    hintText: i18n.t("scan.qrHint"),
  };

  state = {
    animatedValue: new Animated.Value(0),
  };

  constructor(props) {
    super(props);
    this.innerRectStyle = Object.assign(defaultRectStyle, props.rectStyle);
    this.innerCornerStyle = Object.assign(
      defaultCornerStyle,
      props.cornerStyle
    );
    this.innerScanBarStyle = Object.assign(
      defaultScanBarStyle,
      props.scanBarStyle
    );
    this.innerHintTextStyle = Object.assign(
      defaultHintTextStyle,
      props.hintTextStyle
    );
  }

  componentDidMount() {
    this.scanBarMove();
  }

  componentWillUnmount() {
    this.scanBarAnimation && this.scanBarAnimation.stop();
  }

  // scan animation
  scanBarMove() {
    const {
      cornerOffsetSize,
      scanBarAnimateReverse,
      isShowScanBar,
    } = this.props;
    const scanBarHeight = isShowScanBar
      ? this.innerScanBarStyle.height || 4
      : 0;
    const startValue = this.innerCornerStyle.borderWidth;
    const endValue =
      this.innerRectStyle.height -
      (this.innerRectStyle.borderWidth +
        cornerOffsetSize +
        this.innerCornerStyle.borderWidth) -
      scanBarHeight * 8;

    if (scanBarAnimateReverse) {
      this.scanBarAnimation = Animated.sequence([
        Animated.timing(this.state.animatedValue, {
          toValue: endValue,
          duration: this.props.scanBarAnimateTime,
          easing: Easing.linear,
          isInteraction: false,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: startValue,
          duration: this.props.scanBarAnimateTime,
          easing: Easing.linear,
          isInteraction: false,
          useNativeDriver: true,
        }),
      ]).start(() => this.scanBarMove());
    } else {
      this.state.animatedValue.setValue(startValue); //Reset Rotate animation value to 0
      this.scanBarAnimation = Animated.timing(this.state.animatedValue, {
        toValue: endValue,
        duration: this.props.scanBarAnimateTime,
        easing: Easing.linear,
        isInteraction: false,
        useNativeDriver: true,
      }).start(() => this.scanBarMove());
    }
  }

  //Get the background color
  getBackgroundColor = () => {
    return { backgroundColor: this.props.maskColor };
  };

  //Get the background size of the scan box
  getRectSize = () => {
    return {
      height: this.innerRectStyle.height,
      width: this.innerRectStyle.width,
    };
  };

  //Get the scan frame offset
  getRectOffsetHeight = () => {
    return { height: this.innerRectStyle.marginBottom };
  };

  //Get the size of the scan frame
  getBorderStyle() {
    const { cornerOffsetSize } = this.props;
    return {
      height: this.innerRectStyle.height - cornerOffsetSize * 2,
      width: this.innerRectStyle.width - cornerOffsetSize * 2,
      borderWidth: this.innerRectStyle.borderWidth,
      borderColor: this.innerRectStyle.borderColor,
    };
  }

  //Get the color of the corner of the scan box
  getCornerStyle() {
    return {
      height: this.innerCornerStyle.height,
      width: this.innerCornerStyle.width,
      borderColor: this.innerCornerStyle.borderColor,
    };
  }

  getScanImageWidth() {
    return (
      this.innerRectStyle.width - this.innerScanBarStyle.marginHorizontal * 2
    );
  }

  // Get the height of the scan bar image
  measureScanBarImage = (e) => {
    this.setState({ scanBarImageHeight: Math.round(e.layout.height) });
  };

  //Draw scan line
  renderScanBar() {
    const { isShowScanBar, scanBarImage } = this.props;

    if (!isShowScanBar) return;
    return scanBarImage ? (
      <Image
        source={scanBarImage}
        style={[
          this.innerScanBarStyle,
          {
            resizeMode: "contain",
            backgroundColor: "transparent",
            width: this.getScanImageWidth(),
          },
        ]}
      />
    ) : (
      <View style={[{ height: 4 }, this.innerScanBarStyle]} />
    );
  }

  render() {
    const animatedStyle = {
      transform: [{ translateY: this.state.animatedValue }],
    };

    const { borderWidth } = this.innerCornerStyle;
    const { isShowCorner } = this.props;

    return (
      <View style={[styles.container, { bottom: 0 }]}>
        {/*Mask above the scan frame*/}
        <View style={[this.getBackgroundColor(), { flex: 1 }]} />

        <View style={{ flexDirection: "row" }}>
          {/*Mask on the left side of the scan box*/}
          <View style={[this.getBackgroundColor(), { flex: 1 }]} />

          {/*Scan box*/}
          <View style={[styles.viewfinder, this.getRectSize()]}>
            {/*Scan the border of the frame*/}
            <View style={this.getBorderStyle()}>
              <Animated.View style={[animatedStyle]}>
                {this.renderScanBar()}
              </Animated.View>
            </View>

            {/*/!*Scan box corner-upper left corner*!/*/}
            {isShowCorner && (
              <View
                style={[
                  this.getCornerStyle(),
                  styles.topLeftCorner,
                  { borderLeftWidth: borderWidth, borderTopWidth: borderWidth },
                ]}
              />
            )}

            {/*Scanning box corner-upper right corner*/}
            {isShowCorner && (
              <View
                style={[
                  this.getCornerStyle(),
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
                  this.getCornerStyle(),
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
                  this.getCornerStyle(),
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
          <View style={[this.getBackgroundColor(), { flex: 1 }]} />
        </View>

        {/*Mask below the scan frame*/}
        <View
          style={[this.getBackgroundColor(), { flex: 1, alignItems: "center" }]}
        >
          <Text style={this.innerHintTextStyle} numberOfLines={1}>
            {this.props.hintText}
          </Text>
        </View>

        <View style={[this.getBackgroundColor(), this.getRectOffsetHeight()]} />
      </View>
    );
  }
}

/**
 * Create by Marno on 2019-08-19 18:33
 * Function: Camera layer of scan code interface
 * Desc：
 */
export default class QRScannerView extends Component {
  static propTypes = {
    maskColor: PropTypes.string,
    rectStyle: PropTypes.object,

    cornerStyle: PropTypes.object,
    cornerOffsetSize: PropTypes.number,
    isShowCorner: PropTypes.bool,

    isShowScanBar: PropTypes.bool,
    scanBarAnimateTime: PropTypes.number,
    scanBarAnimateReverse: PropTypes.bool,
    scanBarImage: PropTypes.any,
    scanBarStyle: PropTypes.object,

    hintText: PropTypes.string,
    hintTextStyle: PropTypes.object,

    renderHeaderView: PropTypes.func,
    renderFooterView: PropTypes.func,

    onScanResult: PropTypes.func,
    // scanInterval: PropTypes.number,
    torchOn: PropTypes.bool,
    userFront: PropTypes.bool, // Whether to use the front camera
  };

  static defaultProps = {
    torchOn: false,
    // scanInterval: 2000,
    userFront: false,
  };

  constructor(props) {
    super(props);
    // Avoid frequently triggering scan callbacks
    // this.onScanResult = throttle(this.onScanResult, this.props.scanInterval, { maxWait: 0, trailing: false });
    this.onScanResult = throttle(this.onScanResult, {
      maxWait: 0,
      trailing: false,
    });
  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
    this.rnCamera && this.rnCamera.pausePreview();
  }

  handleAppStateChange = (currentAppState) => {
    if (currentAppState !== "active") {
      this.rnCamera && this.rnCamera.pausePreview();
    } else {
      this.rnCamera && this.rnCamera.resumePreview();
    }
  };

  onScanResult = (e) => this.props.onScanResult(e);

  render() {
    const {
      onBarReadSuccess,
      renderHeaderView,
      renderFooterView,
      torchOn,
      userFront,
    } = this.props;

    // WIP - rectOfInterest
    console.log(
      defaultRectOfInterest.x,
      defaultRectOfInterest.y,
      defaultRectOfInterest.width,
      defaultRectOfInterest.height,
      CAM_VIEW_HEIGHT,
      CAM_VIEW_WIDTH
    );

    return (
      <RNCamera
        ref={(ref) => (this.rnCamera = ref)}
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
          userFront
            ? RNCamera.Constants.Type.front
            : RNCamera.Constants.Type.back
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
          <QRScannerRectView
            maskColor={this.props.maskColor}
            rectStyle={this.props.rectStyle}
            isShowCorner={this.props.isShowCorner}
            cornerStyle={this.props.cornerStyle}
            cornerOffsetSize={this.props.cornerOffsetSize}
            isShowScanBar={this.props.isShowScanBar}
            scanBarAnimateTime={this.props.scanBarAnimateTime}
            scanBarAnimateReverse={this.props.scanBarAnimateReverse}
            scanBarImage={this.props.scanBarImage}
            scanBarStyle={this.props.scanBarStyle}
            hintText={this.props.hintText}
            hintTextStyle={this.props.hintTextStyle}
          />
          {/* </SafeAreaView> */}
        </Fragment>
        {/*Draw the top title bar component*/}
        {renderHeaderView && (
          <View style={[styles.topContainer]}>{renderHeaderView()}</View>
        )}

        {/*Draw the bottom operation bar*/}
        {renderFooterView && (
          <View style={[styles.bottomContainer]}>{renderFooterView()}</View>
        )}
      </RNCamera>
    );
  }
}

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

//The following methods are tool classes copied from lodash

function throttle(func, wait, options) {
  let leading = true;
  let trailing = true;

  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  });
}

function debounce(func, wait, options) {
  let lastArgs, lastThis, maxWait, result, timerId, lastCallTime;

  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;

  // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
  const useRAF =
    !wait && wait !== 0 && typeof root.requestAnimationFrame === "function";

  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  wait = +wait || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      root.cancelAnimationFrame(timerId);
      return root.requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait);
  }

  function cancelTimer(id) {
    if (useRAF) {
      return root.cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = startTimer(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    );
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = startTimer(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }

  function pending() {
    return timerId !== undefined;
  }

  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}

function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
