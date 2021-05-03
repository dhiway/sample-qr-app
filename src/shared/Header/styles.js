import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    paddingLeft: 10,
    paddingRight: 8,
    // paddingBottom: 10,
    paddingTop: 0,
    backgroundColor: "#fff",
    borderBottomColor: "#dfe1e5",
    borderBottomWidth: 1,
  },
  headerContainerWithBorder: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  headerHolder: {
    display: "flex",
    flexDirection: "row",
  },
  headerBackContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
  },
  headerBack: {
    marginLeft: 10,
    paddingVertical: 17,
    paddingTop: 16,
  },
  headerBackText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  headrRightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: "#9FA5AA",
    height: 40,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 3,
  },
  backButton: {
    backgroundColor: "#fff",
    marginLeft: -5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
  },
  headerBackSpacing: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 16,
  },
});
