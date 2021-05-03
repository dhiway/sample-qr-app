import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils/colors";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default StyleSheet.create({
  onboardingButtons: {
    padding: 20,
  },
  skipText: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Roboto-Regular",
  },
  nextText: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Roboto-Bold",
  },
  sliderContentHolder: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    // fontSize: 18,
    fontSize: width / 18,
    fontFamily: "Roboto-Regular",
    color: "#000000",
    marginBottom: 2,
  },
  subTitle: {
    color: "#000000",
    fontFamily: "Roboto-Bold",
    fontSize: 21,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    alignSelf: "center",
    alignContent: "center",
    color: "#5D5D5D",
    // fontSize: 16,
    fontSize: width / 27,
    paddingHorizontal: 20,
  },
  slider: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  topHeader: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    paddingHorizontal: 10,
    marginTop: -40,
  },
  sliderButtons: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  sliderImage: {
    alignSelf: "center",
    height: height * 0.5,
    aspectRatio: 1,
    width: width * 0.4,
  },
  dotStyles: {
    backgroundColor: "#E8E8E8",
    width: 14,
    height: 14,
    borderRadius: 50,
  },
  activeDotStyles: {
    backgroundColor: "#11CDEF",
    width: 16,
    height: 16,
    borderRadius: 50,
  },
});
