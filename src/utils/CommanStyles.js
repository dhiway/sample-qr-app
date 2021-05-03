import { StyleSheet } from "react-native";
import Colors from "../utils/colors";

export default StyleSheet.create({
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  greyContainer: {
    backgroundColor: "#F8F9FE",
    flex: 1,
  },
  button: {
    backgroundColor: "#00C3E6",
    padding: 10,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 12,
    alignSelf: "center",
  },
  primaryButton: {
    backgroundColor: "#232D47",
    // flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    // fontFamily: "Roboto-Bold",
  },
  safeView: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  primaryButtonGrey: {
    backgroundColor: "#838383",
    padding: 12,
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    flex: 1,
    flexGrow: 1,
    margin: 5,
  },
  primaryButtonTextGrey: {
    color: "#fff",
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonIcon: {
    marginRight: 5,
  },
});
