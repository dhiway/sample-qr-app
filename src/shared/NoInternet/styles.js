import { StyleSheet } from "react-native";

export default StyleSheet.create({
  connectContainer: {
    display: "flex",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  connectTextHead: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    marginTop: 18,
  },
  connectTextDescription: {
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  detailsRedirectLinkHolder: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    padding: 20,
    margin: 15,
  },
  detailsRedirectLinkHeader: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  detailsRedirectLinkText: {
    // fontFamily: "Roboto-Regular",
    fontSize: 15,
    color: "#666666",
    flex: 2,
  },
  redirectLink: {
    color: "#666666",
    // fontFamily: "Roboto-Regular",
    marginTop: 2,
    fontSize: 15,
  },
  detailsShareButtons: {
    // padding: 15,
    paddingBottom: 0,
  },
});
