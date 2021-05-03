import { StyleSheet, Platform, Dimensions } from "react-native";
export default StyleSheet.create({
  threatText: {
    // fontFamily: "Roboto-Bold",
    textAlign: "left",
    alignSelf: "center",
    alignContent: "center",
    // marginLeft: 3,
    marginTop: 10,
    flex: 5,
  },
  threat: {
    //color: "#FF0707",
    color: "#9FA5AA",
  },
  warning: {
    //color: "#FE9B1E",
    color: "#9FA5AA",
  },
  threatHolder: {
    flexDirection: "row",
    display: "flex",
    flex: 1,
  },

  threatIcon: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    padding: 30,
  },
  modalDescription: {
    fontSize: 17,
    color: "#00000087",
    textAlign: "left",
    marginTop: 15,
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalHeadText: {
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 14,
    fontSize: 18,
  },
  risk: {
    color: "#FF3E3E",
  },
  failure: {
    color: "#FE9B1E",
  },
  safe: {
    color: "#9FA5AA",
    //color: "#00BC07",
  },
  detailsDescriptionWarning: {
    // fontFamily: "Roboto-Bold",
    fontSize: 16,
    // marginTop:5,
    //color: "#FE9B1E",
    color: "#333333",
  },
  detailsDescriptionTextRisk: {
    // fontFamily: "Roboto-Bold",
    fontSize: 18,
    // marginTop:5,
    //color: "#FF3636",
    color: "#333333",
  },
  detailsIndicatorWarning: {
    fontSize: 18,
    color: "#FE9B1E",
    marginBottom: 5,
  },
  detailsDescriptionText: {
    // fontFamily: "Roboto-Bold",
    fontSize: 17,
    // marginTop:5,
    //color: "#1EA15D",
    color: "#333333",
  },

  detailsIndicatorText: {
    fontSize: 19,
    color: "#1EA15D",
    marginBottom: 5,
  },
  detailsIndicatorRisk: {
    color: "#FF3636",
    // fontFamily: "Roboto-Regular",
    fontSize: 17,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  detailsgoogleSuggestion: {
    color: "#333333",
    // fontFamily: "Roboto-Regular",
    fontSize: 17,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  detailsgoogleSuggestionText: {
    color: "#333333",
    // fontFamily: "Roboto-Regular",
    fontWeight: "bold",
    fontSize: 17,
  },
  detailsAdvisoryText: {
    color: "#333333",
    // fontFamily: "Roboto-Regular",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 17,
  },
});
