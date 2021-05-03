import { StyleSheet } from "react-native";

export default StyleSheet.create({
  histoyCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    shadowColor: "#0000007d",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.16,
    elevation: 2,
  },
  historyLinkDescription: {
    marginLeft: 10,
    borderBottomColor: "#E9ECEF",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    flex: 5,
  },
  linkIcon: {
    width: 30,
    height: 30,
    marginLeft: 14,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  historyLink: {
    // fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#333333",
  },
  historyDate: {
    color: "#1b0303",
    fontSize: 15,
    opacity: 0.5,
  },
  arrowRightIcon: {
    marginRight: 15,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
