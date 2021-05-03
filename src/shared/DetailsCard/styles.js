import { StyleSheet, Platform, Dimensions } from "react-native";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
export default StyleSheet.create({
  detailsCardHolder: {
    flex: 1,
    marginTop: 60,
    display: "flex",
  },
  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 27,
    paddingRight: 27,
    paddingBottom: 25,
    marginBottom: 20,
    paddingTop: 20,
  },
  detailsIconCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  detailsIconHolder: {
    width: 140,
    marginTop: -60,
    backgroundColor: "#fff",
    padding: 20,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    paddingTop: 30,
    paddingBottom: 34,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20.16,
    elevation: 20,
  },
  detailsContent: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  detailsIndicator: {
    flex: 1,
  },
  detailsIndicatorIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    //   flex:1
  },
  detailsIndicatorText: {
    color: "#333333",
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
    alignItems: "center",
  },
  detailsIndicatorRisk: {
    color: "#333333",
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },

  detailsIndicatorWarning: {
    color: "#333333",
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
  detailsInfo: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 5,
  },
  detailsProtectionBar: {
    display: "flex",
    marginTop: 5,
    flexDirection: "row",
  },
  protectionBar: {
    flex: 1,
    marginRight: 3,
  },
  safeLink: {
    backgroundColor: "#1EA15D",
    flex: 1.5,
  },
  notSafe: {
    backgroundColor: "#FF0707",
  },
  blockChainVerified: {
    backgroundColor: "#00CCFF",
    flex: 3,
  },
  protectionBarFirst: {
    // width:'60%',
    height: 3,
    flex: 2.5,
  },
  protectionBarSecond: {
    height: 3,
    backgroundColor: "#FE9B1E",
  },
  protectionBarThird: {
    height: 3,
  },
  protectionBarFourth: {
    height: 3,
  },
  detailsLinkText: {
    fontSize: 17,
    // fontFamily: "Roboto-Bold",
    // marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 8,
    color: "#333333",
  },
  detailsCertificationInfo: {
    display: "flex",
    flexDirection: "row",
  },
  detailsIssuedInfo: {
    marginLeft: 10,
    display: "flex",
    flex: 4,
    justifyContent: "center",
  },
  sslIcon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
  },
  sslText: {
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: "#3E3E3E",
    marginTop: 4,
    flex: 6,
  },
  detailsIssuedInfoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  techDetailsLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    marginLeft: 30,
  },
  techDetailsText: {
    color: "#3939FF",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
  },
  detailsRedirectLinkHolder: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
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
  detailsShare: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    // marginTop: 8,
  },
  detailsShareButtons: {
    // padding: 15,
    paddingBottom: 0,
  },
  backdrop: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    position: "absolute",
    opacity: 0,
  },
  infoModalContainer: {
    //   backgroundColor: 'red'
    padding: 25,
  },
  infoModalHead: {
    display: "flex",
    flexDirection: "row",
  },
  helpText: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    marginLeft: 10,
    color: "#ACACAC",
  },
  headTextHold: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 22,
    // alignItems:'center'
  },
  infoCardTextHolder: {
    marginLeft: 20,
    marginRight: 20,
  },
  infoList: {
    marginTop: 20,
  },
  infoCardText: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    marginBottom: 5,
  },
  infoCardTextPara: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: "#606060",
  },
  trusted: {
    color: "#1EA15D",
  },
  risk: {
    color: "#FF3636",
  },
  payment: {
    color: "#FE9B1E",
  },
  //   sslText: {
  //     color: "#606060",
  //     fontSize: 12,
  //     fontFamily: "Roboto-Regular",
  //     marginTop: 5,
  //     alignSelf:'center'
  //   },
  feedbackIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  feedBackIconClick: {
    margin: 10,
  },

  //   phone Number
  cardHeadText: {
    color: "#000000",
    alignSelf: "center",
    alignContent: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 14,
  },
  cardTextMain: {
    color: "#9FA5AA",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginTop: 2,
    alignSelf: "center",
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  //   payment
  paymentInfoHolder: {
    justifyContent: "center",
  },
  paymentUpiName: {
    color: "#333333",
    fontSize: 18,
    // fontFamily: "Roboto-Regular",
  },
  paymentUpiInfo: {
    marginTop: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentUpiId: {
    color: "#333333",
    fontSize: 18,
    // fontFamily: "Roboto-Regular",
  },
  upiPaymentText: {
    color: "#333333",
  },
  feedBackInfo: {
    //   marginBottom:20,
    //   paddingBottom:80
  },
  sslTextRisk: {
    marginLeft: -10,
    fontSize: 12,
    // fontFamily: "Roboto-Regular",
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
    paddingLeft: 15,
    flex: 4,
  },
  boldText: {
    // fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardText: {
    // fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginBottom: 6,
  },
  activityIndicatorContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: "50%",
  },
  sslIconHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  detailsgoogleSuggestion: {
    color: "#333333",
    // fontFamily: "Roboto-Regular",
    fontSize: 12,
    // fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  detailsgoogleSuggestionText: {
    color: "#666666",
    // fontFamily: "Roboto-Regular",
    fontSize: 12,
    // marginLeft: 8,
    marginTop: 10,
  },
  barText: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
  },
  barTextSafe: {
    flex: 1,
    color: "#00CCFF",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-start",
  },
  barTextDanger: {
    flex: 1,
    color: "#FF3636",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  barContent: {
    flex: 1,
    flexDirection: "row",
  },

  barContentBlock: {
    color: "black",
    paddingTop: 15,
    flex: 4.6,
  },
  barContentBlockDanger: {
    color: "black",
    paddingTop: 15,
    flex: 6,
  },
  barContentBlockTrust: {
    color: "black",
    paddingTop: 15,
    flex: 4.5,
  },
  barContentImageTrust: {
    flex: 4.5,
  },
  barContentImageWarning: {
    flex: 2,
  },
  barContentImageDanger: {
    flex: 1,
  },
  hashMarkContent: {
    color: "#00CCFF",
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 15,
  },
  hashSymbol: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#00CCFF",
    textShadowColor: "#FFA500",
    textShadowRadius: 10,
  },
});
