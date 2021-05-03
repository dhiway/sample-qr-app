import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cameraButtonHolder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'red',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButtons: {
    margin: 20,
    backgroundColor: "#01010142",
    padding: 20,
    borderRadius: 5,
  },
});
