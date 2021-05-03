import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export default StyleSheet.create({
  permissionsList: {
    padding: 20,
  },
  permissionListHeader: {
    flexDirection: "row",
    paddingBottom: 40,
    paddingTop: 40,
  },
  permissionListHeaderHolder: {
    flex: 3,
  },
  permissionListHeadText: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  denyButton: {
    flex: 1,
    marginLeft: 15,
  },
  denyButtonGrey: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#232d4726",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  denyButtonText: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  permissionsRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  permissionLogo: {
    flex: 0.3,
    justifyContent: "center",
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  permissionDescription: {
    flex: 2,
  },
  permissionDescriptionPara: {
    fontSize: 14,
  },
  permissionHead: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
  bottomButtonHolder: {
    margin: 10,
  },
});
