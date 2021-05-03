import { StyleSheet } from "react-native";

export default StyleSheet.create({
  splashContainer: {
    flexDirection: "column",
    display: "flex",
    // backgroundColor: 'red',
    flex: 1,
  },
  logoHolder: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'blue'
  },
  seqrLogoHolder: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'blue'
  },
  brandHolder: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  logoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
  },
  tagLine: {
    marginTop: 20,
  },
  brandText: {
    fontFamily: "Roboto-Bold",
    fontSize: 14,
  },
});
